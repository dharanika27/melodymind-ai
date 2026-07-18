import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSidebarStore } from "../../store/sidebarStore";
import MusicPlayer from "../player/MusicPlayer";

export default function MainLayout() {
  const { collapsed } = useSidebarStore();

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <div className="flex">
        <Sidebar />

        <div
          className={`
            flex-1
            transition-all
            duration-300
            ${collapsed ? "lg:ml-0" : "lg:ml-0"}
          `}
        >
          <Header />

          <main className="p-6 md:p-8 lg:p-10 pb-28">
            <Outlet />
          </main>
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
}
