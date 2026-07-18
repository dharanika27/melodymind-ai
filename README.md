# 🎵 MelodyMind AI

> **Your Intelligent Music Discovery & AI DJ Assistant**

MelodyMind AI is an AI-powered music discovery platform that helps users find the perfect music using natural language. Instead of searching by song title or artist, users can describe their mood, activity, or occasion, and MelodyMind AI intelligently generates personalized playlists using multiple AI agents.

The application uses official YouTube APIs for legal music discovery and playback, while leveraging Agentic AI, RAG, and modern AI engineering practices to provide personalized recommendations.

---

## 🚀 Features

- 🤖 Conversational AI music assistant
- 🎵 AI-generated playlists
- 😊 Mood-based music recommendations
- 📚 Personalized recommendations using RAG
- 🧠 Multi-Agent Architecture with LangGraph
- 🔍 Music discovery using YouTube Data API
- ▶️ Embedded YouTube Player
- 📈 User preference learning
- 🛡️ Guardrails for reliable AI responses
- 📊 LangSmith tracing and observability
- 🔌 MCP integrations for external tools
- 💬 Explainable recommendations

---

## 🏗️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

### Backend

- FastAPI
- Python
- SQLAlchemy
- Pydantic

### AI & LLM

- LangChain
- LangGraph
- LangSmith
- OpenAI GPT (or Gemini)
- ChromaDB (RAG)

### Database

- PostgreSQL
- ChromaDB

### APIs

- YouTube Data API v3
- YouTube IFrame Player API

### Deployment

- Docker
- Vercel
- Render / AWS

---

## 🧠 Multi-Agent Architecture

- **Supervisor Agent** – Coordinates the workflow.
- **Mood Agent** – Understands user emotions and intent.
- **Search Agent** – Searches YouTube for relevant music.
- **Playlist Agent** – Builds optimized playlists.
- **Learning Agent** – Learns user preferences using RAG.
- **Critic Agent** – Reviews and improves recommendations.

---

## 📂 Project Structure

```text
melodymind-ai/
│
├── frontend/
├── backend/
├── docs/
├── docker/
├── README.md
├── docker-compose.yml
└── .env.example
```

---

## 📅 Development Roadmap

### Phase 1

- Project setup
- React frontend
- FastAPI backend

### Phase 2

- AI chat interface

### Phase 3

- Multi-agent system with LangGraph

### Phase 4

- YouTube API integration

### Phase 5

- RAG and personalization

### Phase 6

- MCP integrations

### Phase 7

- LangSmith tracing and evaluation

### Phase 8

- Deployment and production readiness

---

## 🎯 Project Goal

Build an intelligent AI-powered music assistant capable of understanding natural language requests, discovering music through official YouTube APIs, generating personalized playlists, and continuously learning user preferences using Retrieval-Augmented Generation (RAG).

---

## 📄 License

This project is intended for educational and portfolio purposes. MelodyMind AI uses official APIs and does not host or distribute copyrighted music.

<!-- uvicorn app.main:app --reload -->
