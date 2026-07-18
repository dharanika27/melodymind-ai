const songs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
  },
  {
    title: "Heat Waves",
    artist: "Glass Animals",
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
  },
];

export default function TrendingSongs() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-5 text-2xl font-bold">🔥 Trending Songs</h2>

      <div className="space-y-4">
        {songs.map((song) => (
          <div
            key={song.title}
            className="flex items-center justify-between rounded-xl bg-slate-800 p-4 hover:bg-slate-700 transition"
          >
            <div>
              <h3 className="font-semibold">{song.title}</h3>

              <p className="text-sm text-slate-400">{song.artist}</p>
            </div>

            <button className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-500">
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
