import requests
import hashlib

from datetime import datetime
from liqpay import LiqPay
from uuid import uuid4
from urllib.parse import urljoin
from cloudipsp import Api, Checkout

from django.views import View
from django.views.generic import TemplateView
from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404, reverse
from django.http import HttpRequest, HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.urls import reverse_lazy
from django.utils import timezone
from django.forms import Form
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.core.cache import cache

from .models import Order
from .forms import OrderForm


def index(request: HttpRequest, **kwargs) -> HttpResponse:
    sold_base = cache.get("base_count", Order.objects.filter(tier="Бенефітик").count())
    sold_extended = cache.get("extended_count", Order.objects.filter(tier="Бенефітище").count())

    context = {
        "form": OrderForm(),
        "base_price_start": settings.BASE_TIER_START,
        "extended_price_start": settings.EXTENDED_TIER_START,
        "base_price_end": settings.BASE_TIER_END,
        "extended_price_end": settings.EXTENDED_TIER_END,
        "start_amount": int(settings.START_AMOUNT),
        "sold_base": sold_base,
        "sold_extended": sold_extended,
    }
    paid = request.GET.get("paid")
    failure = request.GET.get("failure")

    if paid:
        context["paid"] = paid

    if failure:
        context["failure"] = failure

    return render(request, template_name="home.html", context=context)


def agreement(request: HttpRequest, **kwargs) -> HttpResponse:
    return render(request, template_name="includes/agreement.html")


# Liqpay payment algorithm
def pay(order: Order) -> str | None:
    liqpay = LiqPay(settings.LIQPAY_PUBLIC_KEY, settings.LIQPAY_PRIVATE_KEY)
    params = {
        "action": "pay",
        "amount": f"{order.price}",
        "currency": "UAH",
        "description": f"Оплата за курс BeneFit: {order.tier}",
        "paytypes": "apay privat24",
        "order_id": f"{order.order_id}",
        "version": "3",
        "language": "uk",
        "result_url": urljoin(settings.REDIRECT_DOMAIN, str(reverse_lazy("benefit:pay_callback"))),
    }

    params = {
        "signature": liqpay.cnb_signature(params),
        "data": liqpay.cnb_data(params)
    }
    try:
        response = requests.post(url="https://www.liqpay.ua/api/3/checkout", data=params)
        if response.status_code == 200:
            return response.url
        else:
            print("Something went wrong")
            return
    except Exception() as e:
        print("Exception occurred", str(e))


def send_email_access(order: Order) -> None:
    access_url = settings.ACCESS_URL_EXTENDED if order.tier == "Бенефітище" else settings.ACCESS_URL_BASE
    html_message = render_to_string(
        "communication/email.html",
        {"recipient_name": order.fullname, "url": access_url, "tier": order.tier, "telegram_url": settings.TELEGRAM_URL}
    )

    send_mail(
        subject=f"Підписка BeneFit {order.tier}",
        message="",
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[order.email],
        html_message=html_message,
        fail_silently=False,
    )


class PayView(TemplateView):
    def get(self, request, *args, **kwargs):
        return redirect(reverse_lazy("benefit:home"))

    def post(self, request, *args, **kwargs):
        form = OrderForm(request.POST)
        if form.is_valid():
            tier = form.cleaned_data.get("tier", "Бенефітик")

            sold_base = cache.get("base_count", Order.objects.filter(tier="Бенефітик").count())
            sold_extended = cache.get("extended_count", Order.objects.filter(tier="Бенефітище").count())
            price = settings.BASE_TIER_START

            if tier == "Бенефітик":
                if sold_base < int(settings.START_AMOUNT):
                    price = settings.BASE_TIER_START
                else:
                    price = settings.BASE_TIER_END
            elif tier == "Бенефітище":
                if sold_extended < int(settings.START_AMOUNT):
                    price = settings.EXTENDED_TIER_START
                else:
                    price = settings.EXTENDED_TIER_END

            order = Order.objects.create(
                price=price, order_id=uuid4(), **form.cleaned_data
            )
            return redirect(pay(order))
        else:
            return render(request, "home.html", {"form": form, "invalid": True})


# Liqpay callback view
@method_decorator(csrf_exempt, name="dispatch")
class PayCallbackView(View):
    def post(self, request, *args, **kwargs):
        liqpay = LiqPay(settings.LIQPAY_PUBLIC_KEY, settings.LIQPAY_PRIVATE_KEY)
        data = request.POST.get("data")
        signature = request.POST.get("signature")
        sign = liqpay.str_to_sign(settings.LIQPAY_PRIVATE_KEY + data + settings.LIQPAY_PRIVATE_KEY)
        if sign == signature:
            response = liqpay.decode_data_from_str(data)
            order = get_object_or_404(Order, order_id=response.get("order_id"))

            if response["status"] == "success":
                order.payment_status = "paid"
                order.save()

                send_email_access(order)

                return redirect(reverse("benefit:home") + "?paid=True")

        return redirect(reverse("benefit:home") + "?failure=True")
