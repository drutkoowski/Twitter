from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.exceptions import InvalidToken
from rest_framework_simplejwt.serializers import TokenRefreshSerializer, TokenBlacklistSerializer


# from accounts.models import Account


class AccountSerializer(serializers.ModelSerializer):
    products_bought = serializers.SerializerMethodField()

    class Meta:
        model = get_user_model()
        fields = "__all__"


class CookieTokenRefreshSerializer(TokenRefreshSerializer):
    """Overwiritten validate behaviour for cookies."""
    refresh = None

    def validate(self, attrs):
        attrs["refresh"] = self.context["request"].COOKIES.get(
            "refresh"
        )
        if attrs["refresh"]:
            return super().validate(attrs)
        else:
            raise InvalidToken("No valid token found in cookie")


class CookieTokenBlacklistSerializer(TokenBlacklistSerializer):
    """Overwritten validate function behaviour for jwt in cookies."""
    refresh = None

    def validate(self, attrs):
        attrs["refresh"] = self.context["request"].COOKIES.get(
            "refresh"
        )
        if attrs["refresh"]:
            return super().validate(attrs)
        else:
            raise InvalidToken("No valid token found in cookie")
