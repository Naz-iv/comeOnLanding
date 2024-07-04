import requests
import hashlib
import hmac
from uuid import uuid4
from urllib.parse import urljoin
from bs4 import BeautifulSoup

from django.views import View
from django.views.generic import TemplateView
from django.http import HttpResponse, HttpRequest
from django.shortcuts import render, redirect, get_object_or_404
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.urls import reverse_lazy
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.core.cache import cache

from .models import Order
from .forms import OrderForm

WAYFORPAY_MERCHANT_ACCOUNT = "test_merch_n1"
WAYFORPAY_SECRET_KEY = "flk3409refn54t54t*FNJRET"
WAYFORPAY_API_URL = "https://secure.wayforpay.com/pay"


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


def generate_signature(data: dict):
    data_list = [
        data.get("merchantAccount"),
        data.get("merchantDomainName", "https://befit-pgfb.onrender.com/"),
        data.get("orderReference"),
        data.get("orderDate", ""),
        data.get("amount"),
        data.get("currency"),
        data.get("productName", ["Order"])[0],
        data.get("productCount", ["1"])[0],
        data.get("productPrice", ["490"])[0]
    ]
    signature_string = ";".join(map(str, data_list))

    print(signature_string.encode("utf-8"))

    return hmac.new(";".join(map(str, data_list)).encode('utf-8'), WAYFORPAY_SECRET_KEY.encode('utf-8'), hashlib.md5).hexdigest()


# Wayforpay payment algorithm
def pay(order: Order):
    payment_data = {
        "merchantAccount": WAYFORPAY_MERCHANT_ACCOUNT,
        "orderReference": str(order.order_id),
        "merchantDomainName": "https://befit-pgfb.onrender.com/",
        "amount": str(order.price),
        "currency": "UAH",
        "orderDate": str(int(order.datetime.timestamp())),
        "productName": ["Order"],
        "productCount": [1],
        "productPrice": ["490"],
        "returnUrl": urljoin(settings.REDIRECT_DOMAIN, str(reverse_lazy("benefit:pay_callback"))),
        "serviceUrl": urljoin(settings.REDIRECT_DOMAIN, str(reverse_lazy("benefit:pay_callback"))),
    }
    order.signature = generate_signature(payment_data)
    order.save()
    payment_data["merchantSignature"] = order.signature
    return payment_data


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
            payment_data = pay(order)
            if payment_data:
                return render(
                    request, "includes/wayforpay_form.html",
                    {"payment_data": payment_data, "WAYFORPAY_API_URL": WAYFORPAY_API_URL}
                )
            else:
                return render(request, "home.html", {"form": form, "invalid": True})
        else:
            return render(request, "home.html", {"form": form, "invalid": True})


# Wayforpay callback view
@method_decorator(csrf_exempt, name="dispatch")
class PayCallbackView(View):
    def post(self, request, *args, **kwargs):
        data = request.POST.dict()

        for key, value in data.items():
            print(key, value)
        received_signature = data.pop("merchantSignature", "")

        order = get_object_or_404(Order, order_id=data.get("orderReference"))

        if received_signature == order.signature:

            if data["transactionStatus"] == "Approved":
                order.payment_status = "paid"
                order.save()

                send_email_access(order)

                return redirect(reverse("benefit:home") + "?paid=True")

        return redirect(reverse_lazy("benefit:home") + "?failure=True")
