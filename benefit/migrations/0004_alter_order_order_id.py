# Generated by Django 4.1 on 2024-02-05 00:24

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("benefit", "0003_order_order_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="order_id",
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
