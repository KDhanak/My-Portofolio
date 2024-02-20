from django.urls import path, include
from .views import (indexAPIView, MyApiView)

urlpatterns = [
    path('api/profile', indexAPIView.as_view()),
    path('api/contact-me/post', MyApiView.as_view(), name="Enquiry Data API")
]
