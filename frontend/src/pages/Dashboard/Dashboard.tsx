export default function Dashboard() {
  return (
    <div>
      <h1 className="text-5xl font-bold">Dashboard</h1>

      <p className="mt-2 text-slate-400">
        Welcome back! Discover your music with AI.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-slate-900 p-8">
          <h3 className="text-xl font-semibold">AI Chat</h3>

          <p className="mt-3 text-slate-400">Ask MelodyMind anything.</p>
        </div>

        <div className="rounded-3xl bg-slate-900 p-8">
          <h3 className="text-xl font-semibold">Playlists</h3>

          <p className="mt-3 text-slate-400">Your generated playlists.</p>
        </div>

        <div className="rounded-3xl bg-slate-900 p-8">
          <h3 className="text-xl font-semibold">Favorites</h3>

          <p className="mt-3 text-slate-400">Songs you love.</p>
        </div>

        <div className="rounded-3xl bg-slate-900 p-8">
          <h3 className="text-xl font-semibold">History</h3>

          <p className="mt-3 text-slate-400">Previous AI searches.</p>
        </div>
      </div>
    </div>
  );
}
