from django.urls import path, include
from .views import (indexAPIView,)

urlpatterns = [
    path('api/profile', indexAPIView.as_view())
]
