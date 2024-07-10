import os

from django.db import models
from django.conf import settings


class OrderTIH(models.Model):
    datetime = models.DateTimeField(auto_now_add=True)
    price = models.IntegerField(
        choices=(
            ("tih_start", os.getenv("TIH_START", settings.TIH_START)),
            ("tih_end", os.getenv("TIH_END", settings.TIH_END)),
        ),
        default="tih_end"
    )
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
