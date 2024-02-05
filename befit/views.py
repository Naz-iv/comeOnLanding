import requests
from liqpay import LiqPay
from uuid import uuid4

from django.views import View
from django.views.generic import TemplateView
from django.http import HttpResponse
from django.shortcuts import render, redirect,get_object_or_404
from django.http import HttpRequest, HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.urls import reverse_lazy
from django.utils import timezone
from django.forms import Form

from .models import Order
from .forms import OrderForm


def index(request: HttpRequest, **kwargs) -> HttpResponse:
    context = {"form": OrderForm()}
    paid = request.GET.get("paid")
    failure = request.GET.get("failure")

    if paid:
        context["paid"] = paid

    if paid:
        context["failure"] = paid

    return render(request, template_name="home.html", context=context)


def pay(order: Order) -> str | None:
    liqpay = LiqPay(settings.LIQPAY_PUBLIC_KEY, settings.LIQPAY_PRIVATE_KEY)
    params = {
        "action": "pay",
        "amount": f"{order.price}",
        "currency": "UAH",
        "description": f"Оплата за курс BiFit: {order.tier}",
        "paytypes": "apay gpay card liqpay privat24",
        "order_id": f"{order.order_id}",
        "version": "3",
        "language": "uk",
        "delivery_emails": [order.email],
        "sandbox": 1,  # sandbox mode, set to 1 to enable it
        "server_url": str(reverse_lazy("befit:pay_callback")),  # url to callback view
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


class PayView(TemplateView):
    def get(self,  request, *args, **kwargs):
        return redirect(reverse_lazy("befit:home"))

    def post(self, request, *args, **kwargs):
        form = OrderForm(request.POST)
        if form.is_valid():
            tier = form.cleaned_data.get("tier", "BASE")
            price = settings.BASE_TIER_PRICE if tier == "BASE" else settings.EXTENDED_TIER_PRICE

            order = Order.objects.create(
                price=price, order_id=uuid4(), **form.cleaned_data
            )

            return redirect(pay(order))
        else:
            return render(request, "home.html", {"form": form, "invalid": True})


@method_decorator(csrf_exempt, name="dispatch")
class PayCallbackView(View):
    def post(self, request, *args, **kwargs):
        liqpay = LiqPay(settings.LIQPAY_PUBLIC_KEY, settings.LIQPAY_PRIVATE_KEY)
        data = request.POST.get("data")
        signature = request.POST.get("signature")
        sign = liqpay.str_to_sign(settings.LIQPAY_PRIVATE_KEY + data + settings.LIQPAY_PRIVATE_KEY)
        if sign == signature:
            print("callback is valid")
            response = liqpay.decode_data_from_str(data)
            order = get_object_or_404(Order, response.get("order_id"))
            if response["status"] == "success":
                order.payment_status = "paid"
                order.save()
                print("callback data", response)
                return redirect(reverse("befit:home"), paid="True")
        else:
            print("callback invalid")
            response = liqpay.decode_data_from_str(data)
            print("callback data", response)
            return redirect(reverse("befit:home"), failure="True")


