from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

def index(request: HttpRequest) -> HttpResponse:
    return render(request, template_name="home.html")


def pay_base(request: HttpRequest) -> HttpResponse:
    pass


def pay_top(request: HttpRequest) -> HttpResponse:
    pass
