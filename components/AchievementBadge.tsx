"use client";

import { Achievement } from "@/types";
import { m } from "framer-motion";

interface AchievementBadgeProps {
  achievement: Achievement;
  index: number;
}

const tiltValues = [1.2, -0.8, 1.5, -1.1, 0.7, -1.4, 0.9, -0.6];

const categoryIcons: Record<Achievement["category"], string> = {
  award: "🏅",
  milestone: "📍",
  community: "🤝",
  learning: "📖",
  fun: "🎲",
};

export default function AchievementBadge({
  achievement,
  index,
}: AchievementBadgeProps) {
  const rotation = tiltValues[index % tiltValues.length];

  return (
    <div className="relative" style={{ transform: `rotate(${rotation}deg)` }}>
      <m.div
        whileHover={{
          y: -5,
          rotate: 0,
          scale: 1.03,
          boxShadow: "5px 5px 12px rgba(0, 0, 0, 0.18)",
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        whileTap={{
          y: 1,
          scale: 0.98,
          boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)",
          transition: { duration: 0.1 },
        }}
        className="relative p-5 md:p-6 cursor-default select-none"
        style={{
          backgroundColor: achievement.stickyColor,
          borderRadius: "2px",
          boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.12)",
        }}
      >
        {/* ─── Darker top fold of sticky note ─── */}
        <div
          className="absolute top-0 left-0 right-0 h-[5px] pointer-events-none"
          style={{
            background: "rgba(0, 0, 0, 0.06)",
            borderRadius: "2px 2px 0 0",
          }}
        />

        {/* ─── Pushpin ─── */}
        <span
          className="absolute -top-3 pointer-events-none select-none"
          style={{
            right: index % 3 === 0 ? "14px" : index % 3 === 1 ? "18px" : "12px",
            transform: `rotate(${index % 2 === 0 ? 12 : -8}deg)`,
            fontSize: "1.2rem",
            filter: "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.15))",
          }}
          aria-hidden="true"
        >
          📌
        </span>

        {/* ─── Emoji badge circle ─── */}
        <div className="flex items-start gap-4 mb-3">
          <div
            className="flex-shrink-0 w-11 h-11 flex items-center justify-center"
            style={{
              border: "2.5px solid #1a1a1a",
              borderRadius: "50%",
              boxShadow: "2px 2px 0px #1a1a1a",
              backgroundColor: "white",
            }}
          >
            <span className="text-xl leading-none select-none">
              {achievement.emoji}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            {/* ─── Title ─── */}
            <h4
              className="text-ink leading-tight mb-0.5"
              style={{
                fontFamily: '"Caveat", cursive',
                fontWeight: 700,
                fontSize: "1.35rem",
                letterSpacing: "-0.01em",
              }}
            >
              {achievement.title}
            </h4>

            {/* ─── Category tag ─── */}
            <span
              className="inline-block"
              style={{
                fontFamily: '"Caveat", cursive',
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "#8a8a8a",
              }}
            >
              {categoryIcons[achievement.category]} {achievement.category}
            </span>
          </div>
        </div>

        {/* ─── Description ─── */}
        <p
          className="text-ink-light leading-relaxed"
          style={{
            fontFamily: '"Patrick Hand", cursive',
            fontSize: "1.05rem",
            lineHeight: 1.55,
          }}
        >
          {achievement.description}
        </p>

        {/* ─── Hand-drawn checkbox (always checked — it's an achievement!) ─── */}
        <div className="mt-3 flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="#1a1a1a"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M7 12.5 L10.5 16 L17 8"
              stroke="#1a1a1a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontFamily: '"Caveat", cursive',
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "#8a8a8a",
            }}
          >
            unlocked!
          </span>
        </div>

        {/* ─── Bottom-left corner curl (subtle sticky note peel) ─── */}
        <div
          className="absolute bottom-0 left-0 w-4 h-4 pointer-events-none"
          style={{
            background: `linear-gradient(315deg, ${achievement.stickyColor} 50%, rgba(0,0,0,0.05) 50%)`,
            borderTopRightRadius: "3px",
          }}
        />

        {/* ─── Faint scribble lines inside the note ─── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 19px, #4a4a4a 19px, #4a4a4a 20px)",
            backgroundSize: "100% 20px",
            borderRadius: "2px",
          }}
        />
      </m.div>
    </div>
  );
}
