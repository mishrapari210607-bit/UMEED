from django.core.management.base import BaseCommand
from hazard_map.models import Region, PopulationBaseline, HazardThreshold


class Command(BaseCommand):
    help = "Seed the database with initial regions, population baselines, and hazard thresholds"

    def handle(self, *args, **kwargs):
        # ---- 1. Regions (name, state, latitude, longitude, baseline_population) ----
        regions_data = [
            ("Bhubaneswar", "Odisha", 20.2961, 85.8245, 900000),
            ("Puri", "Odisha", 19.8135, 85.8312, 200000),
            ("Cuttack", "Odisha", 20.4625, 85.8828, 650000),
            ("Mumbai", "Maharashtra", 19.0760, 72.8777, 12400000),
            ("Thane", "Maharashtra", 19.2183, 72.9781, 1800000),
            ("Navi Mumbai", "Maharashtra", 19.0330, 73.0297, 1120000),
            ("Bengaluru", "Karnataka", 12.9716, 77.5946, 8400000),
            ("Mangaluru", "Karnataka", 12.9141, 74.8560, 620000),
            ("Mysuru", "Karnataka", 12.2958, 76.6394, 920000),
            ("Kolkata", "West Bengal", 22.5726, 88.3639, 4500000),
            ("Digha", "West Bengal", 21.6270, 87.5090, 45000),
            ("Kharagpur", "West Bengal", 22.3460, 87.2320, 280000),
            ("Kanpur", "Uttar Pradesh", 26.4499, 80.3319, 2900000),
            ("Lucknow", "Uttar Pradesh", 26.8467, 80.9462, 3400000),
        ]

        for name, state, lat, lng, population in regions_data:
            region, created = Region.objects.get_or_create(
                name=name,
                state=state,
                defaults={"latitude": lat, "longitude": lng},
            )
            status = "Created" if created else "Already exists"
            self.stdout.write(f"{status}: Region -> {name}, {state}")

            PopulationBaseline.objects.get_or_create(
                region=region,
                defaults={"baseline_population": population, "source": "census_2021"},
            )

        # ---- 2. Hazard Thresholds ----
        thresholds_data = [
            # hazard_type, green_max, blue_max, unit
            ("earthquake", 4.0, 6.0, "magnitude"),
            ("wind", 40.0, 90.0, "km/h"),
            ("rain", 15.0, 60.0, "mm"),
        ]

        for hazard_type, green_max, blue_max, unit in thresholds_data:
            threshold, created = HazardThreshold.objects.get_or_create(
                hazard_type=hazard_type,
                defaults={"green_max": green_max, "blue_max": blue_max, "unit": unit},
            )
            status = "Created" if created else "Already exists"
            self.stdout.write(f"{status}: Threshold -> {hazard_type}")

        self.stdout.write(self.style.SUCCESS("Seeding complete."))