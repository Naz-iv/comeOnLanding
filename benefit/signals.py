from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.cache import cache
from .models import Order


@receiver(post_save, sender=Order)
def update_cache(sender, instance, **kwargs):

    base_key = "base_count"
    extended_key = "extended_count"
    cache.set(base_key, Order.objects.filter(tier="Бенефітик").count())
    cache.set(extended_key, Order.objects.filter(tier="Бенефітище").count())
