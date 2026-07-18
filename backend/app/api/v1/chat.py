from fastapi import APIRouter

from app.schemas.chat import ChatRequest, ChatResponse
from fastapi import Depends

from app.api.dependencies import get_chat_service
from app.services.chat_service import ChatService

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


@router.get("/")
def chat_home():
    return {
        "message": "Chat API is ready."
    }


@router.post("/", response_model=ChatResponse)
def chat(
    chat_request: ChatRequest,
    chat_service: ChatService = Depends(get_chat_service),
):
    return chat_service.process_message(
        chat_request.message
    )