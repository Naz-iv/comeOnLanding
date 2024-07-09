from django.contrib import admin
from django.urls import path, re_path
from .views import index, home, agreement, PayView, PayCallbackView

urlpatterns = [
    path("", home, name="start"),
    path("benefit/", index, name="home"),
    path("benefit/agreement/", agreement, name="agreement"),
    path("benefit/pay/", PayView.as_view(), name="pay_view"),
    path("benefit/pay-callback/", PayCallbackView.as_view(), name="pay_callback"),
]

app_name = "benefit"
