"use client";

import { Project } from "@/types";
import { m } from "framer-motion";
import { DoodleStar, DoodleSparkle } from "./Doodles";

interface SketchCardProps {
  project: Project;
  index?: number;
  tilt?: number;
}

const tiltValues = [-1.2, 0.8, -0.6, 1.1, -0.9, 0.5];

export default function SketchCard({
  project,
  index = 0,
  tilt,
}: SketchCardProps) {
  const rotation = tilt ?? tiltValues[index % tiltValues.length];

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
        className="relative bg-white p-6 md:p-8"
        style={{
          border: "2.5px solid #1a1a1a",
          borderRadius: "4px",
          boxShadow: "4px 4px 0px #1a1a1a",
        }}
      >
        {/* ─── Tape strips holding the card down ─── */}
        <div
          className="absolute -top-[10px] left-[12%] w-[70px] h-[26px] z-10 pointer-events-none"
          style={{
            background: "rgba(255, 255, 220, 0.65)",
            border: "1px solid rgba(200, 190, 150, 0.3)",
            transform: "rotate(-8deg)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        />
        <div
          className="absolute -top-[8px] right-[12%] w-[70px] h-[26px] z-10 pointer-events-none"
          style={{
            background: "rgba(255, 255, 220, 0.65)",
            border: "1px solid rgba(200, 190, 150, 0.3)",
            transform: "rotate(10deg)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        />

        {/* ─── Tiny notebook doodle decorations ─── */}
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

        {/* ─── Color accent strip (like marker highlighting the top) ─── */}
        <div
          className="h-2 rounded-sm mb-5"
          style={{
            backgroundColor: project.color,
            border: `1px solid ${project.borderColor}`,
          }}
        />

        {/* ─── Faint ruled lines behind the card content ─── */}
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

        {/* ─── Card Content ─── */}
        <div className="relative z-[1]">
          {/* Title */}
          <h3
            className="font-hand font-bold text-2xl md:text-3xl text-ink mb-2 leading-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="font-body text-ink-light text-sketch-base leading-relaxed mb-5">
            {project.description}
          </p>

          {/* ─── Tech Stack Scribble Tags ─── */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, i) => (
              <m.span
                key={tech}
                whileHover={{
                  rotate: Math.random() > 0.5 ? -2 : 2,
                  scale: 1.05,
                }}
                className="inline-block px-3 py-0.5"
                style={{
                  fontFamily: '"Caveat", cursive',
                  fontSize: "1rem",
                  fontWeight: 500,
                  border: "1.5px dashed #4a4a4a",
                  borderRadius: "4px",
                  color: "#4a4a4a",
                  backgroundColor:
                    i % 2 === 0 ? `${project.color}44` : "transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {tech}
              </m.span>
            ))}
          </div>

          {/* ─── Actions ─── */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* GitHub — primary sketch button */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 cursor-pointer select-none no-underline"
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.1rem",
                  backgroundColor: "#1a1a1a",
                  color: "#fdfcf8",
                  border: "2.5px solid #1a1a1a",
                  borderRadius: "6px",
                  boxShadow: "3px 3px 0px #1a1a1a",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "5px 5px 0px #1a1a1a";
                  el.style.transform = "translateY(-2px) rotate(-0.5deg)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "3px 3px 0px #1a1a1a";
                  el.style.transform = "translateY(0) rotate(0)";
                }}
                onMouseDown={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "1px 1px 0px #1a1a1a";
                  el.style.transform = "translate(1px, 1px)";
                }}
                onMouseUp={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "5px 5px 0px #1a1a1a";
                  el.style.transform = "translateY(-2px) rotate(-0.5deg)";
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}

            {/* Link button */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 cursor-pointer select-none no-underline"
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.1rem",
                  backgroundColor: "#fdfcf8",
                  color: "#1a1a1a",
                  border: "2.5px solid #1a1a1a",
                  borderRadius: "6px",
                  boxShadow: "3px 3px 0px #1a1a1a",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "5px 5px 0px #1a1a1a";
                  el.style.transform = "translateY(-2px) rotate(0.5deg)";
                  el.style.backgroundColor = "#e8f5e9";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "3px 3px 0px #1a1a1a";
                  el.style.transform = "translateY(0) rotate(0)";
                  el.style.backgroundColor = "#fdfcf8";
                }}
                onMouseDown={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "1px 1px 0px #1a1a1a";
                  el.style.transform = "translate(1px, 1px)";
                }}
                onMouseUp={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "5px 5px 0px #1a1a1a";
                  el.style.transform = "translateY(-2px) rotate(0.5deg)";
                  el.style.backgroundColor = "#e8f5e9";
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Link
              </a>
            )}
          </div>
        </div>

        {/* ─── Corner dog-ear fold effect ─── */}
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
  );
}
