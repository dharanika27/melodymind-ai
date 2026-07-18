import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react";

export default function MusicPlayer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-[#0B1220]/95 backdrop-blur">
      <div className="flex h-20 items-center justify-between px-6">
        {/* Song Info */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-slate-700" />

          <div>
            <h3 className="font-semibold">No song playing</h3>

            <p className="text-sm text-slate-400">MelodyMind AI</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-5">
          <button className="hover:text-blue-500">
            <SkipBack />
          </button>

          <button className="rounded-full bg-blue-600 p-3 hover:bg-blue-500">
            <Play size={20} />
          </button>

          <button className="hover:text-blue-500">
            <SkipForward />
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-3">
          <Volume2 />

          <input type="range" className="w-28" defaultValue={70} />
        </div>
      </div>
    </footer>
  );
}
