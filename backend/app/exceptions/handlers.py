from fastapi import Request
from fastapi.responses import JSONResponse

from app.exceptions.custom_exceptions import MelodyMindException


async def melodymind_exception_handler(
    request: Request,
    exc: MelodyMindException,
):
    return JSONResponse(
        status_code=400,
        content={
            "success": False,
            "message": exc.message,
        },
    )