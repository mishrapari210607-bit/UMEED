from django.db import models
from victims.models import Victim


class Status(models.Model):

    STATUS_CHOICES = [

        ("Safe at Centre", "Safe at Centre"),
        ("Under Treatment", "Under Treatment"),
        ("Shifted", "Shifted"),
        ("Reunited with Family", "Reunited with Family"),

    ]


    victim = models.ForeignKey(
        Victim,
        on_delete=models.CASCADE,
        related_name="victim_status_updates"
    )

    final_status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default="Safe at Centre"
    )


    status_note = models.TextField(
        blank=True,
        null=True
    )


    status_date = models.DateTimeField(
        auto_now=True
    )


    def __str__(self):

        return f"{self.victim.name} - {self.final_status}"