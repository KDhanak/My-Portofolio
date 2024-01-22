from django.db import models

# Create your models here.


class Profile(models.Model):
    first_name = models.CharField(max_length=500)
    last_name = models.CharField(max_length=500)
    email = models.EmailField(max_length=500)
    linkedIn_ID = models.CharField(max_length=500)
    profile_image = models.ImageField(upload_to='images/')
    synopsis = models.TextField(default="synopsis")
    contact_info = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Project(models.Model):
    project_name = models.CharField(max_length=500)
    project_display = models.ImageField(upload_to='images/')
    project_synopsis = models.TextField()
    project_link = models.CharField(max_length=500)
    project_repo = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.project_name} {self.project_link}"
