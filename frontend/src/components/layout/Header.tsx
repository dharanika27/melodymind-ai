import { Bell, Moon, Search } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-[#020817]/90 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-5">
        <MobileSidebar />

        <div>
          <h2 className="text-2xl font-bold">Welcome 👋</h2>

          <p className="text-slate-400">Enjoy your music experience.</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-xl bg-slate-900 p-3 hover:bg-slate-800">
            <Search size={20} />
          </button>

          <button className="rounded-xl bg-slate-900 p-3 hover:bg-slate-800">
            <Bell size={20} />
          </button>

          <button className="rounded-xl bg-slate-900 p-3 hover:bg-slate-800">
            <Moon size={20} />
          </button>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold">
            D
          </div>
        </div>
      </div>
    </header>
  );
}
