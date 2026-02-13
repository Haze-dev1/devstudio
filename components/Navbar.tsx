"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { DoodleStar, DoodleSparkle } from "./Doodles";

const navLinks = [
  { label: "Projects", href: "#projects", doodle: "📂" },
  { label: "Journey", href: "#mainquest", doodle: "📖" },
  { label: "About", href: "#about", doodle: "📝" },
  { label: "Quests", href: "#achievements", doodle: "🏆" },
  { label: "Collab", href: "#collab", doodle: "🤝" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <m.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#fdfcf8]/90 backdrop-blur-md" : "bg-transparent"
      }`}
      style={{
        borderBottom: scrolled
          ? "2.5px solid #1a1a1a"
          : "2.5px solid transparent",
        boxShadow: scrolled ? "0 3px 0px #1a1a1a" : "none",
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* ─── Logo / Brand ─── */}
        <Link href="/" className="group relative">
          <m.div
            className="flex items-center gap-1.5"
            whileHover={{
              rotate: [-1, 1, -1, 0],
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className="text-2xl md:text-[1.7rem] text-ink leading-none"
              style={{
                fontFamily: '"Caveat", cursive',
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Devansh Palsapure
            </span>
            <m.span
              className="text-lg"
              animate={{ rotate: [0, 8, -5, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            >
              ✏️
            </m.span>

            {/* Scribble underline on hover */}
            <span
              className="absolute -bottom-1 left-0 right-0 h-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8'%3E%3Cpath d='M0 4 Q10 0 20 4 Q30 8 40 4 Q50 0 60 4 Q70 8 80 4 Q90 0 100 4 Q110 8 120 4' fill='none' stroke='%231a1a1a' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-x",
                backgroundSize: "60px 6px",
              }}
            />
          </m.div>
        </Link>

        {/* ─── Desktop Nav Links ─── */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="group relative px-4 py-2 rounded-md transition-all duration-200 hover:bg-sticky-yellow/60"
              >
                <span
                  className="text-lg text-ink-light group-hover:text-ink transition-colors duration-200"
                  style={{
                    fontFamily: '"Patrick Hand", cursive',
                  }}
                >
                  {link.label}
                </span>

                {/* Doodle underline on hover */}
                <span
                  className="absolute bottom-0.5 left-3 right-3 h-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8'%3E%3Cpath d='M0 4 Q10 1 20 4 Q30 7 40 4 Q50 1 60 4 Q70 7 80 4 Q90 1 100 4 Q110 7 120 4' fill='none' stroke='%231a1a1a' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "50px 5px",
                  }}
                />

                {/* Tiny decoration that appears on hover */}
                <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {i % 2 === 0 && (
                    <DoodleSparkle size={10} color="#ccc" delay={0} />
                  )}
                  {i % 2 === 1 && (
                    <DoodleStar size={10} color="#ccc" delay={0} />
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* ─── Mobile Menu Button (sketch-style hamburger) ─── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-md transition-colors duration-200 hover:bg-sticky-yellow/40"
          style={{
            border: "2px solid #1a1a1a",
            borderRadius: "6px",
            boxShadow: mobileOpen
              ? "1px 1px 0px #1a1a1a"
              : "2px 2px 0px #1a1a1a",
            transform: mobileOpen ? "translate(1px, 1px)" : "translate(0, 0)",
            transition: "all 0.15s ease",
          }}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-[5px] items-center w-5">
            <m.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 7, width: "100%" }
                  : { rotate: 0, y: 0, width: "100%" }
              }
              transition={{ duration: 0.2 }}
              className="block h-[2.5px] bg-ink rounded-full origin-center"
              style={{ width: "100%" }}
            />
            <m.span
              animate={
                mobileOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
              className="block w-full h-[2.5px] bg-ink rounded-full"
            />
            <m.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -7, width: "100%" }
                  : { rotate: 0, y: 0, width: "80%" }
              }
              transition={{ duration: 0.2 }}
              className="block h-[2.5px] bg-ink rounded-full origin-center self-start"
              style={{ width: mobileOpen ? "100%" : "80%" }}
            />
          </div>
        </button>
      </nav>

      {/* ─── Mobile Menu (notebook page style) ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: "rgba(253, 252, 248, 0.97)",
              backdropFilter: "blur(12px)",
              borderBottom: "2.5px solid #1a1a1a",
              boxShadow: "0 3px 0px #1a1a1a",
            }}
          >
            {/* Faint ruled lines in mobile menu */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 31px, #c8d8e8 31px, #c8d8e8 32px)",
                backgroundSize: "100% 32px",
              }}
            />

            <ul className="relative flex flex-col items-start gap-1 px-8 py-6">
              {navLinks.map((link, index) => (
                <m.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20, rotate: -2 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.08, duration: 0.25 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 hover:bg-sticky-yellow/50 w-full"
                  >
                    <span className="text-xl">{link.doodle}</span>
                    <span
                      className="text-xl text-ink"
                      style={{
                        fontFamily: '"Patrick Hand", cursive',
                      }}
                    >
                      {link.label}
                    </span>

                    {/* Little doodle arrow that appears on hover */}
                    <svg
                      width="20"
                      height="10"
                      viewBox="0 0 28 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-0 group-hover:opacity-60 transition-opacity duration-200 -translate-x-1 group-hover:translate-x-0"
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
                  </Link>
                </m.li>
              ))}

              {/* Little sketched separator */}
              <m.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="w-full my-2"
              >
                <div
                  className="h-[2px] mx-4"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 4'%3E%3Cpath d='M0 2 C20 0, 30 4, 50 2 C70 0, 80 4, 100 2 C120 0, 130 4, 150 2 C170 0, 180 4, 200 2' fill='none' stroke='%23b8b8b8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "100px 4px",
                  }}
                />
              </m.li>

              {/* Doodled "made with ♥" note at bottom of mobile menu */}
              <m.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="w-full"
              >
                <p
                  className="px-4 py-2 text-sm text-ink-faded"
                  style={{ fontFamily: '"Caveat", cursive', fontSize: "1rem" }}
                >
                  ✨ a developer&apos;s sketchbook ✨
                </p>
              </m.li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
