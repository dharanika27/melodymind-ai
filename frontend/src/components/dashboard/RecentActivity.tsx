const activity = [
  "Created 'Workout Playlist'",
  "Asked AI for relaxing songs",
  "Liked 'Believer'",
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-5 text-2xl font-bold">🕒 Recent Activity</h2>

      <ul className="space-y-3 text-slate-300">
        {activity.map((item) => (
          <li key={item} className="rounded-lg bg-slate-800 p-4">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
