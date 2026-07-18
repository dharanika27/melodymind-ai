import { useNavigate } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
  route: string;
}

export default function QuickActionCard({
  title,
  description,
  icon: Icon,
  route,
}: Props) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(route)}
      className="
      w-full
      rounded-2xl
      bg-slate-900
      border
      border-slate-800
      p-6
      text-left
      transition
      hover:border-blue-500
      hover:bg-slate-800
      hover:scale-[1.02]
      "
    >
      <Icon className="mb-5 text-blue-500" size={34} />

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </button>
  );
}
