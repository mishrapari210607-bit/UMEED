from hazard_map.models import PopulationBaseline, HazardReading


def estimate_population(region, disaster_event=None):
    """
    Estimate current population in a region.

    - No active disaster -> just return the baseline population.
    - Active disaster + region currently classified red -> apply decay (evacuation).
    - Active disaster + region is a known shelter -> apply growth (people arriving).
    """
    try:
        baseline = PopulationBaseline.objects.get(region=region)
    except PopulationBaseline.DoesNotExist:
        return 0

    baseline_population = baseline.baseline_population

    # No disaster active -> just return the normal baseline
    if disaster_event is None or disaster_event.status != "active":
        return baseline_population

    # Check the most recent hazard reading for this region to see current zone_color
    latest_reading = (
        HazardReading.objects.filter(region=region)
        .order_by("-timestamp")
        .first()
    )

    if latest_reading is None:
        return baseline_population

    if latest_reading.zone_color == "red":
        # Synthetic evacuation decay: assume 15% have left per hour, floor at 20%
        hours_active = _hours_since(disaster_event.start_date)
        decay_factor = max(0.20, (1 - 0.15) ** hours_active)
        return int(baseline_population * decay_factor)

    # Not red -> for now, treat as stable (no shelter-growth data source yet)
    return baseline_population


def _hours_since(start_date):
    from django.utils import timezone
    delta = timezone.now() - start_date
    return delta.total_seconds() / 3600
