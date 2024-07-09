from django.apps import AppConfig


class TihConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'tih'

    def ready(self):
        from . import signals