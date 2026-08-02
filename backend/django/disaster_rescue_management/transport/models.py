from django.db import models
from victims.models import Victim


class Transport(models.Model):
    VEHICLE_TYPE_CHOICES = [
        ("Ambulance", "Ambulance"),
        ("Bus", "Bus"),
        ("Truck", "Truck"),
    ]

    STATUS_CHOICES = [
        ("Available", "Available"),
        ("Assigned", "Assigned"),
        ("Completed", "Completed"),
    ]

    vehicle_number = models.CharField(max_length=20)

    vehicle_type = models.CharField(
        max_length=50,
        choices=VEHICLE_TYPE_CHOICES
    )

    driver_name = models.CharField(max_length=100)
    driver_contact = models.CharField(max_length=15)

    assigned_victim = models.ForeignKey(
        Victim,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    destination_centre = models.CharField(max_length=150)

    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default="Available"
    )

    def __str__(self):
        return f"{self.vehicle_number} - {self.status}"