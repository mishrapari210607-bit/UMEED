"""
Business logic for rescue registration.

Database functions below are placeholders. Replace their TODO sections with
database code when the database layer is implemented by the database teammate.
"""

from collections import defaultdict
from threading import Lock

from django.utils import timezone

from .id_generator import generate_rescue_id
from .utils import normalize_option
from .validator import validate_rescue_data


# Temporary in-memory sequence storage for development and testing only.
# This resets when the server restarts and must later be replaced by database logic.
_sequence_cache = defaultdict(int)
_sequence_lock = Lock()

# Temporary in-memory storage for rescue records.
_rescue_records = {}

def save_rescue_record(rescue_record):
    """
    Save one rescue record in temporary memory.
    """
    _rescue_records[rescue_record["rescue_id"]] = rescue_record
    return True


class RescueValidationError(Exception):
    """Raised when rescue input validation fails."""

    def __init__(self, errors):
        self.errors = errors
        super().__init__("Rescue data validation failed.")


# ---------------------------------------------------------------------------
# Database integration placeholders
# ---------------------------------------------------------------------------



def get_rescue_record(rescue_id):
    """
    Fetch one rescue record from temporary storage.
    """
    return _rescue_records.get(rescue_id)


def update_rescue_status(rescue_id, rescue_status):
    """
    Update a victim's rescue status.

    TODO:
        Replace this placeholder with database update code.
    """
    return False


def get_next_sequence_number(disaster_type, city, generated_at):
    """
    Get the next Rescue ID sequence number for the given day.

    TODO:
        Replace this temporary in-memory counter with a database query.
        The database version should safely find the latest sequence number
        for the same disaster type, city, and date, then return the next value.
    """
    date_key = generated_at.strftime("%Y%m%d")
    disaster_key = normalize_option(disaster_type)
    city_key = normalize_option(city)
    cache_key = f"{disaster_key}:{city_key}:{date_key}"

    with _sequence_lock:
        _sequence_cache[cache_key] += 1
        return _sequence_cache[cache_key]


# ---------------------------------------------------------------------------
# Rescue registration business logic
# ---------------------------------------------------------------------------

def register_rescue(data):
    """
    Validate data, generate a Rescue ID, and prepare a rescue record.
    """
    errors = validate_rescue_data(data)

    if errors:
        raise RescueValidationError(errors)

    generated_at = timezone.now()
    sequence_number = get_next_sequence_number(
        disaster_type=data["disaster_type"],
        city=data["city"],
        generated_at=generated_at,
    )

    rescue_id = generate_rescue_id(
        disaster_type=data["disaster_type"],
        city=data["city"],
        sequence_number=sequence_number,
        generated_at=generated_at,
    )

    # Record structure ready for future database integration.
    rescue_record = {
        "rescue_id": rescue_id,
        "full_name": data.get("full_name", "").strip(),
        "age": int(data["age"]),
        "gender": data.get("gender", "").strip(),
        "phone_number": data.get("phone_number", "").strip(),
        "email": data.get("email", "").strip(),
        "blood_group": data.get("blood_group", "").strip(),
        "disaster_type": data.get("disaster_type", "").strip(),
        "state": data.get("state", "").strip(),
        "district": data.get("district", "").strip(),
        "city": data.get("city", "").strip(),
        "rescue_priority": data.get("rescue_priority", "").strip(),
        "rescue_status": data.get("rescue_status", "").strip(),
        "medical_condition": data.get("medical_condition", "").strip(),
        "family_members": data.get("family_members"),
        "emergency_contact": data.get("emergency_contact", "").strip(),
        "created_at": generated_at.isoformat(),
    }

    # Placeholder database save call.
    save_rescue_record(rescue_record)

    return {
        "success": True,
        "message": "Rescue Registered Successfully",
        "rescue_id": rescue_id,
        "timestamp": generated_at.replace(microsecond=0).isoformat(),
    }


def search_rescue(rescue_id):
    """
    Search for a rescue record using the database placeholder.
    """
    return get_rescue_record(rescue_id)