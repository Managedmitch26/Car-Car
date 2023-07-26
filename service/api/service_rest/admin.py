from django.contrib import admin
from .models import Technician

# Register your models here.
@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    pass
