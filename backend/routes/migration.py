from fastapi import APIRouter

router = APIRouter()


@router.get("/shelters")
def shelters():
    return []
