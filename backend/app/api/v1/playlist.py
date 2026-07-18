from fastapi import APIRouter

from app.schemas.playlist import (
    PlaylistRequest,
    PlaylistResponse,
)

router = APIRouter(prefix="/playlists", tags=["Playlists"])

DEFAULT_PLAYLIST_SIZE = 20


@router.get("/")
def playlists():
    return {
        "message": "Playlist API is ready."
    }


@router.post("/generate", response_model=PlaylistResponse)
def generate_playlist(request: PlaylistRequest):
    return PlaylistResponse(
        playlist_name=f"{request.mood} Playlist",
        total_songs=DEFAULT_PLAYLIST_SIZE,
    )