"""
Rescue ID generation logic.

Format:
DISASTERCODE-CITYCODE-YYYYMMDD-0001
Example:
FLD-KNP-20260731-0001
"""

from datetime import datetime

from .constants import CITY_CODES, DISASTER_CODES
from .utils import clean_text, normalize_option


def get_disaster_code(disaster_type):
    """
    Return the configured short code for a disaster type.
    """
    normalized_disaster = normalize_option(disaster_type)
    return DISASTER_CODES.get(normalized_disaster, DISASTER_CODES["other"])


def get_city_code(city):
    """
    Return a city code from configuration.

    If the city is not configured yet, a temporary three-letter code is created.
    Add the city to CITY_CODES for a permanent configured code.
    """
    normalized_city = normalize_option(city)

    if normalized_city in CITY_CODES:
        return CITY_CODES[normalized_city]

    city_letters = "".join(
        character for character in clean_text(city).upper() if character.isalpha()
    )

    return (city_letters[:3] or "UNK").ljust(3, "X")


def generate_rescue_id(disaster_type, city, sequence_number, generated_at=None):
    """
    Build a Rescue ID from disaster type, city, date, and sequence number.
    """
    if sequence_number < 1:
        raise ValueError("Sequence number must be greater than zero.")

    generated_at = generated_at or datetime.now()

    disaster_code = get_disaster_code(disaster_type)
    city_code = get_city_code(city)
    date_code = generated_at.strftime("%Y%m%d")
    sequence_code = f"{sequence_number:04d}"

    return f"{disaster_code}-{city_code}-{date_code}-{sequence_code}"