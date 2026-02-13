"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { allProjects } from "@/lib/projects";
import SketchCard from "@/components/SketchCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DoodleStar,
  DoodleSparkle,
  DoodleSquiggle,
  MarginDoodles,
} from "@/components/Doodles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <MarginDoodles />

      <main className="min-h-screen pt-28 pb-20 px-6 relative">
        {/* Scattered doodle decorations */}
        <div
          className="absolute top-32 right-[8%] pointer-events-none select-none hidden md:block"
          aria-hidden="true"
        >
          <DoodleStar size={20} color="#d0ccc4" filled delay={0.5} />
        </div>
        <div
          className="absolute top-[25%] left-[5%] pointer-events-none select-none hidden lg:block"
          aria-hidden="true"
        >
          <DoodleSparkle size={16} color="#ddd" delay={0.8} />
        </div>
        <div
          className="absolute top-[50%] right-[4%] pointer-events-none select-none hidden md:block"
          aria-hidden="true"
        >
          <DoodleStar size={14} color="#d8d4cc" delay={1.2} />
        </div>
        <div
          className="absolute top-[70%] left-[7%] pointer-events-none select-none hidden lg:block"
          aria-hidden="true"
        >
          <DoodleSparkle size={12} color="#d0ccc4" delay={1.5} />
        </div>
        <div
          className="absolute bottom-[20%] right-[10%] pointer-events-none select-none hidden md:block"
          aria-hidden="true"
        >
          <DoodleStar size={16} color="#ddd" filled delay={1.8} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* ─── Back Button (sketch style) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-10"
          >
            <Link
              href="/"
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
                el.style.transform = "translateY(-2px) rotate(-0.5deg)";
                el.style.backgroundColor = "#fff9c4";
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
                el.style.transform = "translateY(-2px) rotate(-0.5deg)";
                el.style.backgroundColor = "#fff9c4";
              }}
            >
              {/* Hand-drawn left arrow */}
              <svg
                width="22"
                height="12"
                viewBox="0 0 28 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 6 C23 7, 18 5, 12 6 C10 6.5, 8 6, 6 6"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M9 2 L5 6 L9 10"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to notebook
            </Link>
          </motion.div>

          {/* ─── Page Header (notebook chapter page) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            {/* Chapter sticky note */}
            <motion.div
              initial={{ opacity: 0, rotate: -5, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -2, scale: 1 }}
              transition={{
                delay: 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 150,
                damping: 12,
              }}
              className="inline-block mb-5 px-5 py-2.5"
              style={{
                backgroundColor: "#e3f2fd",
                boxShadow: "3px 3px 8px rgba(0,0,0,0.1)",
                borderRadius: "2px",
                transform: "rotate(-2deg)",
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
                📓 the full collection
              </span>
            </motion.div>

            {/* Page title */}
            <h1
              className="text-ink mb-4"
              style={{
                fontFamily: '"Caveat", cursive',
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                letterSpacing: "-0.01em",
              }}
            >
              All Projects <span className="inline-block">🗂️</span>
            </h1>

            {/* Wavy underline */}
            <div className="flex justify-center mb-5">
              <DoodleSquiggle width={160} color="#1a1a1a" delay={0.3} />
            </div>

            {/* Subtitle */}
            <p
              className="text-ink-light max-w-lg mx-auto"
              style={{
                fontFamily: '"Patrick Hand", cursive',
                fontSize: "1.2rem",
                lineHeight: 1.6,
              }}
            >
              Every page from my notebook — from weekend doodles to full-blown
              projects. Each one taught me something new. 🌱
            </p>

            {/* Stats bar (notebook-style) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
              className="mt-8 inline-flex items-center gap-4 px-6 py-3"
              style={{
                backgroundColor: "white",
                border: "2px solid #1a1a1a",
                borderRadius: "6px",
                boxShadow: "3px 3px 0px #1a1a1a",
              }}
            >
              <div className="flex items-center gap-2">
                {/* Hand-drawn bullet */}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  fill="#e57373"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                  />
                </svg>
                <span
                  className="text-ink-light"
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "0.8rem",
                  }}
                >
                  {allProjects.length} projects
                </span>
              </div>
              <div
                style={{
                  width: "1.5px",
                  height: "16px",
                  backgroundColor: "#ddd",
                }}
              />
              <div className="flex items-center gap-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  fill="#81c784"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                  />
                </svg>
                <span
                  className="text-ink-light"
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "0.8rem",
                  }}
                >
                  {allProjects.filter((p) => p.featured).length} featured
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── Torn paper edge before grid ─── */}
          <div
            className="w-full h-4 mb-8 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 16' preserveAspectRatio='none'%3E%3Cpath d='M0 0 L0 8 Q25 14, 50 8 Q75 2, 100 8 Q125 14, 150 8 Q175 2, 200 10 Q225 16, 250 8 Q275 2, 300 8 Q325 14, 350 8 Q375 2, 400 10 Q425 16, 450 8 Q475 2, 500 8 Q525 14, 550 8 Q575 2, 600 8 Q625 14, 650 8 Q675 2, 700 10 Q725 16, 750 8 Q775 2, 800 8 Q825 14, 850 8 Q875 2, 900 10 Q925 16, 950 8 Q975 2, 1000 8 Q1025 14, 1050 8 Q1075 2, 1100 10 Q1125 16, 1150 8 Q1175 2, 1200 8 L1200 0 Z' fill='%23f5f0e8'/%3E%3C/svg%3E")`,
              backgroundSize: "100% 16px",
              backgroundRepeat: "no-repeat",
              transform: "rotate(180deg)",
            }}
          />

          {/* ─── Project Grid (staggered notebook pages) ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12"
          >
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                id={project.slug}
                variants={itemVariants}
                style={{ scrollMarginTop: "6rem" }}
              >
                <SketchCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* ─── Torn paper edge after grid ─── */}
          <div
            className="w-full h-4 mt-8 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 16' preserveAspectRatio='none'%3E%3Cpath d='M0 16 L0 8 Q25 2, 50 8 Q75 14, 100 8 Q125 2, 150 8 Q175 14, 200 6 Q225 0, 250 8 Q275 14, 300 8 Q325 2, 350 8 Q375 14, 400 6 Q425 0, 450 8 Q475 14, 500 8 Q525 2, 550 8 Q575 14, 600 8 Q625 2, 650 8 Q675 14, 700 6 Q725 0, 750 8 Q775 14, 800 8 Q825 2, 850 8 Q875 14, 900 6 Q925 0, 950 8 Q975 14, 1000 8 Q1025 2, 1050 8 Q1075 14, 1100 6 Q1125 0, 1150 8 Q1175 14, 1200 8 L1200 16 Z' fill='%23f5f0e8'/%3E%3C/svg%3E")`,
              backgroundSize: "100% 16px",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* ─── "More coming soon" — Notebook-style note ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-16 flex justify-center"
          >
            <motion.div
              className="relative max-w-md w-full"
              whileHover={{
                rotate: 0,
                boxShadow: "6px 6px 0px #1a1a1a",
                y: -3,
              }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: "white",
                border: "2.5px solid #1a1a1a",
                borderRadius: "4px",
                boxShadow: "4px 4px 0px #1a1a1a",
                padding: "1.75rem 2rem",
                transform: "rotate(-0.5deg)",
              }}
            >
              {/* Tape strips */}
              <div
                className="absolute -top-[10px] left-[18%] w-[70px] h-[24px] z-10 pointer-events-none"
                style={{
                  background: "rgba(255, 255, 220, 0.65)",
                  border: "1px solid rgba(200, 190, 150, 0.3)",
                  transform: "rotate(-6deg)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
              />
              <div
                className="absolute -top-[8px] right-[15%] w-[65px] h-[24px] z-10 pointer-events-none"
                style={{
                  background: "rgba(255, 255, 220, 0.65)",
                  border: "1px solid rgba(200, 190, 150, 0.3)",
                  transform: "rotate(9deg)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
              />

              {/* Pushpin */}
              <span
                className="absolute -top-3 right-5 text-lg pointer-events-none select-none"
                style={{ transform: "rotate(15deg)" }}
              >
                📌
              </span>

              {/* Faint ruled lines */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(transparent, transparent 23px, #4a4a4a 23px, #4a4a4a 24px)",
                  backgroundSize: "100% 24px",
                  borderRadius: "4px",
                }}
              />

              <div className="relative z-[1] text-center">
                <p
                  className="text-ink mb-2"
                  style={{
                    fontFamily: '"Caveat", cursive',
                    fontSize: "1.5rem",
                    fontWeight: 700,
                  }}
                >
                  More pages coming soon! 🚧
                </p>
                <p
                  className="text-ink-light"
                  style={{
                    fontFamily: '"Patrick Hand", cursive',
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  }}
                >
                  I&apos;m always scribbling something new. Check back later or{" "}
                  <Link
                    href="/#contact"
                    className="relative inline-block"
                    style={{
                      color: "#e57373",
                      fontWeight: 600,
                    }}
                  >
                    <span className="relative z-10">get in touch</span>
                    {/* Wavy underline on the link */}
                    <span
                      className="absolute left-0 right-0 -bottom-1 h-[5px]"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8'%3E%3Cpath d='M0 4 Q10 0 20 4 Q30 8 40 4 Q50 0 60 4 Q70 8 80 4 Q90 0 100 4 Q110 8 120 4' fill='none' stroke='%23e57373' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "50px 5px",
                      }}
                    />
                  </Link>{" "}
                  if you want to collaborate. ✨
                </p>

                {/* Little doodle separator */}
                <div className="mt-4 flex justify-center opacity-40">
                  <DoodleSquiggle width={80} color="#999" delay={0.5} />
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
            </motion.div>
          </motion.div>

          {/* ─── Back Home Button at Bottom ─── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 cursor-pointer select-none no-underline"
              style={{
                fontFamily: '"Patrick Hand", cursive',
                fontSize: "1.15rem",
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
                el.style.backgroundColor = "#fff9c4";
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
                el.style.backgroundColor = "#fff9c4";
              }}
            >
              <svg
                width="18"
                height="12"
                viewBox="0 0 28 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 6 C23 7, 18 5, 12 6 C10 6.5, 8 6, 6 6"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M9 2 L5 6 L9 10"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Flip back to page one
            </Link>

            {/* Fun handwritten note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-4 text-ink-faded"
              style={{
                fontFamily: '"Caveat", cursive',
                fontSize: "1rem",
                transform: "rotate(-0.5deg)",
              }}
            >
              ← the adventure continues
            </motion.p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
