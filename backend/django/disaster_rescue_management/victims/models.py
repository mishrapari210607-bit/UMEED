from django.db import models


class Victim(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]

    STATUS_CHOICES = [
        ('Waiting', 'Waiting'),
        ('Transport Assigned', 'Transport Assigned'),
        ('At Migration Centre', 'At Migration Centre'),
        ('Medical Check', 'Medical Check'),
        ('Shelter Allocated', 'Shelter Allocated'),
        ('Relief Provided', 'Relief Provided'),
        ('Safe', 'Safe'),
    ]

    drid = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    phone = models.CharField(max_length=15)
    emergency_contact = models.CharField(max_length=15)

    source_location = models.CharField(max_length=150)
    current_location = models.CharField(max_length=150, blank=True)

    status = models.CharField(
        max_length=30,
        choices=STATUS_CHOICES,
        default='Waiting'
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.drid} - {self.name}"