from django.db import models
from victims.models import Victim


class Shelter(models.Model):
    FACILITY_CHOICES = [
        ("Available", "Available"),
        ("Full", "Full"),
    ]

    shelter_name = models.CharField(max_length=100)
    location = models.CharField(max_length=150)
    capacity = models.PositiveIntegerField()
    available_beds = models.PositiveIntegerField()
    medical_facility = models.BooleanField(default=True)
    food_available = models.BooleanField(default=True)

    status = models.CharField(
        max_length=20,
        choices=FACILITY_CHOICES,
        default="Available"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.shelter_name


class ShelterAllocation(models.Model):
    ALLOCATION_STATUS_CHOICES = [
        ("Allocated", "Allocated"),
        ("Pending Allocation", "Pending Allocation"),
        ("Shifted", "Shifted"),
    ]

    victim = models.ForeignKey(
        Victim,
        on_delete=models.CASCADE,
        related_name="shelter_allocations"
    )

    shelter = models.ForeignKey(
        Shelter,
        on_delete=models.CASCADE,
        related_name="allocations"
    )

    room_number = models.CharField(max_length=50)
    bed_number = models.CharField(max_length=50)
    family_members = models.PositiveIntegerField(default=0)

    status = models.CharField(
        max_length=30,
        choices=ALLOCATION_STATUS_CHOICES,
        default="Pending Allocation"
    )

    allocated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.victim.name} - {self.shelter.shelter_name}"