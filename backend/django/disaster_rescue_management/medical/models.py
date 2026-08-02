from django.db import models
from victims.models import Victim


class Medical(models.Model):
    INJURY_CHOICES = [
        ("Minor", "Minor"),
        ("Moderate", "Moderate"),
        ("Critical", "Critical"),
    ]

    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Under Treatment", "Under Treatment"),
        ("Recovered", "Recovered"),
        ("Referred", "Referred"),
    ]

    victim = models.ForeignKey(
        Victim,
        on_delete=models.CASCADE,
        related_name="medical_records"
    )

    injury_level = models.CharField(
        max_length=20,
        choices=INJURY_CHOICES
    )

    blood_pressure = models.CharField(max_length=20)

    pulse_rate = models.PositiveIntegerField()

    temperature = models.DecimalField(
        max_digits=4,
        decimal_places=1
    )

    treatment = models.TextField()

    doctor_name = models.CharField(max_length=100)

    status = models.CharField(
        max_length=30,
        choices=STATUS_CHOICES,
        default="Pending"
    )

    assessment_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.victim.name} - {self.injury_level}"