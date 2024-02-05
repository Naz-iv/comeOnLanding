# Generated by Django 4.1 on 2024-02-04 23:51

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("befit", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="order",
            name="payment_status",
            field=models.CharField(
                choices=[("paid", "Paid"), ("pending", "Pending")],
                default="pending",
                max_length=31,
            ),
        ),
        migrations.AlterField(
            model_name="order",
            name="fullname",
            field=models.CharField(max_length=63),
        ),
        migrations.AlterField(
            model_name="order",
            name="phone",
            field=models.CharField(max_length=63),
        ),
        migrations.AlterField(
            model_name="order",
            name="tier",
            field=models.CharField(max_length=31),
        ),
    ]
