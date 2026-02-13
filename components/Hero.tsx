"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  DoodleStar,
  DoodleSparkle,
  DoodleArrow,
  DoodleSquiggle,
} from "./Doodles";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden px-6 md:px-12 lg:px-20 pt-20">
      {/* Scattered notebook doodles in background */}
      <div
        className="absolute top-24 right-[12%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleStar size={22} color="#d0ccc4" filled delay={0} />
      </div>
      <div
        className="absolute top-[60%] left-[8%] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <DoodleSparkle size={16} color="#d0ccc4" delay={0} />
      </div>
      <div
        className="absolute bottom-32 right-[20%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleStar size={14} color="#ddd" delay={0} />
      </div>
      <div
        className="absolute top-36 left-[45%] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <DoodleSparkle size={13} color="#d8d4cc" delay={0} />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 py-12">
        {/* ─── Left: Text Content ─── */}
        <div className="flex-1 max-w-xl">
          <div className="space-y-6">
            {/* Sticky-note intro */}
            <div className="inline-block">
              <m.div
                className="relative inline-block px-5 py-3"
                style={{
                  backgroundColor: "#fff9c4",
                  boxShadow: "3px 3px 8px rgba(0,0,0,0.12)",
                  borderRadius: "2px",
                  transform: "rotate(-1.5deg)",
                }}
                whileHover={{
                  rotate: 0,
                  boxShadow: "5px 5px 12px rgba(0,0,0,0.18)",
                  y: -2,
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Tape on sticky note */}
                <div
                  className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-[60px] h-[22px] pointer-events-none z-10"
                  style={{
                    background: "rgba(255, 255, 220, 0.65)",
                    border: "1px solid rgba(200, 190, 150, 0.3)",
                    transform: "translateX(-50%) rotate(1deg)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  }}
                />
                <span
                  className="text-ink text-xl md:text-2xl"
                  style={{
                    fontFamily: '"Caveat", cursive',
                    fontWeight: 600,
                  }}
                >
                  Hey, I&apos;m Devansh 👋
                </span>
              </m.div>
            </div>

            {/* Big heading */}
            <div>
              <h1
                className="text-ink leading-[1.05] tracking-tight"
                style={{
                  fontFamily: '"Caveat", cursive',
                  fontWeight: 700,
                  fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
                }}
              >
                Creative Dev
                <br />& Builder{" "}
                <m.span
                  className="inline-block"
                  animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                >
                  🚀
                </m.span>
              </h1>

              {/* Wavy underline under heading */}
              <div className="mt-1 ml-1">
                <DoodleSquiggle width={180} color="#1a1a1a" delay={0} />
              </div>
            </div>

            {/* Description */}
            <p
              className="text-ink-light max-w-md leading-relaxed"
              style={{
                fontFamily: '"Patrick Hand", cursive',
                fontSize: "1.25rem",
              }}
            >
              I build the things I Wish existed. Practical. Experimental.
              Ocassionaly a little too ambitious. This is my notebook — come
              flip through it.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              {/* Primary: See My Work */}
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 cursor-pointer select-none no-underline"
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.2rem",
                  backgroundColor: "#1a1a1a",
                  color: "#fdfcf8",
                  border: "2.5px solid #1a1a1a",
                  borderRadius: "6px",
                  boxShadow: "4px 4px 0px #1a1a1a",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "6px 6px 0px #1a1a1a";
                  el.style.transform = "translateY(-3px) rotate(-0.5deg)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "4px 4px 0px #1a1a1a";
                  el.style.transform = "translateY(0) rotate(0)";
                }}
                onMouseDown={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "1px 1px 0px #1a1a1a";
                  el.style.transform = "translate(2px, 2px)";
                }}
                onMouseUp={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "6px 6px 0px #1a1a1a";
                  el.style.transform = "translateY(-3px) rotate(-0.5deg)";
                }}
              >
                See My Work
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 28 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10 C6 8, 10 12, 14 7 C16 5, 20 6, 22 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 3 L23 7 L19 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              {/* Secondary: Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 cursor-pointer select-none no-underline"
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.2rem",
                  backgroundColor: "#fdfcf8",
                  color: "#1a1a1a",
                  border: "2.5px solid #1a1a1a",
                  borderRadius: "6px",
                  boxShadow: "4px 4px 0px #1a1a1a",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "6px 6px 0px #1a1a1a";
                  el.style.transform = "translateY(-3px) rotate(0.5deg)";
                  el.style.backgroundColor = "#fff9c4";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "4px 4px 0px #1a1a1a";
                  el.style.transform = "translateY(0) rotate(0)";
                  el.style.backgroundColor = "#fdfcf8";
                }}
                onMouseDown={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "1px 1px 0px #1a1a1a";
                  el.style.transform = "translate(2px, 2px)";
                }}
                onMouseUp={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "6px 6px 0px #1a1a1a";
                  el.style.transform = "translateY(-3px) rotate(0.5deg)";
                  el.style.backgroundColor = "#fff9c4";
                }}
              >
                Resume 📄
              </a>
            </div>

            {/* Doodle arrow pointing to cards */}
            <div className="hidden lg:block ml-[60%] -mt-2">
              <DoodleArrow
                direction="curve-right"
                size={50}
                color="#b8b8b8"
                delay={0}
              />
            </div>
          </div>
        </div>

        {/* ─── Right: Sketch-Frame Avatar Card ─── */}
        <div className="flex-shrink-0">
          <div className="relative">
            {/* Floating doodle decorations around the card */}
            <m.div
              className="absolute -top-8 -right-6 pointer-events-none"
              animate={{ y: [-3, 3, -3], rotate: [0, 8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <DoodleStar size={26} color="#1a1a1a" delay={0} />
            </m.div>

            <div className="absolute -bottom-6 -left-5 pointer-events-none">
              <DoodleSparkle size={20} color="#999" delay={0} />
            </div>

            <div className="absolute top-1/2 -right-10 pointer-events-none">
              <span className="text-xl select-none">⚡</span>
            </div>

            <div className="absolute -top-5 -left-8 pointer-events-none">
              <span className="text-2xl select-none">✨</span>
            </div>

            {/* ─── Main Avatar Card (sketch frame) ─── */}
            <m.div
              className="relative w-[260px] h-[310px] md:w-[280px] md:h-[340px] flex flex-col items-center justify-center gap-4 overflow-hidden"
              style={{
                backgroundColor: "white",
                border: "3px solid #1a1a1a",
                borderRadius: "6px",
                boxShadow: "6px 6px 0px #1a1a1a",
                transform: "rotate(2deg)",
              }}
              whileHover={{
                rotate: 0,
                boxShadow: "8px 8px 0px #1a1a1a",
                y: -3,
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Tape strips holding the card */}
              <div
                className="absolute -top-[10px] left-[15%] w-[65px] h-[24px] z-20 pointer-events-none"
                style={{
                  background: "rgba(255, 255, 220, 0.65)",
                  border: "1px solid rgba(200, 190, 150, 0.3)",
                  transform: "rotate(-12deg)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
              />
              <div
                className="absolute -top-[8px] right-[12%] w-[65px] h-[24px] z-20 pointer-events-none"
                style={{
                  background: "rgba(255, 255, 220, 0.65)",
                  border: "1px solid rgba(200, 190, 150, 0.3)",
                  transform: "rotate(8deg)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
              />

              {/* Faint notebook lines inside the card */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.07] z-0"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(transparent, transparent 23px, #4a4a4a 23px, #4a4a4a 24px)",
                  backgroundSize: "100% 24px",
                }}
              />

              {/* Avatar circle */}
              <div className="relative z-10">
                <div
                  className="w-28 h-28 md:w-32 md:h-32 overflow-hidden"
                  style={{
                    border: "3px solid #1a1a1a",
                    borderRadius: "50%",
                    boxShadow: "3px 3px 0px #1a1a1a",
                  }}
                >
                  <Image
                    src="/pfp.jpeg"
                    alt="Devansh"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Hand-drawn circle around avatar */}
                <svg
                  className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none opacity-20"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 5 C72 3, 95 20, 95 48 C95 76, 75 97, 50 97 C25 97, 5 78, 5 50 C5 22, 25 5, 48 7"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Name */}
              <div className="relative z-10 text-center">
                <h3
                  className="text-2xl text-ink"
                  style={{
                    fontFamily: '"Caveat", cursive',
                    fontWeight: 700,
                  }}
                >
                  Haze
                </h3>
                <p
                  className="text-sm text-ink-faded mt-0.5"
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "0.8rem",
                  }}
                >
                  @Haze_dev
                </p>
              </div>

              {/* Status badge (hand-drawn style) */}
              <div className="relative z-10">
                <div
                  className="flex items-center gap-2 px-4 py-1.5"
                  style={{
                    backgroundColor: "#e8f5e9",
                    border: "1.5px dashed #81c784",
                    borderRadius: "4px",
                  }}
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span
                    className="text-sm text-ink-light"
                    style={{
                      fontFamily: '"Patrick Hand", cursive',
                    }}
                  >
                    Open to work
                  </span>
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
        </div>
      </div>
    </section>
  );
}
