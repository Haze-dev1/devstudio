"use client";

import { m } from "framer-motion";
import { achievements } from "@/lib/achievements";
import AchievementBadge from "./AchievementBadge";
import { DoodleStar, DoodleSparkle, DoodleSquiggle } from "./Doodles";

export default function Achievements() {
  const completedCount = achievements.length;

  return (
    <section id="achievements" className="relative py-16 md:py-20 px-6">
      {/* Scattered doodle decorations */}
      <div
        className="absolute top-16 left-[8%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleStar size={18} color="#d0ccc4" filled delay={0} />
      </div>
      <div
        className="absolute top-32 left-[12%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleSparkle size={12} color="#ddd" delay={0} />
      </div>
      <div
        className="absolute bottom-36 right-[7%] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <DoodleStar size={14} color="#d8d4cc" delay={0} />
      </div>
      <div
        className="absolute top-[45%] right-[4%] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <DoodleSparkle size={11} color="#d0ccc4" delay={0} />
      </div>
      <div
        className="absolute bottom-20 left-[5%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleStar size={12} color="#ddd" filled delay={0} />
      </div>
      <div
        className="absolute top-[60%] left-[3%] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <DoodleSparkle size={13} color="#d8d4cc" delay={0} />
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
                backgroundColor: "#fce4ec",
                boxShadow: "3px 3px 8px rgba(0,0,0,0.1)",
                borderRadius: "2px",
                transform: "rotate(1deg)",
              }}
            >
              {/* Tape on the sticky */}
              <div
                className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-[55px] h-[20px] pointer-events-none z-10"
                style={{
                  background: "rgba(255, 255, 220, 0.65)",
                  border: "1px solid rgba(200, 190, 150, 0.3)",
                  transform: "translateX(-50%) rotate(-1deg)",
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
                chapter 07 — bonus content
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
            Side Quests Completed{" "}
            <m.span
              className="inline-block"
              animate={{ rotate: [0, 8, -5, 0], scale: [1, 1.1, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 3,
              }}
            >
              🏆
            </m.span>
          </h2>

          {/* Wavy underline */}
          <div className="mb-5">
            <DoodleSquiggle width={180} color="#1a1a1a" delay={0} />
          </div>

          {/* Subtitle */}
          <p
            className="text-ink-light max-w-lg"
            style={{
              fontFamily: '"Patrick Hand", cursive',
              fontSize: "1.2rem",
              lineHeight: 1.6,
            }}
          >
            Not everything fits neatly into a job title. These are the wins,
            milestones, and weird flex moments I&apos;m{" "}
            <span className="marker-pink">secretly proud of</span>. ✨
          </p>

          {/* Quest progress bar (notebook-style) */}
          <div className="mt-6 max-w-xs">
            <div
              className="relative px-5 py-3"
              style={{
                backgroundColor: "white",
                border: "2px solid #1a1a1a",
                borderRadius: "6px",
                boxShadow: "3px 3px 0px #1a1a1a",
              }}
            >
              {/* Progress label */}
              <div className="flex items-center justify-between mb-2">
                <span
                  style={{
                    fontFamily: '"Caveat", cursive',
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#4a4a4a",
                  }}
                >
                  quest log
                </span>
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "0.75rem",
                    color: "#8a8a8a",
                  }}
                >
                  {completedCount}/{completedCount} ✓
                </span>
              </div>

              {/* Progress bar */}
              <div
                className="relative h-4 overflow-hidden"
                style={{
                  border: "2px solid #1a1a1a",
                  borderRadius: "3px",
                  backgroundColor: "#f5f0e8",
                }}
              >
                <div
                  className="h-full"
                  style={{
                    width: "100%",
                    backgroundColor: "#81c784",
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(255,255,255,0.15) 4px, rgba(255,255,255,0.15) 8px)",
                  }}
                />

                {/* Pencil-line notches on progress bar */}
                {[25, 50, 75].map((pct) => (
                  <div
                    key={pct}
                    className="absolute top-0 bottom-0 pointer-events-none"
                    style={{
                      left: `${pct}%`,
                      width: "1.5px",
                      backgroundColor: "rgba(0, 0, 0, 0.15)",
                    }}
                  />
                ))}
              </div>

              {/* XP label */}
              <p
                className="mt-1.5 text-right"
                style={{
                  fontFamily: '"Caveat", cursive',
                  fontSize: "0.85rem",
                  color: "#b8b8b8",
                }}
              >
                max XP reached 🎮
              </p>
            </div>
          </div>
        </div>

        {/* ─── Achievement Badges Grid (pinned sticky notes) ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {achievements.map((achievement, index) => (
            <div key={achievement.id}>
              <AchievementBadge achievement={achievement} index={index} />
            </div>
          ))}
        </div>

        {/* ─── Bottom fun note ─── */}
        <div className="mt-10">
          {/* Sketched separator */}
          <div
            className="flex items-center justify-center gap-3 mb-6"
            aria-hidden="true"
          >
            <div
              className="flex-1 max-w-[100px] h-[2px]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 4'%3E%3Cpath d='M0 2 C20 0, 30 4, 50 2 C70 0, 80 4, 100 2 C120 0, 130 4, 150 2 C170 0, 180 4, 200 2' fill='none' stroke='%23ccc' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-x",
                backgroundSize: "100px 4px",
              }}
            />
            <DoodleStar size={12} color="#ccc" delay={0} />
            <div
              className="flex-1 max-w-[100px] h-[2px]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 4'%3E%3Cpath d='M0 2 C20 0, 30 4, 50 2 C70 0, 80 4, 100 2 C120 0, 130 4, 150 2 C170 0, 180 4, 200 2' fill='none' stroke='%23ccc' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-x",
                backgroundSize: "100px 4px",
              }}
            />
          </div>

          {/* Notebook-style closing card */}
          <div className="flex justify-center">
            <m.div
              className="relative inline-block"
              whileHover={{
                rotate: 0,
                y: -3,
                boxShadow: "5px 5px 10px rgba(0,0,0,0.14)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="relative px-8 py-5 text-center"
                style={{
                  backgroundColor: "#fff9c4",
                  boxShadow: "3px 3px 8px rgba(0,0,0,0.12)",
                  borderRadius: "2px",
                  transform: "rotate(-0.8deg)",
                }}
              >
                {/* Darker top fold */}
                <div
                  className="absolute top-0 left-0 right-0 h-[5px] pointer-events-none"
                  style={{
                    background: "#f0e790",
                    borderRadius: "2px 2px 0 0",
                  }}
                />

                {/* Pushpin */}
                <span
                  className="absolute -top-3 right-5 text-sm pointer-events-none select-none"
                  style={{
                    transform: "rotate(12deg)",
                    filter: "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.15))",
                  }}
                  aria-hidden="true"
                >
                  📌
                </span>

                <p
                  className="text-ink mb-1"
                  style={{
                    fontFamily: '"Caveat", cursive',
                    fontSize: "1.35rem",
                    fontWeight: 700,
                  }}
                >
                  More quests in progress... 🎯
                </p>
                <p
                  className="text-ink-light"
                  style={{
                    fontFamily: '"Patrick Hand", cursive',
                    fontSize: "1.05rem",
                    lineHeight: 1.5,
                  }}
                >
                  Always grinding for new achievements.
                  <br />
                  Check back soon — or{" "}
                  <a
                    href="#contact"
                    className="relative inline-block"
                    style={{
                      color: "#e57373",
                      fontWeight: 600,
                    }}
                  >
                    <span className="relative z-10">start a co-op quest</span>
                    <span
                      className="absolute left-0 right-0 -bottom-0.5 h-[4px]"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8'%3E%3Cpath d='M0 4 Q10 0 20 4 Q30 8 40 4 Q50 0 60 4 Q70 8 80 4 Q90 0 100 4 Q110 8 120 4' fill='none' stroke='%23e57373' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "50px 5px",
                      }}
                    />
                  </a>
                  . 🤝
                </p>

                {/* Faint scribble lines */}
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

                {/* Tiny bottom-left peel */}
                <div
                  className="absolute bottom-0 left-0 w-4 h-4 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(315deg, #fff9c4 50%, rgba(0,0,0,0.05) 50%)",
                    borderTopRightRadius: "3px",
                  }}
                />
              </div>
            </m.div>
          </div>

          {/* Handwritten closing remark */}
          <p
            className="mt-6 text-center text-ink-faded"
            style={{
              fontFamily: '"Caveat", cursive',
              fontSize: "1.05rem",
              transform: "rotate(0.3deg)",
            }}
          >
            ~ {completedCount} side quests completed & counting ~
          </p>
        </div>
      </div>
    </section>
  );
}
