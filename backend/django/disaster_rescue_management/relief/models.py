from django.db import models
from victims.models import Victim


class Relief(models.Model):
    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Distributed", "Distributed"),
    ]

    victim = models.ForeignKey(
        Victim,
        on_delete=models.CASCADE,
        related_name="relief_records"
    )

    food_packets = models.PositiveIntegerField(default=0)
    water_bottles = models.PositiveIntegerField(default=0)
    medicine_kits = models.PositiveIntegerField(default=0)
    blankets = models.PositiveIntegerField(default=0)
    clothes = models.PositiveIntegerField(default=0)

    distributed_by = models.CharField(max_length=100)

    distribution_date = models.DateTimeField(auto_now_add=True)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="Pending"
    )

    remarks = models.TextField(blank=True)

    def __str__(self):
        return f"{self.victim.name} - {self.status}"