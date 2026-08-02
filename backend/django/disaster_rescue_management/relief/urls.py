from rest_framework.routers import DefaultRouter
from .views import ReliefViewSet

router = DefaultRouter()

router.register(
    r"relief",
    ReliefViewSet,
    basename="relief"
)

urlpatterns = router.urls