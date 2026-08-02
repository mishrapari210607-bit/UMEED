"""
Main project URL configuration.
"""

from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path("admin/", admin.site.urls),

    # Rescue ID Generator API routes.
    path("", include("rescue.urls")),
]