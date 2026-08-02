from rest_framework.routers import DefaultRouter
from .views import VictimViewSet

router = DefaultRouter()
router.register(r'victims', VictimViewSet)

urlpatterns = router.urls