import MobileSidebar from "./MobileSidebar";

import { Bell, Moon, Search } from "lucide-react";

import { Input } from "../ui/input";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#020817]/95 backdrop-blur">
      <div className="flex h-20 items-center justify-between px-6">
        {/* Left */}

        <div className="flex items-center gap-5">
          <MobileSidebar />

          <div className="hidden md:block">
            <h2 className="text-2xl font-bold">Welcome Back 👋</h2>

            <p className="text-sm text-slate-400">
              Discover your music with AI
            </p>
          </div>
        </div>

        {/* Center */}

        <div className="hidden lg:flex w-full max-w-md mx-8">
          <div className="relative w-full">
            <Search
              className="absolute left-3 top-3 text-slate-400"
              size={18}
            />

            <Input
              placeholder="Search songs, artists..."
              className="pl-10 bg-slate-900 border-slate-700"
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">
          <button className="rounded-xl bg-slate-900 p-3 hover:bg-slate-800">
            <Bell size={20} />
          </button>

          <button className="rounded-xl bg-slate-900 p-3 hover:bg-slate-800">
            <Moon size={20} />
          </button>

          <Avatar className="h-11 w-11">
            <AvatarImage src="" />

            <AvatarFallback className="bg-blue-600 text-white">
              D
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
