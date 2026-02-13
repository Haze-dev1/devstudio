"use client";

import { m } from "framer-motion";
import { DoodleStar, DoodleSparkle, DoodleSquiggle } from "./Doodles";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-10 overflow-hidden">
      {/* Torn paper edge effect at top */}
      <div
        className="w-full h-4 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 16' preserveAspectRatio='none'%3E%3Cpath d='M0 16 L0 8 Q25 2, 50 8 Q75 14, 100 8 Q125 2, 150 8 Q175 14, 200 6 Q225 0, 250 8 Q275 14, 300 8 Q325 2, 350 8 Q375 14, 400 6 Q425 0, 450 8 Q475 14, 500 8 Q525 2, 550 8 Q575 14, 600 8 Q625 2, 650 8 Q675 14, 700 6 Q725 0, 750 8 Q775 14, 800 8 Q825 2, 850 8 Q875 14, 900 6 Q925 0, 950 8 Q975 14, 1000 8 Q1025 2, 1050 8 Q1075 14, 1100 6 Q1125 0, 1150 8 Q1175 14, 1200 8 L1200 16 Z' fill='%23f5f0e8'/%3E%3C/svg%3E")`,
          backgroundSize: "100% 16px",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="relative py-10 px-6"
        style={{
          backgroundColor: "#f5f0e8",
          borderTop: "2px solid #e0dbd3",
        }}
      >
        {/* Faint ruled lines in footer */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 23px, #4a4a4a 23px, #4a4a4a 24px)",
            backgroundSize: "100% 24px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left — Branding */}
            <div className="flex items-center gap-3">
              <span
                className="text-xl text-ink"
                style={{
                  fontFamily: '"Caveat", cursive',
                  fontWeight: 700,
                }}
              >
                Devansh ✏️
              </span>
              <span
                className="text-ink-faded text-sm hidden sm:inline"
                style={{ fontFamily: '"Patrick Hand", cursive' }}
              >
                · a developer&apos;s sketchbook
              </span>
            </div>

            {/* Center — Built with love */}
            <div className="flex items-center gap-2">
              <span
                className="text-ink-light"
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.05rem",
                }}
              >
                scribbled with
              </span>
              <m.span
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  repeatDelay: 1.5,
                }}
                className="inline-block text-lg"
              >
                💛
              </m.span>
              <span
                className="text-ink-light"
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.05rem",
                }}
              >
                and too much ☕
              </span>
            </div>

            {/* Right — Copyright */}
            <p
              className="text-ink-faded"
              style={{
                fontFamily: '"Caveat", cursive',
                fontSize: "1.05rem",
              }}
            >
              © {currentYear} Devansh
            </p>
          </div>

          {/* Bottom row — tech stack and doodles */}
          <div className="mt-6 flex flex-col items-center gap-3">
            {/* Sketched divider */}
            <div className="w-48 flex justify-center">
              <DoodleSquiggle width={140} color="#ccc8c0" delay={0} />
            </div>
          </div>

          {/* Fun little notebook closing note */}
          <p
            className="mt-2"
            style={{
              fontFamily: '"Caveat", cursive',
              fontSize: "0.95rem",
              color: "#b8b8b8",
              transform: "rotate(-0.5deg)",
            }}
          >
            ~ end of notebook (for now) ~
          </p>
        </div>
      </div>
    </footer>
  );
}
