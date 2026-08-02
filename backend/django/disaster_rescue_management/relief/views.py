from rest_framework import viewsets
from .models import Relief
from .serializers import ReliefSerializer


class ReliefViewSet(viewsets.ModelViewSet):
    queryset = Relief.objects.all()
    serializer_class = ReliefSerializer