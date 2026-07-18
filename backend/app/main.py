from fastapi import FastAPI

from app.core.config import settings
from app.api.v1.router import api_router
from app.core.logging import logger
from app.middleware.request_logger import RequestLoggerMiddleware
from app.exceptions.custom_exceptions import MelodyMindException
from app.exceptions.handlers import melodymind_exception_handler

from app.db.base import Base
from app.db.session import engine

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
)

app.include_router(api_router, prefix="/api/v1")


@app.get("/")
def root():
    return {
        "application": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "environment": settings.ENVIRONMENT,
        "status": "running",
    }

app.add_middleware(RequestLoggerMiddleware)

app.add_exception_handler(
    MelodyMindException,
    melodymind_exception_handler,
)

logger.info("MelodyMind AI Backend Started")