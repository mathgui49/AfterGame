import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flame-filter shrink-0"
      >
        <defs>
          <linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff6266" />
            <stop offset="0.5" stopColor="#e3337a" />
            <stop offset="1" stopColor="#6f3be6" />
          </linearGradient>
        </defs>
        <path
          d="M14 0.5c1.2 4.4 4.8 5.8 7.4 9.4 3.3 4.6 4.6 9.3 3.2 13.6C23.1 28.9 18.6 32 14 32S4.9 28.9 3.4 23.5c-1.4-4.3-.1-9 3.2-13.6C9.2 6.3 12.8 4.9 14 .5Z"
          fill="url(#lg1)"
        />
        <path
          d="M14 10c.6 2.2 2.4 3 3.7 4.9 1.7 2.3 2.3 4.7 1.6 6.9-.7 2.7-3 4.2-5.3 4.2s-4.6-1.5-5.3-4.2c-.7-2.2-.1-4.6 1.6-6.9 1.3-1.9 3.1-2.7 3.7-4.9Z"
          fill="#ffe6c2"
          opacity="0.85"
        />
      </svg>
      <span className="font-display text-xl sm:text-2xl font-bold tracking-tight">
        After<span className="shimmer-text">Game</span>
      </span>
    </div>
  );
}
