from django.contrib import admin
from .models import Region, DisasterEvent, HazardThreshold, HazardReading, PopulationBaseline, PopulationEstimate

admin.site.register(Region)
admin.site.register(DisasterEvent)
admin.site.register(HazardThreshold)
admin.site.register(HazardReading)
admin.site.register(PopulationBaseline)
admin.site.register(PopulationEstimate)