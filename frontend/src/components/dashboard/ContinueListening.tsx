const history = ["Interstellar Theme", "Perfect", "Shape of You"];

export default function ContinueListening() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-5 text-2xl font-bold">🎧 Continue Listening</h2>

      <div className="space-y-3">
        {history.map((song) => (
          <div
            key={song}
            className="rounded-xl bg-slate-800 p-4 hover:bg-slate-700 transition"
          >
            {song}
          </div>
        ))}
      </div>
    </div>
  );
}
