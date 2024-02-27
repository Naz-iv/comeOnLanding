from django import template

register = template.Library()

@register.filter(name="multiply")
def multiply(value: str, arg: int):
    return int(value) * arg
