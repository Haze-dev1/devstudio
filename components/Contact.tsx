"use client";

import { m } from "framer-motion";
import { DoodleStar, DoodleSparkle, DoodleSquiggle } from "./Doodles";

const socials = [
  {
    name: "GitHub",
    emoji: "🐙",
    href: "https://github.com/Haze-dev1",
    stickyColor: "#e8f5e9",
    rotation: -2,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    emoji: "💼",
    href: "https://www.linkedin.com/in/devansh-palsapure/",
    stickyColor: "#e3f2fd",
    rotation: 1.5,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X",
    emoji: "🐦",
    href: "https://x.com/Haze_devp",
    stickyColor: "#f3e8ff",
    rotation: 2,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Mail",
    emoji: "✉️",
    href: "mailto:devanshpalsapure11@gmail.com",
    stickyColor: "#fff3e0",
    rotation: -1,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="collab" className="relative py-20 md:py-28 px-6">
      {/* Scattered doodle decorations */}
      <div
        className="absolute top-12 right-[10%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleStar size={18} color="#d0ccc4" filled delay={0} />
      </div>
      <div
        className="absolute bottom-20 left-[8%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleSparkle size={14} color="#d8d4cc" delay={0} />
      </div>
      <div
        className="absolute top-[40%] right-[5%] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <DoodleStar size={12} color="#ddd" delay={0} />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* ─── Section heading like a notebook chapter ─── */}
        <div className="text-center mb-10">
          {/* Chapter label */}
          <div
            className="inline-block mb-5 px-4 py-2"
            style={{
              backgroundColor: "#fce4ec",
              boxShadow: "3px 3px 8px rgba(0,0,0,0.1)",
              borderRadius: "2px",
              transform: "rotate(-2deg)",
            }}
          >
            <span
              className="text-ink-light"
              style={{
                fontFamily: '"Caveat", cursive',
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              📖 chapter 08 — let&apos;s team up
            </span>
          </div>

          <h2
            className="text-ink mb-4"
            style={{
              fontFamily: '"Caveat", cursive',
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            }}
          >
            Let&apos;s{" "}
            <span className="relative inline-block">
              Collab
              {/* Doodle circle around "Collab" */}
              <svg
                className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 5 C75 2, 98 12, 96 30 C94 48, 72 56, 50 56 C28 56, 6 48, 4 30 C2 12, 25 4, 48 7"
                  stroke="#e57373"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </span>{" "}
            🤝
          </h2>

          <p
            className="text-ink-light max-w-md mx-auto"
            style={{
              fontFamily: '"Patrick Hand", cursive',
              fontSize: "1.2rem",
              lineHeight: 1.6,
            }}
          >
            I&apos;m always up for chatting about new projects, creative
            experiments, or just nerding out over code. Scribble me a message!
          </p>

          {/* Squiggly separator */}
          <div className="mt-6 flex justify-center">
            <DoodleSquiggle width={100} color="#ccc" delay={0} />
          </div>
        </div>

        {/* ─── Social Links in Doodle Bubbles ─── */}
        <div className="flex items-center justify-center gap-5 md:gap-6 flex-wrap mb-10">
          {socials.map((social) => (
            <m.a
              key={social.name}
              href={social.href}
              target={social.name !== "Mail" ? "_blank" : undefined}
              rel={social.name !== "Mail" ? "noopener noreferrer" : undefined}
              className="group relative flex items-center gap-3 px-6 py-4"
              style={{
                backgroundColor: "white",
                border: "2.5px solid #1a1a1a",
                borderRadius: "20px",
                boxShadow: "3px 3px 0px #1a1a1a",
                transform: `rotate(${social.rotation}deg)`,
                transition: "all 0.2s ease",
              }}
              whileHover={{
                boxShadow: "6px 6px 0px #1a1a1a",
                y: -4,
                rotate: 0,
                backgroundColor: social.stickyColor,
              }}
              whileTap={{
                boxShadow: "1px 1px 0px #1a1a1a",
                y: 2,
                x: 2,
              }}
            >
              {/* Icon */}
              <span className="text-ink">{social.icon}</span>

              {/* Name */}
              <span
                className="text-ink"
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.15rem",
                }}
              >
                {social.name}
              </span>

              {/* Little arrow that appears on hover */}
              <svg
                width="16"
                height="10"
                viewBox="0 0 28 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-0 group-hover:opacity-60 -translate-x-1 group-hover:translate-x-0"
                style={{ transition: "all 0.2s ease" }}
              >
                <path
                  d="M1 6 C5 5, 10 7, 16 6 C18 5.5, 20 6, 22 6"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M19 2 L23 6 L19 10"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Tiny pushpin emoji */}
              <span
                className="absolute -top-3 right-3 text-sm pointer-events-none select-none"
                style={{ transform: "rotate(15deg)" }}
              >
                📌
              </span>
            </m.a>
          ))}
        </div>

        {/* ─── Email Code Block (scribbled code style) ─── */}
        <div className="flex justify-center mb-8">
          <m.div
            className="relative px-6 py-4 max-w-lg w-full"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.85rem",
              backgroundColor: "#f5f0e8",
              border: "2.5px solid #1a1a1a",
              borderRadius: "6px",
              boxShadow: "4px 4px 0px #1a1a1a",
              color: "#1a1a1a",
              transform: "rotate(-0.5deg)",
            }}
            whileHover={{
              rotate: 0,
              boxShadow: "6px 6px 0px #1a1a1a",
              y: -2,
            }}
            transition={{ duration: 0.2 }}
          >
            {/* Tape strip */}
            <div
              className="absolute -top-[10px] left-[20%] w-[70px] h-[24px] pointer-events-none z-10"
              style={{
                background: "rgba(255, 255, 220, 0.65)",
                border: "1px solid rgba(200, 190, 150, 0.3)",
                transform: "rotate(-5deg)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            />

            {/* Line 1: comment */}
            <div className="mb-1">
              <span style={{ color: "#999", fontStyle: "italic" }}>
                {"// reach out anytime! ✉️"}
              </span>
            </div>

            {/* Line 2: const email */}
            <div className="whitespace-nowrap">
              <span style={{ color: "#e57373", fontWeight: 500 }}>const</span>{" "}
              <span style={{ color: "#64b5f6", fontWeight: 500 }}>email</span>{" "}
              <span style={{ color: "#999" }}>=</span>{" "}
              <span style={{ color: "#81c784" }}>
                &quot;devanshpalsapure11@gmail.com&quot;
              </span>
              <span style={{ color: "#999" }}>;</span>
            </div>

            {/* Line 3: send */}
            <div className="mt-1">
              <span style={{ color: "#e57373", fontWeight: 500 }}>await</span>{" "}
              <span style={{ color: "#64b5f6", fontWeight: 500 }}>
                sendCollab
              </span>
              <span style={{ color: "#999" }}>(</span>
              <span style={{ color: "#81c784" }}>
                &quot;let&apos;s build!&quot;
              </span>
              <span style={{ color: "#999" }}>);</span>
            </div>

            {/* Dog-ear corner */}
            <div
              className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #f5f0e8 50%, #e0dbd3 50%)",
                borderTop: "1px solid #ccc",
                borderLeft: "1px solid #ccc",
              }}
            />
          </m.div>
        </div>

        {/* ─── Notebook closing doodle ─── */}
        <div className="text-center">
          {/* Sketched divider */}
          <div className="relative h-[2px] mb-6 mx-auto max-w-xs">
            <div
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 4'%3E%3Cpath d='M0 2 C20 0, 30 4, 50 2 C70 0, 80 4, 100 2 C120 0, 130 4, 150 2 C170 0, 180 4, 200 2' fill='none' stroke='%23d0ccc4' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-x",
                backgroundSize: "100px 4px",
              }}
            />
          </div>

          <p
            className="text-ink-faded"
            style={{
              fontFamily: '"Caveat", cursive',
              fontSize: "1.15rem",
            }}
          ></p>

          {/* Little stars at the bottom */}
          <div className="flex items-center justify-center gap-3 mt-3 opacity-40">
            <DoodleStar size={10} color="#ccc" filled delay={0} />
            <DoodleSparkle size={8} color="#ccc" delay={0} />
            <DoodleStar size={12} color="#ccc" delay={0} />
            <DoodleSparkle size={9} color="#ccc" delay={0} />
            <DoodleStar size={10} color="#ccc" filled delay={0} />
          </div>
        </div>
      </div>
    </section>
  );
}
