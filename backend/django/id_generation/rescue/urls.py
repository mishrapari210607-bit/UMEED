"""
URL routes for the Rescue ID Generator module.
"""

from django.urls import path

from .views import generate_id_view, health_view, search_rescue_view


urlpatterns = [
    path("generate-id/", generate_id_view, name="generate_id"),
    path("search/<str:rescue_id>/", search_rescue_view, name="search_rescue"),
    path("health/", health_view, name="health"),
]