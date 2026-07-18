from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_chat():
    response = client.post(
        "/api/v1/chat/",
        json={
            "message": "Play relaxing songs"
        },
    )

    assert response.status_code == 200

    assert "response" in response.json()