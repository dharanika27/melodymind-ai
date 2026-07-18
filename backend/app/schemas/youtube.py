from pydantic import BaseModel


class YouTubeSearchRequest(BaseModel):
    query: str


class YouTubeVideo(BaseModel):
    title: str
    video_id: str
    thumbnail: str