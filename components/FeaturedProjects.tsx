"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { featuredProjects } from "@/lib/projects";
import SketchCard from "./SketchCard";
import { DoodleStar, DoodleSparkle, DoodleSquiggle } from "./Doodles";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-16 md:py-20 px-6">
      {/* Scattered doodle decorations */}
      <div
        className="absolute top-16 right-[8%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleStar size={18} color="#d0ccc4" filled delay={0} />
      </div>
      <div
        className="absolute top-28 right-[12%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleSparkle size={12} color="#ddd" delay={0} />
      </div>
      <div
        className="absolute bottom-40 left-[6%] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <DoodleStar size={14} color="#d8d4cc" delay={0} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* ─── Section Header (notebook chapter style) ─── */}
        <div className="mb-10">
          {/* Chapter number sticky note */}
          <m.div
            className="inline-block mb-5"
            whileHover={{ rotate: 0, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="relative px-4 py-2"
              style={{
                backgroundColor: "#e3f2fd",
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
                chapter 01 — selected work
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
            Things I&apos;ve Built <span className="inline-block">🛠️</span>
          </h2>

          {/* Wavy underline */}
          <div className="mb-5">
            <DoodleSquiggle width={150} color="#1a1a1a" delay={0} />
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
            A few pages from my notebook — passion projects, experiments, and
            real tools. All made with care{" "}
            <span className="scratched">
              and questionable amounts of coffee
            </span>{" "}
            ☕
          </p>
        </div>

        {/* ─── Project Cards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {featuredProjects.map((project, index) => (
            <div key={project.id}>
              <SketchCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* ─── Doodle separator ─── */}
        <div
          className="my-12 flex items-center justify-center gap-3"
          aria-hidden="true"
        >
          <div
            className="flex-1 max-w-[120px] h-[2px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 4'%3E%3Cpath d='M0 2 C20 0, 30 4, 50 2 C70 0, 80 4, 100 2 C120 0, 130 4, 150 2 C170 0, 180 4, 200 2' fill='none' stroke='%23ccc' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "100px 4px",
            }}
          />
          <DoodleStar size={14} color="#ccc" delay={0} />
          <div
            className="flex-1 max-w-[120px] h-[2px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 4'%3E%3Cpath d='M0 2 C20 0, 30 4, 50 2 C70 0, 80 4, 100 2 C120 0, 130 4, 150 2 C170 0, 180 4, 200 2' fill='none' stroke='%23ccc' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "100px 4px",
            }}
          />
        </div>

        {/* ─── "See the full notebook" Button ─── */}
        <div className="text-center">
          <Link
            href="/projects"
            className="relative inline-flex items-center gap-3 px-8 py-4 cursor-pointer select-none group no-underline"
            style={{
              fontFamily: '"Patrick Hand", cursive',
              fontSize: "1.3rem",
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
              el.style.transform = "translateY(-3px) rotate(-0.5deg)";
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
              el.style.transform = "translateY(-3px) rotate(-0.5deg)";
              el.style.backgroundColor = "#fff9c4";
            }}
          >
            {/* Pushpin emoji */}
            <span className="text-lg">📌</span>
            See the full notebook
            {/* Hand-drawn arrow */}
            <svg
              width="28"
              height="14"
              viewBox="0 0 32 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M2 7 C6 5, 10 9, 14 7 C18 5, 22 8, 25 7"
                stroke="#1a1a1a"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M22 3 L27 7 L22 11"
                stroke="#1a1a1a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Little doodle star that appears on hover */}
            <span className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <DoodleSparkle size={14} color="#1a1a1a" delay={0} />
            </span>
          </Link>

          {/* Handwritten note below the button */}
          <p
            className="mt-5 text-ink-faded"
            style={{
              fontFamily: '"Caveat", cursive',
              fontSize: "1.05rem",
              transform: "rotate(-0.5deg)",
            }}
          >
            ↑ there&apos;s more where that came from ↑
          </p>
        </div>
      </div>
    </section>
  );
}
