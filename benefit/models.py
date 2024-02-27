import os

from django.db import models
from django.conf import settings


class Order(models.Model):
    datetime = models.DateTimeField(auto_now_add=True)
    price = models.IntegerField(
        choices=(
            ("base", os.getenv("BASE_TIER", settings.BASE_TIER_PRICE)),
            ("top", os.getenv("TOP_TIER", settings.EXTENDED_TIER_PRICE))
        ),
        default="base"
    )
    tier = models.CharField(max_length=31)
    email = models.EmailField()
    phone = models.CharField(max_length=63)
    fullname = models.CharField(max_length=63)
    payment_status = models.CharField(
        max_length=31,
        choices=(
            ("paid", "Paid"),
            ("pending", "Pending")
        ),
        default="pending"
    )
    order_id = models.CharField(max_length=255, unique=True)

    class Meta:
        ordering = ["-datetime"]
