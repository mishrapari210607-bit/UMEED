"""
Reusable utility functions for request handling and text formatting.
"""

import json


class RequestPayloadError(Exception):
    """Raised when a request body does not contain valid JSON."""


# Maps common frontend field names to backend field names.
FIELD_NAME_MAPPING = {
    "fullName": "full_name",
    "full_name": "full_name",
    "phoneNumber": "phone_number",
    "phone_number": "phone_number",
    "bloodGroup": "blood_group",
    "blood_group": "blood_group",
    "disasterType": "disaster_type",
    "disaster_type": "disaster_type",
    "rescuePriority": "rescue_priority",
    "rescue_priority": "rescue_priority",
    "rescueStatus": "rescue_status",
    "rescue_status": "rescue_status",
    "medicalCondition": "medical_condition",
    "medical_condition": "medical_condition",
    "familyMembers": "family_members",
    "family_members": "family_members",
    "emergencyContact": "emergency_contact",
    "emergency_contact": "emergency_contact",
}


def parse_json_request(request):
    """
    Convert a Django JSON request body into a Python dictionary.
    """
    try:
        data = json.loads(request.body.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError):
        raise RequestPayloadError("Request body must contain valid JSON.")

    if not isinstance(data, dict):
        raise RequestPayloadError("JSON body must be an object.")

    return data


def normalize_payload(data):
    """
    Convert frontend camelCase keys into consistent snake_case backend keys.
    """
    normalized_data = {}

    for key, value in data.items():
        normalized_key = FIELD_NAME_MAPPING.get(key, key)
        normalized_data[normalized_key] = value

    return normalized_data


def clean_text(value):
    """
    Return clean text without leading or trailing spaces.
    """
    return str(value).strip() if value is not None else ""


def normalize_option(value):
    """
    Normalize dropdown values for case-insensitive comparisons.
    """
    return clean_text(value).lower()


def is_dropdown_selected(value, unselected_values):
    """
    Check whether a dropdown field contains a meaningful selection.
    """
    return normalize_option(value) not in unselected_values