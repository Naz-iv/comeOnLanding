from django.apps import AppConfig


class BefitConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "benefit"

    def ready(self):
        from . import signals
