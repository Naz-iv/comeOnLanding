from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.cache import cache
from .models import OrderTIH


@receiver(post_save, sender=OrderTIH)
def update_cache(sender, instance, **kwargs):

    base_key = "base_count"
    cache.set(base_key, OrderTIH.objects.count())