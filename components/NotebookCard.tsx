"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";
import { DoodleStar, DoodleSparkle } from "./Doodles";

interface NotebookCardProps {
  children: ReactNode;
  tilt?: number;
  index?: number;
  stickyColor?: string;
  className?: string;
  showTape?: boolean;
  showDogEar?: boolean;
  showRuledLines?: boolean;
  showDoodles?: boolean;
  tapeStyle?: "both" | "left" | "right" | "center";
  as?: "div" | "article" | "section";
}

const defaultTilts = [-1.2, 0.8, -0.6, 1.1, -0.9, 0.5, -0.4, 1.3];

export default function NotebookCard({
  children,
  tilt,
  index = 0,
  stickyColor,
  className = "",
  showTape = true,
  showDogEar = true,
  showRuledLines = true,
  showDoodles = true,
  tapeStyle = "both",
  as: Component = "div",
}: NotebookCardProps) {
  const rotation = tilt ?? defaultTilts[index % defaultTilts.length];

  const tapeBase = {
    background: "rgba(255, 255, 220, 0.65)",
    border: "1px solid rgba(200, 190, 150, 0.3)",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
  };

  return (
    <div className="relative" style={{ transform: `rotate(${rotation}deg)` }}>
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
        className={`relative p-6 md:p-8 ${className}`}
        style={{
          backgroundColor: stickyColor || "white",
          border: "2.5px solid #1a1a1a",
          borderRadius: "4px",
          boxShadow: "4px 4px 0px #1a1a1a",
        }}
      >
        {/* ─── Tape strips ─── */}
        {showTape &&
          (tapeStyle === "both" ||
            tapeStyle === "left" ||
            tapeStyle === "center") && (
            <div
              className="absolute -top-[10px] z-10 pointer-events-none"
              style={{
                ...tapeBase,
                width: "70px",
                height: "26px",
                left: tapeStyle === "center" ? "50%" : "12%",
                transform:
                  tapeStyle === "center"
                    ? "translateX(-50%) rotate(-2deg)"
                    : "rotate(-8deg)",
              }}
            />
          )}
        {showTape && (tapeStyle === "both" || tapeStyle === "right") && (
          <div
            className="absolute -top-[8px] right-[12%] z-10 pointer-events-none"
            style={{
              ...tapeBase,
              width: "70px",
              height: "26px",
              transform: "rotate(10deg)",
            }}
          />
        )}

        {/* ─── Tiny doodle decorations ─── */}
        {showDoodles && (
          <>
            <div
              className="absolute -top-3 -right-3 pointer-events-none select-none"
              aria-hidden="true"
            >
              <DoodleStar size={14} color="#ccc" filled delay={0} />
            </div>
            <div
              className="absolute -bottom-2 -left-3 pointer-events-none select-none"
              aria-hidden="true"
            >
              <DoodleSparkle size={11} color="#ddd" delay={0} />
            </div>
          </>
        )}

        {/* ─── Faint ruled lines behind the card ─── */}
        {showRuledLines && (
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06] z-0"
            aria-hidden="true"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 23px, #4a4a4a 23px, #4a4a4a 24px)",
              backgroundSize: "100% 24px",
              borderRadius: "4px",
            }}
          />
        )}

        {/* ─── Card Content ─── */}
        <Component className="relative z-[1]">{children}</Component>

        {/* ─── Dog-ear corner fold ─── */}
        {showDogEar && (
          <div
            className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${stickyColor || "white"} 50%, ${stickyColor ? darkenColor(stickyColor) : "#e8e4dc"} 50%)`,
              borderTop: "1px solid #ccc",
              borderLeft: "1px solid #ccc",
            }}
          />
        )}
      </m.div>
    </div>
  );
}

/**
 * Slightly darkens a hex color for the dog-ear fold effect.
 * Quick and dirty — just reduces brightness by ~10%.
 */
function darkenColor(hex: string): string {
  try {
    const clean = hex.replace("#", "");
    const r = Math.max(0, parseInt(clean.substring(0, 2), 16) - 20);
    const g = Math.max(0, parseInt(clean.substring(2, 4), 16) - 20);
    const b = Math.max(0, parseInt(clean.substring(4, 6), 16) - 20);
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  } catch {
    return "#e8e4dc";
  }
}
