from fastapi import APIRouter

router = APIRouter(prefix="/youtube", tags=["YouTube"])


@router.get("/")
def youtube():
    return {
        "message": "YouTube API is ready."
    }