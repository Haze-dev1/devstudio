"use client";

import { m } from "framer-motion";
import { guildActivities } from "@/lib/experience";
import GuildCard from "./GuildCard";
import { DoodleStar, DoodleSparkle, DoodleSquiggle } from "./Doodles";

export default function GuildActivitiesSection() {
  return (
    <section id="guild" className="relative py-14 md:py-20 px-6">
      {/* Scattered doodle decorations */}
      <div
        className="absolute top-16 right-[8%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleStar size={16} color="#d0ccc4" filled delay={0} />
      </div>
      <div
        className="absolute top-32 left-[6%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <DoodleSparkle size={12} color="#ddd" delay={0} />
      </div>
      <div
        className="absolute bottom-36 right-[5%] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <DoodleStar size={14} color="#d8d4cc" delay={0} />
      </div>
      <div
        className="absolute top-[50%] left-[4%] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <DoodleSparkle size={11} color="#d0ccc4" delay={0} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* ─── Section Header (notebook chapter style) ─── */}
        <div className="mb-10">
          {/* Chapter sticky note */}
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
                chapter 06 — community roles
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
            Guild Activities <span className="inline-block">🛡️</span>
          </h2>

          {/* Wavy underline */}
          <div className="mb-5">
            <DoodleSquiggle width={180} color="#1a1a1a" delay={0} />
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
            Leadership & community roles — because building is better when
            you&apos;re{" "}
            <span className="marker-blue">building with people</span>. 🤝
          </p>
        </div>

        {/* ─── Guild Cards Grid (2x2 on desktop) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-7">
          {guildActivities.map((activity, index) => (
            <GuildCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>

        {/* ─── Bottom note ─── */}
        <div className="mt-10 text-center">
          {/* Sketched separator */}
          <div
            className="flex items-center justify-center gap-3 mb-6"
            aria-hidden="true"
          >
            <div
              className="flex-1 max-w-[100px] h-[2px]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 4'%3E%3Cpath d='M0 2 C20 0, 30 4, 50 2 C70 0, 80 4, 100 2 C120 0, 130 4, 150 2 C170 0, 180 4, 200 2' fill='none' stroke='%23ccc' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-x",
                backgroundSize: "100px 4px",
              }}
            />
            <DoodleStar size={12} color="#ccc" delay={0} />
            <div
              className="flex-1 max-w-[100px] h-[2px]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 4'%3E%3Cpath d='M0 2 C20 0, 30 4, 50 2 C70 0, 80 4, 100 2 C120 0, 130 4, 150 2 C170 0, 180 4, 200 2' fill='none' stroke='%23ccc' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat-x",
                backgroundSize: "100px 4px",
              }}
            />
          </div>

          <p
            className="text-ink-faded"
            style={{
              fontFamily: '"Caveat", cursive',
              fontSize: "1.05rem",
              transform: "rotate(0.3deg)",
            }}
          >
            active in the ecosystem — always looking for the next guild to join
            ⚔️
          </p>
        </div>
      </div>
    </section>
  );
}
