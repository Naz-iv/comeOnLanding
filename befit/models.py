from django.db import models


class Order(models.Model):
    datetime = models.DateTimeField(auto_now_add=True)
    price = models.IntegerField()
    email = models.EmailField()
    phone = models.CharField(max_length=255)
    fullname = models.CharField(max_length=255)

    class Meta:
        ordering = ["-datetime"]
