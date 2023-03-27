from rest_framework import HTTP_HEADER_ENCODING
from rest_framework_simplejwt.authentication import JWTAuthentication

from twitter import settings


class CustomAuthentication(JWTAuthentication):
    def authenticate(self, request):
        cookie = request.COOKIES.get(settings.SIMPLE_JWT["AUTH_COOKIE"])

        if cookie is None:
            return None
        raw_token = cookie.encode(HTTP_HEADER_ENCODING)
        validated_token = self.get_validated_token(raw_token)
        return self.get_user(validated_token), validated_token
