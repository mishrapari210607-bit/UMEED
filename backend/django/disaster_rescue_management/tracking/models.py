from django.db import models
from victims.models import Victim


class Tracking(models.Model):
    STATUS_CHOICES = [
        ("Waiting Rescue", "Waiting Rescue"),
        ("Transport Assigned", "Transport Assigned"),
        ("Medical Check", "Medical Check"),
        ("Shelter Allocated", "Shelter Allocated"),
        ("Relief Distributed", "Relief Distributed"),
        ("Safe", "Safe"),
    ]

    victim = models.OneToOneField(
        Victim,
        on_delete=models.CASCADE
    )

    current_location = models.CharField(max_length=150)

    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default="Waiting Rescue"
    )

    updated_time = models.DateTimeField(auto_now=True)

    remarks = models.TextField(blank=True)

    def __str__(self):
        return f"{self.victim.name} - {self.status}"