from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView, TokenBlacklistView

import twitter.settings as settings
from accounts.api.serializers import CookieTokenRefreshSerializer, CookieTokenBlacklistSerializer


class MyTokenObtainPairView(TokenObtainPairView):

    def post(self, request, *args, **kwargs) -> Response:
        response = super().post(request, *args, **kwargs)
        tokens = response.data
        response.set_cookie(
            key=settings.SIMPLE_JWT["AUTH_COOKIE"],
            value=tokens[settings.SIMPLE_JWT["AUTH_COOKIE"]],
            httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
            samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
        )
        response.set_cookie(
            key=settings.SIMPLE_JWT["REFRESH_COOKIE"],
            value=tokens[settings.SIMPLE_JWT["REFRESH_COOKIE"]],
            httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
            samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
        )

        # Remove tokens from response body for enhanced security.
        del response.data[settings.SIMPLE_JWT["AUTH_COOKIE"]]
        del response.data[settings.SIMPLE_JWT["REFRESH_COOKIE"]]
        return response


class MyTokenRefreshView(TokenRefreshView):

    def finalize_response(
            self, request, response, *args, **kwargs
    ) -> Response:
        tokens = response.data
        response.set_cookie(
            key=settings.SIMPLE_JWT["AUTH_COOKIE"],
            value=tokens[settings.SIMPLE_JWT["AUTH_COOKIE"]],
            httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
            samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
        )
        # Remove tokens from response body for enhanced security.
        del response.data[settings.SIMPLE_JWT["AUTH_COOKIE"]]
        del response.data[settings.SIMPLE_JWT["REFRESH_COOKIE"]]

        return super().finalize_response(
            request, response, *args, **kwargs
        )

    serializer_class = CookieTokenRefreshSerializer


class MyTokenBlacklistView(TokenBlacklistView):

    def finalize_response(
            self, request, response, *args, **kwargs
    ) -> Response:
        # Remove tokens from response body for enhanced security.
        response.delete_cookie(settings.SIMPLE_JWT["AUTH_COOKIE"])
        response.delete_cookie(settings.SIMPLE_JWT["REFRESH_COOKIE"])

        return super().finalize_response(
            request, response, *args, **kwargs
        )

    serializer_class = CookieTokenBlacklistSerializer
