from fastapi import APIRouter

router = APIRouter(prefix="/chat", tags=["Chat"])


@router.get("/")
def chat_home():
    return {
        "message": "Chat API is ready."
    }