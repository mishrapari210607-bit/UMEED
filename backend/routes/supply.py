from fastapi import APIRouter

router = APIRouter()


@router.get("/inventory")
def inventory():
    return []
