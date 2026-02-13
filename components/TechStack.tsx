"use client";

import { m } from "framer-motion";
import { DoodleStar, DoodleSparkle, DoodleSquiggle } from "./Doodles";

const skills = [
  { label: "Rust", color: "#e3f2fd", emoji: "🦀" },
  { label: "TypeScript", color: "#e8f5e9", emoji: "🔷" },
  { label: "C/ C++", color: "#fff9c4", emoji: "⚙️" },
  { label: "Python", color: "#fff3e0", emoji: "🐍" },
  { label: "HTML", color: "#fce4ec", emoji: "🌐" },
  { label: "CSS", color: "#ede7f6", emoji: "🎨" },
  { label: "JavaScript", color: "#fff3e0", emoji: "⚡" },
  { label: "MySQL", color: "#e8f5e9", emoji: "🗄️" },
  { label: "Anchor", color: "#f3e5f5", emoji: "⚓" },
  { label: "Soroban", color: "#e3f2fd", emoji: "🌟" },
];

const tiltValues = [0.6, -0.8, 1.1, -0.5, 0.9, -1.2, 0.4, -0.7, 1.0, -0.6];

export default function TechStack() {
  return (
    <section id="techstack" className="relative py-12 md:py-16 px-6">
      {/* Scattered doodle decorations */}
      <div
        className="absolute top-16 right-[10%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleStar size={16} color="#d8d4cc" filled delay={0} />
      </div>
      <div
        className="absolute bottom-24 left-[7%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleSparkle size={13} color="#d0ccc4" delay={0} />
      </div>
      <div
        className="absolute top-[45%] right-[5%] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <DoodleStar size={12} color="#ddd" delay={0} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
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
                backgroundColor: "#fff9c4",
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
                  transform: "translateX(-50%) rotate(-2deg)",
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
                chapter 03 — tools of the trade
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
            Tech Stack{" "}
            <m.span
              className="inline-block"
              animate={{ rotate: [0, 8, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 2,
              }}
            >
              ⚒️
            </m.span>
          </h2>

          {/* Wavy underline */}
          <div className="mb-5">
            <DoodleSquiggle width={150} color="#1a1a1a" delay={0} />
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
            The stuff I reach for every day — my trusty toolkit for turning
            ideas into <span className="marker-yellow">working pixels</span>. 🧰
          </p>
        </div>

        {/* ─── Main Card: Skill Tags ─── */}
        <div className="relative" style={{ transform: "rotate(0.5deg)" }}>
          <m.div
            className="relative bg-white p-8 md:p-10"
            style={{
              border: "2.5px solid #1a1a1a",
              borderRadius: "4px",
              boxShadow: "5px 5px 0px #1a1a1a",
            }}
            whileHover={{
              y: -3,
              boxShadow: "7px 7px 0px #1a1a1a",
              rotate: 0,
              transition: { duration: 0.2 },
            }}
          >
            {/* Tape strips */}
            <div
              className="absolute -top-[10px] left-[15%] w-[75px] h-[24px] z-10 pointer-events-none"
              style={{
                background: "rgba(255, 255, 220, 0.65)",
                border: "1px solid rgba(200, 190, 150, 0.3)",
                transform: "rotate(-7deg)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            />
            <div
              className="absolute -top-[8px] right-[13%] w-[70px] h-[24px] z-10 pointer-events-none"
              style={{
                background: "rgba(255, 255, 220, 0.65)",
                border: "1px solid rgba(200, 190, 150, 0.3)",
                transform: "rotate(9deg)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            />

            {/* Tiny doodle decorations */}
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

            {/* Faint ruled lines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06] z-0"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 27px, #4a4a4a 27px, #4a4a4a 28px)",
                backgroundSize: "100% 28px",
                borderRadius: "4px",
              }}
            />

            {/* Color accent strip */}
            <div
              className="h-[6px] rounded-sm mb-8"
              style={{
                backgroundColor: "#fff9c4",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            />

            {/* ─── Skill Tags Grid ─── */}
            <div className="relative z-[1]">
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, i) => (
                  <m.div
                    key={skill.label}
                    whileHover={{
                      rotate: tiltValues[i] > 0 ? -2 : 2,
                      scale: 1.08,
                      y: -3,
                      boxShadow: "4px 4px 0px #1a1a1a",
                    }}
                    className="relative inline-flex items-center gap-2 px-5 py-2.5 cursor-default select-none"
                    style={{
                      fontFamily: '"Caveat", cursive',
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      border: "2px solid #1a1a1a",
                      borderRadius: "6px",
                      color: "#1a1a1a",
                      backgroundColor: skill.color,
                      boxShadow: "3px 3px 0px #1a1a1a",
                      transform: `rotate(${tiltValues[i]}deg)`,
                      transition: "background-color 0.2s ease",
                    }}
                  >
                    <span className="text-base select-none">{skill.emoji}</span>
                    {skill.label}
                  </m.div>
                ))}
              </div>
            </div>

            {/* Dog-ear corner fold */}
            <div
              className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, white 50%, #e8e4dc 50%)",
                borderTop: "1px solid #ccc",
                borderLeft: "1px solid #ccc",
              }}
            />
          </m.div>
        </div>

        {/* ─── Fun checklist below ─── */}
        <div className="mt-12 max-w-sm mx-auto">
          <div
            className="space-y-2"
            style={{
              fontFamily: '"Caveat", cursive',
              fontSize: "1.15rem",
              color: "#4a4a4a",
            }}
          >
            {[
              { text: "Thinks in systems", checked: true },
              { text: "Makes weird ideas work", checked: true },
              { text: "Gets enough sleep", checked: false },
              { text: "Drinks too much coffee ☕", checked: true },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                {/* Hand-drawn checkbox */}
                <svg
                  width="20"
                  height="20"
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
                  {item.checked && (
                    <path
                      d="M7 12.5 L10.5 16 L17 8"
                      stroke="#1a1a1a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </svg>

                <span
                  style={{
                    textDecoration: !item.checked ? "line-through" : "none",
                    textDecorationStyle: !item.checked ? "wavy" : undefined,
                    textDecorationColor: !item.checked ? "#e57373" : undefined,
                    opacity: !item.checked ? 0.6 : 1,
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
