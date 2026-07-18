from pydantic import BaseModel
from typing import List


class UserPreference(BaseModel):
    favorite_artists: List[str] = []
    favorite_genres: List[str] = []
    language: str = "English"