from tasks.views import UserRegister
from django.urls import path

urlpatterns = [
    path('registerForm/', UserRegister.as_view, name='register'),
]
