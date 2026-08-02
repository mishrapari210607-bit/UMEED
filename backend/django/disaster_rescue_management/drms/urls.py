from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to DRMS Backend API")

urlpatterns = [
    path("", home),
    path("admin/", admin.site.urls),
    path("api/", include("victims.urls")),
    path("api/", include("transport.urls")),
    path("api/", include("medical.urls")),
    path("api/", include("shelter.urls")),
    path("api/", include("relief.urls")),
    path("api/", include("tracking.urls")),
    path(
    "api/",
    include("victim_status.urls")
),
]