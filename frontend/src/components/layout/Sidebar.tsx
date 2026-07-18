import { NavLink } from "react-router-dom";
import { navigation } from "../../lib/navigation";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { useSidebarStore } from "../../store/sidebarStore";

export default function Sidebar() {
  const { collapsed, toggleSidebar } = useSidebarStore();

  return (
    <aside
      className={`
        hidden
        lg:flex
        h-screen
        sticky
        top-0
        bg-[#0B1220]
        border-r
        border-slate-800
        flex-col
        transition-all
        duration-300
        ${collapsed ? "w-24" : "w-77.5"}
      `}
    >
      {/* Toggle Button */}
      <div className="flex justify-end p-3">
        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition"
        >
          {collapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </button>
      </div>

      {/* Logo */}
      <div className="border-b border-slate-800 px-6 pb-6">
        <div
          className={`flex ${
            collapsed ? "justify-center" : "items-center gap-4"
          }`}
        >
          <img
            src="/logo.svg"
            alt="MelodyMind AI"
            className="h-14 w-14 shrink-0"
          />

          {!collapsed && (
            <div>
              <h1 className="text-2xl font-bold text-blue-500 whitespace-nowrap">
                MelodyMind AI
              </h1>

              <p className="text-xs text-slate-400">Your AI Music Companion</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-3">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `
                flex
                items-center
                ${collapsed ? "justify-center" : "gap-4"}
                rounded-2xl
                px-5
                py-4
                transition-all
                duration-300

                ${
                  isActive
                    ? "bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-blue-400"
                }
                `
              }
            >
              <Icon size={24} />

              {!collapsed && (
                <span className="text-lg font-medium">{item.title}</span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="border-t border-slate-800 p-5">
          <p className="text-center text-xs text-slate-500">
            MelodyMind AI v1.0
          </p>
        </div>
      )}
    </aside>
  );
}
