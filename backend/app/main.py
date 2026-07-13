from fastapi import FastAPI

app = FastAPI(
    title="MelodyMind AI",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Welcome to MelodyMind AI 🎵"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }