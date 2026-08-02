"""
Django API views for Rescue ID Generator.
Views remain small; business logic is handled by rescue_service.py.
"""

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET, require_POST

from .rescue_service import RescueValidationError, register_rescue, search_rescue
from .utils import RequestPayloadError, normalize_payload, parse_json_request


@csrf_exempt
@require_POST
def generate_id_view(request):
    """
    POST /generate-id/
    Validate victim details and generate a Rescue ID.
    """
    try:
        request_data = parse_json_request(request)
        normalized_data = normalize_payload(request_data)
        response_data = register_rescue(normalized_data)

        return JsonResponse(response_data, status=201)

    except RequestPayloadError as error:
        return JsonResponse(
            {
                "success": False,
                "errors": {"request": str(error)},
            },
            status=400,
        )

    except RescueValidationError as error:
        return JsonResponse(
            {
                "success": False,
                "errors": error.errors,
            },
            status=400,
        )

    except Exception:
        return JsonResponse(
            {
                "success": False,
                "errors": {
                    "server": "Unable to generate Rescue ID. Please try again."
                },
            },
            status=500,
        )


@require_GET
def search_rescue_view(request, rescue_id):
    """
    GET /search/<rescue_id>/
    Search for a rescue record through the database placeholder.
    """
    rescue_record = search_rescue(rescue_id)

    if rescue_record is None:
        return JsonResponse(
            {
                "success": False,
                "message": "Rescue record not found.",
            },
            status=404,
        )

    return JsonResponse(
        {
            "success": True,
            "record": rescue_record,
        },
        status=200,
    )


@require_GET
def health_view(request):
    """
    GET /health/
    Basic API health endpoint.
    """
    return JsonResponse({"status": "ok"}, status=200)