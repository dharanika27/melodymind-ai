import { MessageSquare, ListMusic, Heart, Music4 } from "lucide-react";

import SectionTitle from "../../components/dashboard/SectionTitle";
import QuickActionCard from "../../components/dashboard/QuickAction";

export default function Dashboard() {
  return (
    <div className="space-y-12">
      {/* Welcome */}

      <div>
        <h1 className="text-5xl font-bold">Dashboard</h1>

        <p className="mt-2 text-lg text-slate-400">
          Welcome back! Discover your music with AI.
        </p>
      </div>

      {/* Quick Actions */}

      <section>
        <SectionTitle
          title="Quick Actions"
          subtitle="Jump directly into your favorite features."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <QuickActionCard
            title="AI Chat"
            description="Ask MelodyMind anything."
            icon={MessageSquare}
            route="/chat"
          />

          <QuickActionCard
            title="Playlists"
            description="Create AI playlists."
            icon={ListMusic}
            route="/playlists"
          />

          <QuickActionCard
            title="Favorites"
            description="Your liked songs."
            icon={Heart}
            route="/favorites"
          />

          <QuickActionCard
            title="Mood Music"
            description="Generate music by mood."
            icon={Music4}
            route="/chat"
          />
        </div>
      </section>
    </div>
  );
}
