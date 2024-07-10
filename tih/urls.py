from django.contrib import admin
from django.urls import path, re_path
from .views import index, agreement, PayView, PayCallbackView

urlpatterns = [
    path("", index, name="home"),
    path("tih/agreement/", agreement, name="agreement"),
    path("tih/pay/", PayView.as_view(), name="pay_view"),
    path("tih/pay-callback/", PayCallbackView.as_view(), name="pay_callback"),
]

app_name = "tih"
