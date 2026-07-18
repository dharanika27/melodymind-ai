from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "MelodyMind AI"
    APP_VERSION: str = "1.0.0"

    ENVIRONMENT: str = "development"
    DEBUG: bool = True

    HOST: str = "127.0.0.1"
    PORT: int = 8000

    OPENAI_API_KEY: str = ""
    GEMINI_API_KEY: str = ""
    YOUTUBE_API_KEY: str = ""
    LANGCHAIN_API_KEY: str = ""
    LANGSMITH_API_KEY: str = ""

    DATABASE_URL: str = "sqlite:///./melodymind.db"
    CHROMA_DB_PATH: str = "./chroma_db"

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
    )


settings = Settings()