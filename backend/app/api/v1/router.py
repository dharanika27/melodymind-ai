from fastapi import APIRouter

from app.api.v1.health import router as health_router
from app.api.v1.chat import router as chat_router
from app.api.v1.playlist import router as playlist_router
from app.api.v1.youtube import router as youtube_router

api_router = APIRouter()

api_router.include_router(health_router)
api_router.include_router(chat_router)
api_router.include_router(playlist_router)
api_router.include_router(youtube_router)