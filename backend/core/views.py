from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# from rest_framework import permissions
from .models import Profile
from .serializers import ProfileSerializer


# Create your views here.

class indexAPIView(APIView):
    # permission_classes = [permissions.IsAuthenticated]
    def get(self, request, *args, **kwargs):
        profile = Profile.objects
        serializer = ProfileSerializer(profile, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
