from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_playlist():
    response = client.post(
        "/api/v1/playlists/generate",
        json={
            "mood": "Workout",
            "language": "English",
            "duration": 60,
        },
    )

    assert response.status_code == 200

    assert response.json()["playlist_name"] == "Workout Playlist"