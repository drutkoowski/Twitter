from django.urls import path

app_name = "accounts"

from accounts.api.views import (
    MyTokenBlacklistView,
    MyTokenObtainPairView,
    MyTokenRefreshView,
)

urlpatterns = [
    path(
        "auth/login/",
        MyTokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
    path(
        "auth/refresh/",
        MyTokenRefreshView.as_view(),
        name="token_refresh",
    ),
    path(
        "auth/logout/",
        MyTokenBlacklistView.as_view(),
        name="token_blacklist",
    ),
]
