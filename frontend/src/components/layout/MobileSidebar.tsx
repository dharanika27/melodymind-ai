import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../lib/navigation";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";

export default function MobileSidebar() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-72 bg-[#0B1220] border-r border-slate-800 text-white"
        >
          {/* Logo */}
          <div className="flex items-center gap-3 pb-8 border-b border-slate-800">

            <img
              src="/logo.svg"
              className="h-12 w-12"
              alt="MelodyMind"
            />

            <div>
              <h2 className="text-xl font-bold text-blue-500">
                MelodyMind AI
              </h2>

              <p className="text-xs text-slate-400">
                AI Music Companion
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-8 space-y-3">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "hover:bg-slate-800"
                    }`
                  }
                >
                  <Icon size={22} />
                  <span>{item.title}</span>
                </NavLink>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}