"use client";

import { m } from "framer-motion";
import { mainQuest } from "@/lib/experience";
import MainQuestCard from "./MainQuestCard";
import { DoodleStar, DoodleSparkle, DoodleSquiggle } from "./Doodles";

export default function MainQuestSection() {
  return (
    <section id="mainquest" className="relative py-16 md:py-20 px-6">
      {/* Scattered doodle decorations */}
      <div
        className="absolute top-20 right-[9%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleStar size={16} color="#d0ccc4" filled delay={0} />
      </div>
      <div
        className="absolute top-36 left-[7%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleSparkle size={12} color="#ddd" delay={0} />
      </div>
      <div
        className="absolute bottom-28 right-[6%] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <DoodleStar size={14} color="#d8d4cc" delay={0} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* ─── Section Header (notebook chapter style) ─── */}
        <div className="mb-10">
          {/* Chapter sticky note */}
          <m.div
            className="inline-block mb-5"
            whileHover={{ rotate: 0, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="relative px-4 py-2"
              style={{
                backgroundColor: "#fff3e0",
                boxShadow: "3px 3px 8px rgba(0,0,0,0.1)",
                borderRadius: "2px",
                transform: "rotate(-1.5deg)",
              }}
            >
              {/* Tape on the sticky */}
              <div
                className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-[55px] h-[20px] pointer-events-none z-10"
                style={{
                  background: "rgba(255, 255, 220, 0.65)",
                  border: "1px solid rgba(200, 190, 150, 0.3)",
                  transform: "translateX(-50%) rotate(2deg)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              />
              <span
                className="text-ink-light"
                style={{
                  fontFamily: '"Caveat", cursive',
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              >
                chapter 02 — professional quest
              </span>
            </div>
          </m.div>

          {/* Main heading */}
          <h2
            className="text-ink leading-tight mb-3"
            style={{
              fontFamily: '"Caveat", cursive',
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            }}
          >
            Main Quest{" "}
            <m.span
              className="inline-block"
              animate={{ rotate: [0, 5, -3, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 3,
              }}
            >
              🧑‍💻
            </m.span>
          </h2>

          {/* Wavy underline */}
          <div className="mb-5">
            <DoodleSquiggle width={160} color="#1a1a1a" delay={0} />
          </div>

          {/* Subtitle */}
          <p
            className="text-ink-light max-w-md"
            style={{
              fontFamily: '"Patrick Hand", cursive',
              fontSize: "1.2rem",
              lineHeight: 1.6,
            }}
          >
            The main professional chapter — where the real{" "}
            <span className="marker-yellow">XP gets earned</span>. This is where
            the serious building happens. ⚔️
          </p>
        </div>

        {/* Main Quest Card */}
        <MainQuestCard experience={mainQuest} />

        {/* ─── Bottom note ─── */}
        <div className="mt-8 text-center">
          <p
            className="text-ink-faded"
            style={{
              fontFamily: '"Caveat", cursive',
              fontSize: "1.05rem",
              transform: "rotate(-0.4deg)",
            }}
          >
            currently on this quest... leveling up every day 🎮
          </p>
        </div>
      </div>
    </section>
  );
}
