from tasks.views import UserRegister
from django.urls import path

urlpatterns = [
    path('api/register/', UserRegister.as_view(), name='register'),
]
