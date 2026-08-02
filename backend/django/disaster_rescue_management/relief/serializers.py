from rest_framework import serializers
from .models import Relief


class ReliefSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relief
        fields = "__all__"