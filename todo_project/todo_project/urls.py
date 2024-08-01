from tasks.views import UserRegister
from django.urls import path

urlpatterns = [
    path('register/', UserRegister.as_view(), name='register'),
]
