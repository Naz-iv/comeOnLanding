from django.contrib import admin
from django.urls import path, re_path
from .views import index, agreement, PayView, PayCallbackView

urlpatterns = [
    path("", index, name="home"),
    path("agreement/", agreement, name="agreement"),
    path("pay/", PayView.as_view(), name="pay_view"),
    path("pay-callback/", PayCallbackView.as_view(), name="pay_callback"),
]

app_name = "benefit"
