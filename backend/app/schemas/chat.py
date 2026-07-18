from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    message: str = Field(
        ...,
        min_length=2,
        max_length=500,
        description="User chat message"
    )


class ChatResponse(BaseModel):
    response: str