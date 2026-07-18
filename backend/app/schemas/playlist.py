from pydantic import BaseModel
from typing import Optional


class PlaylistRequest(BaseModel):
    mood: str
    language: Optional[str] = "English"
    duration: Optional[int] = 60


class PlaylistResponse(BaseModel):
    playlist_name: str
    total_songs: int