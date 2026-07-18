from app.schemas.playlist import PlaylistResponse

DEFAULT_PLAYLIST_SIZE = 20


class PlaylistService:

    @staticmethod
    def generate_playlist(mood: str) -> PlaylistResponse:
        """
        Generate playlist.

        Later:
        - YouTube API
        - Mood Agent
        - Playlist Agent
        """

        return PlaylistResponse(
            playlist_name=f"{mood} Playlist",
            total_songs=DEFAULT_PLAYLIST_SIZE,
        )