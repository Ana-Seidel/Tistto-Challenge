from tasks.views import (
    UserRegister,
    UserAuth,
    )
from django.urls import path


urlpatterns = [
    path('api/register/', UserRegister.as_view(), name='register'),
    path('api/login/', UserAuth.as_view(), name='login'),
    path('api/tasks/', UserAuth.as_view(), name='login'),
]
