import { cn } from "@/lib/utils";

export function LevelBadge({ level, className }: { level: 1 | 2 | 3; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs",
        className
      )}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          className={i < level ? "text-ember-400" : "text-white/20"}
        >
          🔥
        </span>
      ))}
    </div>
  );
}
