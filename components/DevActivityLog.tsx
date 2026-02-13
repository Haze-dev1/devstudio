"use client";

import { useState, useEffect } from "react";
import { m } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { DoodleStar, DoodleSparkle, DoodleSquiggle } from "./Doodles";

export default function DevActivityLog() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="devlog" className="relative py-12 md:py-16 px-6">
      {/* Scattered doodle decorations */}
      <div
        className="absolute top-14 right-[10%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleStar size={14} color="#d8d4cc" delay={0} />
      </div>
      <div
        className="absolute bottom-20 left-[7%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleSparkle size={12} color="#d0ccc4" delay={0} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* ─── Section Header (notebook chapter style) ─── */}
        <div className="mb-8">
          {/* Chapter sticky note */}
          <m.div
            className="inline-block mb-5"
            whileHover={{ rotate: 0, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="relative px-4 py-2"
              style={{
                backgroundColor: "#e8f5e9",
                boxShadow: "3px 3px 8px rgba(0,0,0,0.1)",
                borderRadius: "2px",
                transform: "rotate(-1deg)",
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
                chapter 05 — the green graph
              </span>
            </div>
          </m.div>

          {/* Main heading */}
          <h2
            className="text-ink leading-tight mb-3"
            style={{
              fontFamily: '"Caveat", cursive',
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            }}
          >
            Dev Activity Log <span className="inline-block">📊</span>
          </h2>

          {/* Wavy underline */}
          <div className="mb-4">
            <DoodleSquiggle width={140} color="#1a1a1a" delay={0} />
          </div>

          {/* Subtitle */}
          <p
            className="text-ink-light max-w-md"
            style={{
              fontFamily: '"Patrick Hand", cursive',
              fontSize: "1.1rem",
              lineHeight: 1.5,
            }}
          >
            {" "}
          </p>
        </div>

        {/* ─── Contribution Graph Card ─── */}
        <div className="relative" style={{ transform: "rotate(-0.3deg)" }}>
          <m.div
            className="relative bg-white p-5 md:p-7 overflow-hidden"
            style={{
              border: "2px solid #1a1a1a",
              borderRadius: "4px",
              boxShadow: "4px 4px 0px #1a1a1a",
            }}
            whileHover={{
              y: -2,
              boxShadow: "6px 6px 0px #1a1a1a",
              transition: { duration: 0.2 },
            }}
          >
            {/* Tape strip */}
            <div
              className="absolute -top-[10px] left-[18%] w-[65px] h-[22px] z-10 pointer-events-none"
              style={{
                background: "rgba(255, 255, 220, 0.65)",
                border: "1px solid rgba(200, 190, 150, 0.3)",
                transform: "rotate(-5deg)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            />

            {/* Faint graph paper lines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 13px, #4a4a4a 13px, #4a4a4a 14px), repeating-linear-gradient(90deg, transparent, transparent 13px, #4a4a4a 13px, #4a4a4a 14px)",
                backgroundSize: "14px 14px",
                borderRadius: "4px",
              }}
            />

            <div className="relative z-[1]">
              {/* Header row */}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  {/* GitHub icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#1a1a1a"
                    className="flex-shrink-0"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span
                    style={{
                      fontFamily: '"Caveat", cursive',
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#1a1a1a",
                    }}
                  >
                    @Haze-dev1 on GitHub
                  </span>
                </div>

                <a
                  href="https://github.com/Haze-dev1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5"
                  style={{
                    fontFamily: '"Patrick Hand", cursive',
                    fontSize: "0.95rem",
                    color: "#4a4a4a",
                  }}
                >
                  <span className="relative">
                    View on GitHub
                    <span
                      className="absolute left-0 right-0 -bottom-0.5 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8'%3E%3Cpath d='M0 4 Q10 0 20 4 Q30 8 40 4 Q50 0 60 4 Q70 8 80 4 Q90 0 100 4 Q110 8 120 4' fill='none' stroke='%231a1a1a' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "50px 5px",
                      }}
                    />
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-40 group-hover:opacity-70 transition-opacity"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>

              {/* ─── Real GitHub Contribution Calendar ─── */}
              <a
                href="https://github.com/Haze-dev1"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-x-auto pb-2 cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                {mounted ? (
                  <GitHubCalendar
                    username="Haze-dev1"
                    colorScheme="light"
                    blockSize={11}
                    blockMargin={2}
                    blockRadius={2}
                    fontSize={11}
                    showColorLegend={false}
                    showTotalCount={false}
                    labels={{
                      totalCount: "{{count}} contributions in the last year",
                    }}
                    theme={{
                      light: [
                        "#ebedf0",
                        "#9be9a8",
                        "#40c463",
                        "#30a14e",
                        "#216e39",
                      ],
                    }}
                    style={{
                      width: "100%",
                      fontFamily: '"JetBrains Mono", monospace',
                      color: "#8a8a8a",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      height: "128px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: '"Patrick Hand", cursive',
                      fontSize: "1rem",
                      color: "#8a8a8a",
                    }}
                  >
                    Loading contributions…
                  </div>
                )}
              </a>

              {/* ─── Legend ─── */}
              <div className="flex items-center justify-end gap-2 mt-3">
                <span
                  style={{
                    fontFamily: '"Patrick Hand", cursive',
                    fontSize: "0.85rem",
                    color: "#8a8a8a",
                  }}
                >
                  Less
                </span>
                {["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className="rounded-[2px]"
                      style={{
                        width: "11px",
                        height: "11px",
                        backgroundColor: color,
                        border:
                          i === 0
                            ? "1px solid #d0d7de"
                            : "1px solid rgba(27,31,36,0.06)",
                      }}
                    />
                  ),
                )}
                <span
                  style={{
                    fontFamily: '"Patrick Hand", cursive',
                    fontSize: "0.85rem",
                    color: "#8a8a8a",
                  }}
                >
                  More
                </span>
              </div>
            </div>

            {/* Dog-ear corner fold */}
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

        {/* ─── Handwritten note below ─── */}
        <p
          className="mt-6 text-center text-ink-faded"
          style={{
            fontFamily: '"Caveat", cursive',
            fontSize: "1rem",
            transform: "rotate(-0.3deg)",
          }}
        >
          some days are greener than others — but the streak lives on 🌱
        </p>
      </div>
    </section>
  );
}
