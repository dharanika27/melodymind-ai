from fastapi import APIRouter

from app.schemas.chat import ChatRequest, ChatResponse

router = APIRouter(prefix="/chat", tags=["Chat"])


@router.get("/")
def chat_home():
    return {
        "message": "Chat API is ready."
    }


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):
    return ChatResponse(
        response=f"You said: {request.message}"
    )