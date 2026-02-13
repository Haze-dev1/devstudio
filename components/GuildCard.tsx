"use client";

import { GuildActivity } from "@/types";
import { m } from "framer-motion";
import { DoodleStar, DoodleSparkle } from "./Doodles";

interface GuildCardProps {
  activity: GuildActivity;
  index?: number;
}

const tiltValues = [-1.3, 1.0, -0.7, 1.4, -0.5, 0.9];
const verticalOffsets = [0, 8, -4, 6, -6, 3];

export default function GuildCard({ activity, index = 0 }: GuildCardProps) {
  const rotation = tiltValues[index % tiltValues.length];
  const yOffset = verticalOffsets[index % verticalOffsets.length];

  return (
    <div
      className="relative"
      style={{
        transform: `rotate(${rotation}deg) translateY(${yOffset}px)`,
      }}
    >
      <m.div
        whileHover={{
          y: -5,
          rotate: 0,
          boxShadow: "7px 7px 0px #1a1a1a",
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        whileTap={{
          y: 2,
          x: 2,
          boxShadow: "1px 1px 0px #1a1a1a",
          transition: { duration: 0.1 },
        }}
        className="relative bg-white p-6 md:p-7 h-full"
        style={{
          border: "2.5px solid #1a1a1a",
          borderRadius: "4px",
          boxShadow: "4px 4px 0px #1a1a1a",
        }}
      >
        {/* ─── Tape strip ─── */}
        <div
          className="absolute -top-[10px] left-1/2 -translate-x-1/2 z-10 pointer-events-none"
          style={{
            background: "rgba(255, 255, 220, 0.65)",
            border: "1px solid rgba(200, 190, 150, 0.3)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            width: "65px",
            height: "24px",
            transform: `translateX(-50%) rotate(${index % 2 === 0 ? -5 : 7}deg)`,
          }}
        />

        {/* ─── Tiny doodle decorations ─── */}
        <div
          className="absolute -top-3 -right-3 pointer-events-none select-none"
          aria-hidden="true"
        >
          <DoodleStar size={13} color="#ccc" filled={index % 2 === 0} delay={0} />
        </div>
        <div
          className="absolute -bottom-2 -left-3 pointer-events-none select-none"
          aria-hidden="true"
        >
          <DoodleSparkle size={10} color="#ddd" delay={0} />
        </div>

        {/* ─── Faint ruled lines ─── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 23px, #4a4a4a 23px, #4a4a4a 24px)",
            backgroundSize: "100% 24px",
            borderRadius: "4px",
          }}
        />

        {/* ─── Color accent strip ─── */}
        <div
          className="h-[5px] rounded-sm mb-4"
          style={{
            backgroundColor: activity.stickyColor,
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        />

        {/* ─── Card content ─── */}
        <div className="relative z-[1]">
          {/* Emoji icon */}
          <div className="mb-3">
            <span className="text-2xl select-none">{activity.emoji}</span>
          </div>

          {/* Role */}
          <h4
            className="text-ink leading-tight mb-1"
            style={{
              fontFamily: '"Caveat", cursive',
              fontWeight: 700,
              fontSize: "1.45rem",
              letterSpacing: "-0.01em",
            }}
          >
            {activity.role}
          </h4>

          {/* Organization */}
          <p className="mb-3">
            {activity.organizationUrl ? (
              <a
                href={activity.organizationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group"
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.05rem",
                  color: "#4a4a4a",
                }}
              >
                <span className="relative z-10">
                  @ {activity.organization}
                </span>
                <span
                  className="absolute left-0 right-0 -bottom-1 h-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8'%3E%3Cpath d='M0 4 Q10 0 20 4 Q30 8 40 4 Q50 0 60 4 Q70 8 80 4 Q90 0 100 4 Q110 8 120 4' fill='none' stroke='%231a1a1a' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "50px 5px",
                  }}
                />
              </a>
            ) : (
              <span
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.05rem",
                  color: "#4a4a4a",
                }}
              >
                @ {activity.organization}
              </span>
            )}
          </p>

          {/* Description */}
          <p
            className="text-ink-light leading-relaxed mb-4"
            style={{
              fontFamily: '"Patrick Hand", cursive',
              fontSize: "1.05rem",
              lineHeight: 1.6,
            }}
          >
            {activity.description}
          </p>

          {/* Impact metric tag */}
          {activity.impactMetric && (
            <div
              className="inline-block px-3 py-1"
              style={{
                fontFamily: '"Caveat", cursive',
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#4a4a4a",
                backgroundColor: `${activity.stickyColor}`,
                border: "1.5px dashed rgba(0,0,0,0.15)",
                borderRadius: "4px",
              }}
            >
              ⚡ {activity.impactMetric}
            </div>
          )}
        </div>

        {/* ─── Dog-ear corner fold ─── */}
        <div
          className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, white 50%, #e8e4dc 50%)",
            borderTop: "1px solid #ccc",
            borderLeft: "1px solid #ccc",
          }}
        />
      </m.div>
    </div>
  );
}
