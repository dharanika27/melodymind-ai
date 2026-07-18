from fastapi import APIRouter

router = APIRouter(prefix="/playlists", tags=["Playlists"])


@router.get("/")
def playlists():
    return {
        "message": "Playlist API is ready."
    }