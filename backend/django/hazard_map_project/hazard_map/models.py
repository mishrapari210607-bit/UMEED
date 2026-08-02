from django.db import models


class Region(models.Model):
    name = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return f"{self.name}, {self.state}"

class HazardThreshold(models.Model):
    hazard_type = models.CharField(max_length=20)
    green_max = models.FloatField()
    blue_max = models.FloatField()
    unit = models.CharField(max_length=20)
    
    def __str__(self):
        return self.hazard_type
    
class DisasterEvent(models.Model):
    name = models.CharField(max_length=150)       # e.g. "Flood 2026 - District A"
    disaster_type = models.CharField(max_length=50)  # flood / earthquake / cyclone
    status = models.CharField(max_length=20, choices=[("active", "Active"), ("resolved", "Resolved")])
    start_date = models.DateTimeField()
    end_date = models.DateTimeField(null=True, blank=True)
    affected_regions = models.ManyToManyField(Region)
    
    def __str__(self):
        return self.name
    
class HazardReading(models.Model):
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    disaster_event = models.ForeignKey(DisasterEvent, null=True, blank=True, on_delete=models.SET_NULL)
    hazard_type = models.CharField(max_length=20)
    value = models.FloatField()
    zone_color = models.CharField(max_length=10)  # red / blue / green — computed, not manual
    source = models.CharField(max_length=50)       # usgs / open-meteo
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.region} - {self.hazard_type}: {self.value} ({self.zone_color})"
    
class PopulationBaseline(models.Model):
    region = models.OneToOneField(Region, on_delete=models.CASCADE)
    baseline_population = models.IntegerField()
    source = models.CharField(max_length=50, default="census_2021")
    
    def __str__(self):
        return f"{self.region} - {self.baseline_population}"
    
class PopulationEstimate(models.Model):
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    disaster_event = models.ForeignKey(DisasterEvent, null=True, blank=True, on_delete=models.SET_NULL)
    estimated_population = models.IntegerField()
    source = models.CharField(max_length=50)  # telecom_aggregate / baseline_fallback / simulated
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.region} - {self.estimated_population} ({self.source})"