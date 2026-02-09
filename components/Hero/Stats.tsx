
import { getStats } from "@/lib/stats";
import { Star, ArrowDown, Circle } from "lucide-react";

function formatKb(bytes: number) {
  if (!bytes || bytes <= 0) return "—";
  const kb = bytes / 1024;
  return `~${kb.toFixed(1)}kb gzipped`;
}

export default async function Stats() {
  const { stars, weekly, gzipBytes, license } = await getStats();

  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4 px-2 text-xs sm:text-sm text-zinc-400">
      <span className="flex items-center gap-1">
        <Star size={12} className="text-gray-300" />
        {stars.toLocaleString()} stars
      </span>
      <span className="flex items-center gap-1">
        <ArrowDown size={12} className="text-blue-400" />
        {weekly.toLocaleString()}/week
      </span>
      <span className="flex items-center gap-1">
        <Circle size={8} className="fill-emerald-400 text-emerald-400" />
        {formatKb(gzipBytes)}
      </span>
      <span>{license}</span>
    </div>
  );
}
