"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface GameTileProps {
  href: string;
  title: string;
  tagline: string;
  count: string;
  Icon: LucideIcon;
  gradient: string;
  delay?: number;
}

export function GameTile({
  href,
  title,
  tagline,
  count,
  Icon,
  gradient,
  delay = 0,
}: GameTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={href} className="group block">
        <div
          className={`relative overflow-hidden rounded-3xl p-0.5 transition-transform duration-300 group-hover:scale-[1.02] glow-velvet`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`} />
          <div className="relative rounded-[calc(1.5rem-2px)] bg-[#0d0513]/80 backdrop-blur-xl p-6 sm:p-7 h-full min-h-[220px] flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}
              >
                <Icon className="h-6 w-6 text-white" strokeWidth={2.2} />
              </div>
              <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="mt-8">
              <h3 className="font-display text-2xl sm:text-[26px] font-bold tracking-tight">
                {title}
              </h3>
              <p className="mt-1.5 text-sm text-white/60 leading-snug">
                {tagline}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70">
                  {count}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
