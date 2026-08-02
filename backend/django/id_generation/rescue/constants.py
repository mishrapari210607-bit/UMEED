"""
Configuration constants for the Rescue ID Generator module.
Update these values when new cities, priorities, or statuses are needed.
"""

# Disaster type to short-code mapping.
DISASTER_CODES = {
    "flood": "FLD",
    "fire": "FIR",
    "cyclone": "CYC",
    "earthquake": "EQK",
    "landslide": "LND",
    "tsunami": "TSN",
    "heatwave": "HTW",
    "other": "OTH",
}

# City names to short-code mapping.
# Add or modify city codes here as required.
CITY_CODES = {
    "kanpur": "KNP",
    "delhi": "DEL",
    "mumbai": "MUM",
    "kolkata": "KOL",
    "chennai": "CHE",
    "lucknow": "LKO",
    "varanasi": "VNS",
    "prayagraj": "PRY",
}

# Valid dropdown options.
VALID_GENDERS = {
    "male",
    "female",
    "non-binary",
    "prefer not to say",
}
VALID_BLOOD_GROUPS = {
    "a+", "a-", "b+", "b-", "ab+", "ab-", "o+", "o-", "unknown"
}
VALID_PRIORITIES = {"low", "medium", "high", "critical"}
VALID_STATUSES = {
    "pending",
    "rescue_requested",
    "rescue_in_progress",
    "rescued",
    "safe",
}

# Dropdown fields that must have a selected value.
REQUIRED_DROPDOWN_FIELDS = {
    "gender",
    "blood_group",
    "disaster_type",
    "state",
    "district",
    "city",
    "rescue_priority",
    "rescue_status",
}

# Common placeholder values sent by frontend dropdowns.
UNSELECTED_VALUES = {"", "select", "select option", "choose", "none", "null"}