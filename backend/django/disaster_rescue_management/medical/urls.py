from rest_framework.routers import DefaultRouter
from .views import MedicalViewSet

router = DefaultRouter()

router.register(
    r"medical",
    MedicalViewSet,
    basename="medical"
)

urlpatterns = router.urls