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
    sold_base = cache.get("base_count", 0)
    sold_extended = cache.get("extended_count", 0)

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
        "sandbox": 1,  # sandbox mode, set to 1 to enable it
        "result_url": urljoin(settings.REDIRECT_DOMAIN, str(reverse_lazy("benefit:pay_callback"))),
        # url to callback view
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


# Fondy payment algorithm
def pay_fondy(order: Order) -> str | None:
    # params = {
    #     "order_id": f"{order.order_id}",
    #     "order_desc": f"Оплата за курс BeneFit: {order.tier}",
    #     "currency": "UAH",
    #     "amount": "1",
    #     "signature": "df38818facfbfd79953fa847667dac73a1291127",
    #     "merchant_id": "1396424"
    # }
    #
    # merchant_password = settings.FONDY_MERCHANT_PASSWORD
    #
    # concatenated_string = "|".join(sorted(
    #     [params["order_id"], params["order_desc"], params["currency"], params["amount"],
    #      params["merchant_id"]])) + "|" + merchant_password
    #
    # # Calculate SHA1 hash
    # signature = hashlib.sha1(concatenated_string.encode()).hexdigest()
    #
    # # Update the params dictionary with the generated signature
    # params["signature"] = signature
    #
    # try:
    #     response = requests.post(url="https://pay.fondy.eu/api/checkout/url/", data=params)
    #     if response.status_code == 200:
    #         print(response.url)
    #         return response.url
    #     else:
    #         print("Something went wrong")
    #         return
    # except Exception() as e:
    #
    #     print("Exception occurred", str(e))
    price = int(order.price) * 100
    api = Api(merchant_id=settings.FONDY_MERCHANT_ID, secret_key=settings.FONDY_MERCHANT_SECRET_KEY)
    checkout = Checkout(api=api)
    data = {
        "order_id": f"{order.order_id}",
        "order_desc": f"Оплата за курс BeneFit: {order.tier}",
        "currency": "UAH",
        "amount": price,
        "response_url": urljoin(settings.REDIRECT_DOMAIN, str(reverse_lazy("benefit:pay_callback"))),
        "server_callback_url": urljoin(settings.REDIRECT_DOMAIN, str(reverse_lazy("benefit:pay_callback"))),
    }
    return checkout.url(data).get("checkout_url")


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
    # def get(self, request, *args, **kwargs):
    #     return redirect(reverse_lazy("benefit:home"))

    def post(self, request, *args, **kwargs):
        form = OrderForm(request.POST)
        if form.is_valid():
            tier = form.cleaned_data.get("tier", "Бенефітик")

            sold_base = cache.get("base_count", 0)
            sold_extended = cache.get("extended_count", 0)
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
            return redirect(pay_fondy(order))
        else:
            return render(request, "home.html", {"form": form, "invalid": True})


# Liqpay callback view
# @method_decorator(csrf_exempt, name="dispatch")
# class PayCallbackView(View):
#     def post(self, request, *args, **kwargs):
#         print("Got responce form server")
#         liqpay = LiqPay(settings.LIQPAY_PUBLIC_KEY, settings.LIQPAY_PRIVATE_KEY)
#         data = request.POST.get("data")
#         signature = request.POST.get("signature")
#         sign = liqpay.str_to_sign(settings.LIQPAY_PRIVATE_KEY + data + settings.LIQPAY_PRIVATE_KEY)
#         if sign == signature:
#             response = liqpay.decode_data_from_str(data)
#             order = get_object_or_404(Order, order_id=response.get("order_id"))
#
#             # TODO: Change status to success when testing in production
#             print(response["status"])
#             if response["status"] == "sandbox":
#                 order.payment_status = "paid"
#                 order.save()
#
#                 send_email_access(order)
#
#                 return redirect(reverse("benefit:home") + "?paid=True")
#
#         return redirect(reverse("benefit:home") + "?failure=True")

# Fondy callback view
@method_decorator(csrf_exempt, name="dispatch")
class PayCallbackView(View):
    def post(self, request, *args, **kwargs):
        order = get_object_or_404(Order, order_id=request.POST.get("order_id"))

        concatenated_string = "|".join(sorted(
            [order.order_id,
             f"Оплата за курс BeneFit: {order.tier}",
             "UAH",
             int(order.price) * 100,
             settings.FONDY_MERCHANT_ID + "|" + settings.FONDY_MERCHANT_SECRET_KEY]
        ))

        # Calculate SHA1 hash
        signature = hashlib.sha1(concatenated_string.encode()).hexdigest()
        # TODO: Change status to success when testing in production
        if signature == request.POST.get("signature"):
            if request.POST.get("order_status") == "approved":
                order.payment_status = "paid"
                order.save()

                send_email_access(order)

                return redirect(reverse(
                    "benefit:home") + f"?paid=True&status={order_status}&{signature == request.POST.get('signature')}")

        return redirect(reverse(
            "benefit:home") + f"?failure=True&status={order_status}&{signature == request.POST.get('signature')}")
