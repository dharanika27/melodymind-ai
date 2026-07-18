from app.services.chat_service import ChatService
from app.services.playlist_service import PlaylistService
from app.services.youtube_service import YouTubeService
from app.services.user_service import UserService


def get_chat_service() -> ChatService:
    return ChatService()


def get_playlist_service() -> PlaylistService:
    return PlaylistService()


def get_youtube_service() -> YouTubeService:
    return YouTubeService()


def get_user_service() -> UserService:
    return UserService()