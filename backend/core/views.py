from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Profile, Project
from .serializers import ProfileSerializer, EnquirySerializer, ProjectSerializer


# Create your views here.

class indexAPIView(APIView):
    def get(self, request, *args, **kwargs):
        profile = Profile.objects
        serializer = ProfileSerializer(profile, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class contactMeAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = EnquirySerializer(data=request.data)
        if serializer.is_valid():
            if None in [
                serializer.validated_data["full_name"],
                serializer.validated_data["email"],
                serializer.validated_data["message"],
            ]:
                return Response(serializer.data, status=status.HTTP_206_PARTIAL_CONTENT)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class projectAPIView(APIView):
    def get(self, request, *args, **kwargs):
        profile = Project.objects
        serializer = ProjectSerializer(profile, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
