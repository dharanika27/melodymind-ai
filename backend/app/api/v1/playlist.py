from fastapi import APIRouter

from app.schemas.playlist import (
    PlaylistRequest,
    PlaylistResponse,
)
from fastapi import APIRouter, Depends

from app.api.dependencies import get_playlist_service
from app.services.playlist_service import PlaylistService

router = APIRouter(
    prefix="/playlists",
    tags=["Playlists"]
)


@router.get("/")
def playlists():
    return {
        "message": "Playlist API is ready."
    }


@router.post("/generate", response_model=PlaylistResponse)
def generate_playlist(
    playlist_request: PlaylistRequest,
    playlist_service: PlaylistService = Depends(get_playlist_service),
):
    return playlist_service.generate_playlist(
        playlist_request.mood
    )