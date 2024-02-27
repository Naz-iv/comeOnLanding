from django import forms
from django.core.validators import MinLengthValidator, MaxLengthValidator
from .models import Order


class StrippedPhoneNumberField(forms.CharField):
    def clean(self, value):
        if value:
            value = value.replace(" ", "").replace("(", "").replace(")", "").replace("-", "")
        return super().clean(value)


class OrderForm(forms.ModelForm):
    fullname = forms.CharField(
        label="Ім'я",
        widget=forms.TextInput(attrs={"class": "input--style-4", "placeholder": "Введіть ім'я..."}),
        required=True,
        error_messages={
            "required": "Поле є обов'язковим.",
        }
    )
    email = forms.CharField(
        label="Електронна Пошта",
        widget=forms.EmailInput(attrs={"class": "input--style-4", "placeholder": "Введіть пошту..."}),
        required=True,
        error_messages={
            "required": "Поле є обов'язковим.",
            "invalid": "Ведіть коректну адресу електронної пошти.",
        }
    )
    phone = StrippedPhoneNumberField(
        label="Номер Телефону",
        widget=forms.TextInput(attrs={"class": "input--style-4", "placeholder": "Введіть телефон..."}),
        required=True,
        validators=[MinLengthValidator(10), MaxLengthValidator(13)],
        error_messages={
            "required": "Поле є обов'язковим.",
            "invalid": "Формат номеру телефону не вірний.",
            "min_length": "Введіть коректний номер телефону.",
            "max_length": "Введіть коректний номер телефону.",

        }
    )
    tier = forms.CharField(
        label="Тариф",
        required=True,
        widget=forms.TextInput(attrs={"class": "disabled"}),

    )

    class Meta:
        model = Order
        fields = ["fullname", "email", "phone", "tier"]

