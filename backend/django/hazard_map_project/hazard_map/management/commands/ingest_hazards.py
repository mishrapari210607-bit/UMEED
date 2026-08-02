import requests
import time
from django.core.management.base import BaseCommand
from hazard_map.models import Region, HazardThreshold, HazardReading


def classify(hazard_type, value):
    """Look up the threshold row for this hazard type and decide green/blue/red."""
    threshold = HazardThreshold.objects.get(hazard_type=hazard_type)
    if value <= threshold.green_max:
        return "green"
    elif value <= threshold.blue_max:
        return "blue"
    return "red"


class Command(BaseCommand):
    help = "Fetch live earthquake, wind, and rain data and save classified HazardReadings"

    def handle(self, *args, **kwargs):
        self.fetch_earthquake_data()
        self.fetch_wind_rain_data()
        self.stdout.write(self.style.SUCCESS("Ingestion complete."))

    def fetch_earthquake_data(self):
        self.stdout.write("Fetching earthquake data from USGS...")
        url = "https://earthquake.usgs.gov/fdsnws/event/1/query"
        params = {
            "format": "geojson",
            "starttime": "now-1day",
            "minmagnitude": "2.5",
        }

        response = requests.get(url, params=params, timeout=15)
        data = response.json()
        quakes = data.get("features", [])

        self.stdout.write(f"Found {len(quakes)} earthquakes in the last 24 hours.")

        regions = Region.objects.all()

        for region in regions:
            closest_magnitude = None
            closest_distance = 300

            for quake in quakes:
                quake_lng, quake_lat, _ = quake["geometry"]["coordinates"]
                magnitude = quake["properties"]["mag"]
                if magnitude is None:
                    continue

                distance = self.haversine(region.latitude, region.longitude, quake_lat, quake_lng)

                if distance <= closest_distance:
                    if closest_magnitude is None or magnitude > closest_magnitude:
                        closest_magnitude = magnitude

            if closest_magnitude is not None:
                zone_color = classify("earthquake", closest_magnitude)
                HazardReading.objects.create(
                    region=region,
                    hazard_type="earthquake",
                    value=closest_magnitude,
                    zone_color=zone_color,
                    source="usgs",
                )
                self.stdout.write(f"{region.name}: earthquake magnitude {closest_magnitude} -> {zone_color}")
            else:
                HazardReading.objects.create(
                    region=region,
                    hazard_type="earthquake",
                    value=0.0,
                    zone_color="green",
                    source="usgs",
                )
                self.stdout.write(f"{region.name}: no nearby earthquake -> green")

    def fetch_wind_rain_data(self):
        self.stdout.write("Fetching wind + rain data from Open-Meteo...")
        regions = Region.objects.all()

        for region in regions:
            url = "https://api.open-meteo.com/v1/forecast"
            params = {
                "latitude": region.latitude,
                "longitude": region.longitude,
                "current": "wind_speed_10m,precipitation",
            }
            try:
                response = requests.get(url, params=params, timeout=10)
                data = response.json()
            except requests.exceptions.RequestException as e:
                self.stdout.write(f"{region.name}: request failed ({e}), skipping")
                continue

            current = data.get("current", {})
            wind_speed = current.get("wind_speed_10m")
            rain = current.get("precipitation")

            if wind_speed is not None:
                wind_zone = classify("wind", wind_speed)
                HazardReading.objects.create(
                    region=region,
                    hazard_type="wind",
                    value=wind_speed,
                    zone_color=wind_zone,
                    source="open-meteo",
                )
                self.stdout.write(f"{region.name}: wind {wind_speed} km/h -> {wind_zone}")

            if rain is not None:
                rain_zone = classify("rain", rain)
                HazardReading.objects.create(
                    region=region,
                    hazard_type="rain",
                    value=rain,
                    zone_color=rain_zone,
                    source="open-meteo",
                )
                self.stdout.write(f"{region.name}: rain {rain} mm -> {rain_zone}")

            time.sleep(0.5)

    def haversine(self, lat1, lon1, lat2, lon2):
        """Calculate distance in km between two lat/lng points on Earth."""
        from math import radians, sin, cos, sqrt, atan2

        R = 6371
        dlat = radians(lat2 - lat1)
        dlon = radians(lon2 - lon1)
        a = sin(dlat / 2) ** 2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon / 2) ** 2
        c = 2 * atan2(sqrt(a), sqrt(1 - a))
        return R * c
