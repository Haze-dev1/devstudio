"use client";

import { m } from "framer-motion";
import { DoodleStar, DoodleSparkle, DoodleSquiggle } from "./Doodles";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 px-6">
      {/* Scattered doodles */}
      <div
        className="absolute top-16 right-[10%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleStar size={18} color="#d8d4cc" filled delay={0} />
      </div>
      <div
        className="absolute bottom-20 left-[8%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleSparkle size={14} color="#d0ccc4" delay={0} />
      </div>
      <div
        className="absolute top-[45%] right-[5%] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <DoodleStar size={12} color="#ddd" delay={0} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10">
          {/* Chapter sticky note */}
          <m.div
            className="inline-block mb-5"
            whileHover={{ rotate: 0, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="relative px-4 py-2"
              style={{
                backgroundColor: "#fce4ec",
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
                  transform: "translateX(-50%) rotate(-1deg)",
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
                chapter 04 — who am i
              </span>
            </div>
          </m.div>

          <div>
            <span className="inline-block text-3xl mb-3 select-none">📝</span>
            <h2
              className="text-ink inline-block"
              style={{
                fontFamily: '"Caveat", cursive',
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                letterSpacing: "-0.01em",
              }}
            >
              <span className="doodle-underline doodle-underline-blue">
                About Me
              </span>
            </h2>
          </div>
        </div>

        {/* Main about text — looks like notebook writing */}
        <div className="relative">
          {/* Notebook-style card */}
          <div
            className="relative bg-white p-8 md:p-10"
            style={{
              border: "2.5px solid #1a1a1a",
              borderRadius: "4px",
              boxShadow: "5px 5px 0px #1a1a1a",
            }}
          >
            {/* Tape strips */}
            <div
              className="absolute -top-[10px] left-[20%] w-[75px] h-[24px] z-10 pointer-events-none"
              style={{
                background: "rgba(255, 255, 220, 0.65)",
                border: "1px solid rgba(200, 190, 150, 0.3)",
                transform: "rotate(-5deg)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            />
            <div
              className="absolute -top-[8px] right-[18%] w-[70px] h-[24px] z-10 pointer-events-none"
              style={{
                background: "rgba(255, 255, 220, 0.65)",
                border: "1px solid rgba(200, 190, 150, 0.3)",
                transform: "rotate(7deg)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            />

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

            {/* Red margin line */}
            <div
              className="absolute top-0 bottom-0 pointer-events-none z-0 hidden md:block"
              style={{
                left: "2.5rem",
                width: "1.5px",
                backgroundColor: "#e88e8e",
                opacity: 0.35,
              }}
            />

            {/* Content */}
            <div className="relative z-[1] space-y-5 md:pl-8">
              <p
                className="text-ink-light leading-[1.8]"
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.25rem",
                }}
              >
                I&apos;m{" "}
                <span className="marker-yellow font-bold text-ink">
                  Devansh
                </span>{" "}
                — I&apos;ve always liked taking things apart just to see how
                they work. It started with random hardware experiments and
                slowly turned into software, late-night debugging, and
                eventually{" "}
                <span className="marker-pink font-bold text-ink">
                  low-level programming
                </span>
                . Somewhere along the way, I got hooked.
              </p>

              <p
                className="text-ink-light leading-[1.8]"
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.25rem",
                }}
              >
                I enjoy building things from scratch — whether it&apos;s a{" "}
                <span
                  className="inline-block px-2 py-0.5"
                  style={{
                    backgroundColor: "#fff9c4",
                    border: "1.5px dashed #d4a843",
                    borderRadius: "3px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                  }}
                >
                  Rust CLI
                </span>
                , a{" "}
                <span
                  className="inline-block px-2 py-0.5"
                  style={{
                    backgroundColor: "#e3f2fd",
                    border: "1.5px dashed #64b5f6",
                    borderRadius: "3px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                  }}
                >
                  blockchain program
                </span>
                , or a web app that just feels nice to use. I like understanding
                what&apos;s happening under the hood, not just using the surface
                layer. That curiosity is probably why I keep ending up in
                slightly ambitious projects.
              </p>

              <p
                className="text-ink-light leading-[1.8]"
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.25rem",
                }}
              >
                Most of my projects start with a simple{" "}
                <span className="marker-green font-bold text-ink">
                  &quot;what if?&quot;
                </span>{" "}
                and spiral from there. Sometimes they turn into something solid.
                Sometimes they turn into experiments. Either way, I learn by
                building.
              </p>

              <p
                className="text-ink-light leading-[1.8]"
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: "1.25rem",
                }}
              >
                When I&apos;m not coding, I&apos;m usually mentoring at
                hackathons, speaking about blockchain, or exploring new tools
                just because they look interesting. I drink too much coffee,
                don&apos;t sleep enough, and somehow still start new projects
                anyway. ☕
              </p>

              {/* Little scribble at the end */}
              <div className="pt-2 opacity-40">
                <DoodleSquiggle width={80} color="#999" delay={0} />
              </div>
            </div>

            {/* Dog-ear corner fold */}
            <div
              className="absolute bottom-0 right-0 w-7 h-7 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, white 50%, #e8e4dc 50%)",
                borderTop: "1px solid #ccc",
                borderLeft: "1px solid #ccc",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
