from app.schemas.chat import ChatResponse


class ChatService:

    @staticmethod
    def process_message(message: str) -> ChatResponse:
        """
        Process user message.

        Later:
        - LangGraph
        - Gemini
        - RAG
        """

        return ChatResponse(
            response=f"You said: {message}"
        )