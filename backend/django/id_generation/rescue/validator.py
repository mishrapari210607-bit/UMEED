"""
Validation logic for rescue registration input.
All backend validation is kept in this file.
"""

import re

from .constants import (
    REQUIRED_DROPDOWN_FIELDS,
    UNSELECTED_VALUES,
    VALID_BLOOD_GROUPS,
    VALID_GENDERS,
    VALID_PRIORITIES,
    VALID_STATUSES,
)
from .utils import clean_text, is_dropdown_selected, normalize_option


NAME_PATTERN = re.compile(r"^[A-Za-z ]+$")
PHONE_PATTERN = re.compile(r"^\d{10}$")
EMAIL_PATTERN = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def validate_rescue_data(data):
    """
    Validate rescue registration data.

    Returns:
        dict: Field-wise error messages. Empty dict means valid input.
    """
    errors = {}

    # Validate full name.
    full_name = clean_text(data.get("full_name"))
    if not full_name:
        errors["name"] = "Name is required."
    elif not NAME_PATTERN.fullmatch(full_name):
        errors["name"] = "Name can contain only letters and spaces."

    # Validate age.
    age = clean_text(data.get("age"))
    if not age:
        errors["age"] = "Age is required."
    else:
        try:
            age_number = int(age)
            if age_number < 1 or age_number > 120:
                errors["age"] = "Age must be between 1 and 120."
        except ValueError:
            errors["age"] = "Age must be a valid number."

    # Validate phone number.
    phone_number = clean_text(data.get("phone_number"))
    if not phone_number:
        errors["phone_number"] = "Phone number is required."
    elif not PHONE_PATTERN.fullmatch(phone_number):
       errors["phone_number"] = "Phone number must contain exactly 10 digits."
    # Validate email address.
    email = clean_text(data.get("email"))
    if not email:
        errors["email"] = "Email is required."
    elif not EMAIL_PATTERN.fullmatch(email):
        errors["email"] = "Enter a valid email address."

    # Validate required dropdown selection.
    for field_name in REQUIRED_DROPDOWN_FIELDS:
        if not is_dropdown_selected(data.get(field_name), UNSELECTED_VALUES):
            errors[field_name] = f"{field_name.replace('_', ' ').title()} is required."

    # Validate gender.
    gender = normalize_option(data.get("gender"))
    if gender and gender not in UNSELECTED_VALUES and gender not in VALID_GENDERS:
        errors["gender"] = "Select a valid gender."

    # Validate blood group.
    blood_group = normalize_option(data.get("blood_group"))
    if (
        blood_group
        and blood_group not in UNSELECTED_VALUES
        and blood_group not in VALID_BLOOD_GROUPS
    ):
        errors["blood_group"] = "Select a valid blood group."

    # Validate disaster type.
    disaster_type = normalize_option(data.get("disaster_type"))
    valid_disaster_types = {
    "flood",
    "fire",
    "cyclone",
    "earthquake",
    "landslide",
    "tsunami",
    "heatwave",
    "other",
}
    if (
        disaster_type
        and disaster_type not in UNSELECTED_VALUES
        and disaster_type not in valid_disaster_types
    ):
        errors["disaster_type"] = "Select a valid disaster type."

    # Validate rescue priority.
    priority = normalize_option(data.get("rescue_priority"))
    if (
        priority
        and priority not in UNSELECTED_VALUES
        and priority not in VALID_PRIORITIES
    ):
        errors["rescue_priority"] = "Select a valid rescue priority."

    # Validate rescue status.
    status = normalize_option(data.get("rescue_status"))
    if status and status not in UNSELECTED_VALUES and status not in VALID_STATUSES:
        errors["rescue_status"] = "Select a valid rescue status."

    return errors