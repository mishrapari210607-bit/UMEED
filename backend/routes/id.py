from fastapi import APIRouter

router = APIRouter()


@router.get("/verify/{emergency_id}")
def verify(emergency_id: str):
    return {"id": emergency_id, "verified": False}
