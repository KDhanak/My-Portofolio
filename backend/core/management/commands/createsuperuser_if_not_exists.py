from django.core.management.base import BaseCommand, CommandParser
from django.contrib.auth.models import User
from decouple import config


class Command(BaseCommand):
    help = 'Create superuser if not exists'

    def handle(self, *args, **options):
        username = 'kishan'
        password = config('DJANGO_SUPERUSER_PASSWORD')
        if not User.objects.filter(username='kishan').exists():
            User.objects.create_superuser(username, password)
            self.stdout.write(self.style.SUCCESS(
                'Superuser created successfully'))
        else:
            self.stdout.write(self.style.SUCCESS('Superuser already exists'))
