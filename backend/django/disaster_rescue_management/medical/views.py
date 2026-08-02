from rest_framework import viewsets
from .models import Medical
from .serializers import MedicalSerializer


class MedicalViewSet(viewsets.ModelViewSet):
    queryset = Medical.objects.all()
    serializer_class = MedicalSerializer