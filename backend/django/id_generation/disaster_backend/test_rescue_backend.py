"""
Simple independent test script for the Rescue ID Generator backend.

Run from the Django project root:

python test_rescue_backend.py
"""

from django.conf import settings

# Configure minimal Django settings for timezone utilities used by the service.
if not settings.configured:
    settings.configure(
        USE_TZ=True,
        TIME_ZONE="Asia/Kolkata",
    )

from rescue.id_generator import generate_rescue_id, get_city_code
from rescue.rescue_service import RescueValidationError, register_rescue
from rescue.validator import validate_rescue_data


# Sample valid frontend payload.
SAMPLE_RESCUE_DATA = {
    "full_name": "Ravi Kumar",
    "age": 28,
    "gender": "Male",
    "phone_number": "9876543210",
    "email": "ravi@example.com",
    "blood_group": "O+",
    "disaster_type": "Flood",
    "state": "Uttar Pradesh",
    "district": "Kanpur Nagar",
    "city": "Kanpur",
    "rescue_priority": "High",
    "rescue_status": "Pending",
    "medical_condition": "Minor injury",
    "family_members": 3,
    "emergency_contact": "Anita Kumar - 9876543211",
}


def test_validator():
    """Test valid and invalid form input."""
    valid_errors = validate_rescue_data(SAMPLE_RESCUE_DATA)
    print("Valid payload errors:", valid_errors)

    invalid_data = SAMPLE_RESCUE_DATA.copy()
    invalid_data["full_name"] = "Ravi123"
    invalid_data["phone_number"] = "1234"
    invalid_data["email"] = "wrong-email"

    invalid_errors = validate_rescue_data(invalid_data)
    print("Invalid payload errors:", invalid_errors)


def test_id_generator():
    """Test city-code lookup and Rescue ID generation."""
    print("Kanpur city code:", get_city_code("Kanpur"))

    rescue_id = generate_rescue_id(
        disaster_type="Flood",
        city="Kanpur",
        sequence_number=1,
    )
    print("Generated Rescue ID:", rescue_id)


def test_rescue_service():
    """Test complete registration business logic without a database."""
    try:
        response = register_rescue(SAMPLE_RESCUE_DATA)
        print("Registration response:", response)
    except RescueValidationError as error:
        print("Validation failed:", error.errors)


if __name__ == "__main__":
    print("\n--- Validator Test ---")
    test_validator()

    print("\n--- ID Generator Test ---")
    test_id_generator()

    print("\n--- Rescue Service Test ---")
    test_rescue_service()