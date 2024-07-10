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

from .models import OrderTIH
from .forms import OrderForm


def index(request: HttpRequest, **kwargs) -> HttpResponse:
    sold_base = cache.get("base_count", OrderTIH.objects.count())
    
    context = {
        "form": OrderForm(),
        "price_start": settings.TIH_START,
        "price_end": settings.TIH_END,
        "start_amount": int(settings.START_AMOUNT),
        "sold_base": sold_base,
    }
    paid = request.GET.get("paid")
    failure = request.GET.get("failure")

    if paid:
        context["paid"] = paid

    if failure:
        context["failure"] = failure

    return render(request, template_name="tih/home.html", context=context)


def agreement(request: HttpRequest, **kwargs) -> HttpResponse:
    return render(request, template_name="tih/includes/agreement.html")


# Liqpay payment algorithm
def pay(order: OrderTIH) -> str | None:
    liqpay = LiqPay(settings.LIQPAY_PUBLIC_KEY, settings.LIQPAY_PRIVATE_KEY)
    params = {
        "action": "pay",
        "amount": f"{order.price}",
        "currency": "UAH",
        "description": f"Оплата за курс Танцюй і Худни",
        "paytypes": "apay privat24",
        "order_id": f"{order.order_id}",
        "version": "3",
        "language": "uk",
        "result_url": urljoin(settings.REDIRECT_DOMAIN, str(reverse_lazy("tih:pay_callback"))),
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


def send_email_access(order: OrderTIH) -> None:
    access_url = settings.TIH_URL
    html_message = render_to_string(
        "tih/communication/email.html",
        {"recipient_name": order.fullname, "url": access_url, "telegram_url": settings.TELEGRAM_TIH}
    )

    send_mail(
        subject=f"Підписка Танцюй і Худни",
        message="",
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[order.email],
        html_message=html_message,
        fail_silently=False,
    )


class PayView(TemplateView):
    def get(self, request, *args, **kwargs):
        return redirect(reverse_lazy("tih:home"))

    def post(self, request, *args, **kwargs):
        form = OrderForm(request.POST)
        if form.is_valid():
            
            sold_base = cache.get("base_count", OrderTIH.objects.count())
            price = settings.TIH_START

            if sold_base < int(settings.START_AMOUNT):
                price = settings.TIH_START
            else:
                price = settings.TIH_END
 
            order = OrderTIH.objects.create(
                price=price, order_id=uuid4(), **form.cleaned_data
            )
            return redirect(pay(order))
        else:
            return render(request, "tih/home.html", {"form": form, "invalid": True})


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
            order = get_object_or_404(OrderTIH, order_id=response.get("order_id"))

            if response["status"] == "success":
                order.payment_status = "paid"
                order.save()

                send_email_access(order)

                return redirect(reverse("tih:home") + "?paid=True")

        return redirect(reverse("tih:home") + "?failure=True")
