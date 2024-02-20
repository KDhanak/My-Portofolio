from django.urls import path, include
from .views import (indexAPIView, contactMeAPIView, projectAPIView)

urlpatterns = [
    path('api/profile', indexAPIView.as_view(), name="fetch the Profile"),
    path('api/contact-me/post', contactMeAPIView.as_view(), name="Enquiry Data API"),
    path('api/project', projectAPIView.as_view(), name="fetch the projects")
]
