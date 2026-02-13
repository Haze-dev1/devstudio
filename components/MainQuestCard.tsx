"use client";

import { MainQuestExperience } from "@/types";
import { m } from "framer-motion";
import { DoodleStar, DoodleSparkle } from "./Doodles";

interface MainQuestCardProps {
  experience: MainQuestExperience;
}

export default function MainQuestCard({ experience }: MainQuestCardProps) {
  return (
    <div
      className="relative max-w-3xl mx-auto"
      style={{ transform: "rotate(-0.8deg)" }}
    >
      <m.div
        whileHover={{
          y: -6,
          rotate: 0,
          boxShadow: "8px 8px 0px #1a1a1a",
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        whileTap={{
          y: 2,
          x: 2,
          boxShadow: "2px 2px 0px #1a1a1a",
          transition: { duration: 0.1 },
        }}
        className="relative bg-white p-7 md:p-10"
        style={{
          border: "3px solid #1a1a1a",
          borderRadius: "4px",
          boxShadow: "5px 5px 0px #1a1a1a",
        }}
      >
        {/* ─── Tape strips ─── */}
        <div
          className="absolute -top-[12px] left-[10%] z-10 pointer-events-none"
          style={{
            background: "rgba(255, 255, 220, 0.65)",
            border: "1px solid rgba(200, 190, 150, 0.3)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            width: "80px",
            height: "28px",
            transform: "rotate(-6deg)",
          }}
        />
        <div
          className="absolute -top-[10px] right-[10%] z-10 pointer-events-none"
          style={{
            background: "rgba(255, 255, 220, 0.65)",
            border: "1px solid rgba(200, 190, 150, 0.3)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            width: "80px",
            height: "28px",
            transform: "rotate(8deg)",
          }}
        />

        {/* ─── Doodle decorations ─── */}
        <div
          className="absolute -top-4 -right-4 pointer-events-none select-none"
          aria-hidden="true"
        >
          <DoodleStar size={18} color="#ccc" filled delay={0} />
        </div>
        <div
          className="absolute -bottom-3 -left-4 pointer-events-none select-none"
          aria-hidden="true"
        >
          <DoodleSparkle size={14} color="#ddd" delay={0} />
        </div>
        <div
          className="absolute top-[40%] -right-5 pointer-events-none select-none hidden md:block"
          aria-hidden="true"
        >
          <DoodleStar size={12} color="#d8d4cc" delay={0} />
        </div>

        {/* ─── Faint ruled lines ─── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 27px, #4a4a4a 27px, #4a4a4a 28px)",
            backgroundSize: "100% 28px",
            borderRadius: "4px",
          }}
        />

        {/* ─── Color accent strip ─── */}
        <div
          className="h-[7px] rounded-sm mb-6"
          style={{
            backgroundColor: experience.stickyColor,
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        />

        {/* ─── Card content ─── */}
        <div className="relative z-[1]">
          {/* Emoji + Duration row */}
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span className="text-2xl select-none">{experience.emoji}</span>
            <span
              className="inline-block px-4 py-1"
              style={{
                fontFamily: '"Caveat", cursive',
                fontSize: "1rem",
                fontWeight: 600,
                color: "#4a4a4a",
                backgroundColor: experience.stickyColor,
                border: "1.5px dashed rgba(0,0,0,0.15)",
                borderRadius: "3px",
              }}
            >
              {experience.duration}
            </span>
          </div>

          {/* Role — strong title */}
          <h3
            className="text-ink leading-tight mb-1"
            style={{
              fontFamily: '"Caveat", cursive',
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              letterSpacing: "-0.01em",
            }}
          >
            {experience.role}
          </h3>

          {/* Organization */}
          <p className="mb-5">
            {experience.organizationUrl ? (
              <a
                href={experience.organizationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group"
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.25rem",
                  color: "#4a4a4a",
                }}
              >
                <span className="relative z-10">
                  @ {experience.organization}
                </span>
                {/* Wavy underline on hover */}
                <span
                  className="absolute left-0 right-0 -bottom-1 h-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8'%3E%3Cpath d='M0 4 Q10 0 20 4 Q30 8 40 4 Q50 0 60 4 Q70 8 80 4 Q90 0 100 4 Q110 8 120 4' fill='none' stroke='%231a1a1a' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "50px 5px",
                  }}
                />
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block ml-1 opacity-40 group-hover:opacity-70 transition-opacity -translate-y-0.5"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            ) : (
              <span
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.25rem",
                  color: "#4a4a4a",
                }}
              >
                @ {experience.organization}
              </span>
            )}
          </p>

          {/* ─── Impact bullet points ─── */}
          <ul className="space-y-3 mb-6">
            {experience.impactPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                {/* Hand-drawn bullet */}
                <span className="flex-shrink-0 mt-1">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 10 L8 15 L17 5"
                      stroke="#1a1a1a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span
                  className="text-ink-light"
                  style={{
                    fontFamily: '"Patrick Hand", cursive',
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  }}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* ─── Tech stack scribble tags ─── */}
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech, i) => (
              <m.span
                key={tech}
                whileHover={{
                  rotate: i % 2 === 0 ? -2 : 2,
                  scale: 1.06,
                  y: -1,
                }}
                className="inline-block px-3 py-0.5 cursor-default select-none"
                style={{
                  fontFamily: '"Caveat", cursive',
                  fontSize: "1rem",
                  fontWeight: 500,
                  border: "1.5px dashed #4a4a4a",
                  borderRadius: "4px",
                  color: "#4a4a4a",
                  backgroundColor:
                    i % 2 === 0
                      ? `${experience.stickyColor}88`
                      : "transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {tech}
              </m.span>
            ))}
          </div>
        </div>

        {/* ─── Dog-ear corner fold ─── */}
        <div
          className="absolute bottom-0 right-0 w-7 h-7 pointer-events-none"
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
