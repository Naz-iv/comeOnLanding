from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", "DEFAULT_SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.getenv("DEBUG", "False")

ALLOWED_HOSTS = [
    "befit-pgfb.onrender.com",
    "localhost",
    "127.0.0.1"
]

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "benefit"
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "core.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"]
        ,
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "core.wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.getenv("POSTGRES_DB", "benefit"),
        "USER": os.getenv("POSTGRES_USER", "benefit"),
        "PASSWORD": os.getenv("POSTGRES_PASSWORD", "benefit"),
        "HOST": os.getenv("POSTGRES_HOST", "benefit"),
        "PORT": os.getenv("POSTGRES_PORT", "5432"),
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True

STATIC_URL = "static/"
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, "static"),
)
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# Liqpay configurations
LIQPAY_PUBLIC_KEY = os.getenv("LIQPAY_PUBLIC_KEY", "LIQPAY_PUBLIC_KEY")
LIQPAY_PRIVATE_KEY = os.getenv("LIQPAY_PRIVATE_KEY", "LIQPAY_PRIVATE_KEY")
REDIRECT_DOMAIN = os.getenv("REDIRECT_DOMAIN", "http://localhost:8000/")

BASE_TIER_START = os.getenv("BASE_TIER_START", 249)
EXTENDED_TIER_START = os.getenv("EXTENDED_TIER_START", 349)
BASE_TIER_END = os.getenv("BASE_TIER_END", 349)
EXTENDED_TIER_END = os.getenv("EXTENDED_TIER_END", 499)
START_AMOUNT = os.getenv("START_AMOUNT", 10)


EXPIRY_DATE = os.getenv("EXPIRY_DATE", None)

# Email backend configurations
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.getenv("EMAIL_HOST_USER", "example@gmail.com")
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD", "STRONG_PASSWORD")

# Access url for subscribers
ACCESS_URL = os.getenv("ACCESS_UTL", "https://www.youtube.com/")
TELEGRAM_URL = os.getenv("TELEGRAM_CHAT_URL", "https://t.me/+z7YnkHs2WwcxYTQy")

# Cache configurations
CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.locmem.LocMemCache",
        "LOCATION": "my_cache",
    }
}
