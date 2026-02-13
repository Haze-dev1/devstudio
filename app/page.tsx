import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy-load below-the-fold sections — keeps initial JS bundle small
const FeaturedProjects = dynamic(
  () => import("@/components/FeaturedProjects"),
  {
    loading: () => <SectionSkeleton />,
  },
);
const MainQuestSection = dynamic(
  () => import("@/components/MainQuestSection"),
  {
    loading: () => <SectionSkeleton />,
  },
);
const TechStack = dynamic(() => import("@/components/TechStack"), {
  loading: () => <SectionSkeleton />,
});
const About = dynamic(() => import("@/components/About"), {
  loading: () => <SectionSkeleton />,
});
const DevActivityLog = dynamic(() => import("@/components/DevActivityLog"), {
  loading: () => <SectionSkeleton />,
});
const GuildActivitiesSection = dynamic(
  () => import("@/components/GuildActivitiesSection"),
  {
    loading: () => <SectionSkeleton />,
  },
);
const Achievements = dynamic(() => import("@/components/Achievements"), {
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <SectionSkeleton />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <SectionSkeleton height="h-32" />,
});
const MarginDoodles = dynamic(() =>
  import("@/components/Doodles").then((mod) => ({
    default: mod.MarginDoodles,
  })),
);
function SectionSkeleton({ height = "h-64" }: { height?: string }) {
  return (
    <div
      className={`${height} w-full flex items-center justify-center`}
      aria-hidden="true"
    >
      <div
        className="w-8 h-8 rounded-full border-2 border-ink-ghost border-t-ink-faded animate-spin"
        style={{ borderTopColor: "#8a8a8a", borderColor: "#e8e4dc" }}
      />
    </div>
  );
}

function SketchedDivider() {
  return (
    <div className="relative max-w-5xl mx-auto px-6" aria-hidden="true">
      <div
        className="h-[2px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 4'%3E%3Cpath d='M0 2 C20 0, 30 4, 50 2 C70 0, 80 4, 100 2 C120 0, 130 4, 150 2 C170 0, 180 4, 200 2' fill='none' stroke='%23ccc' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "100px 4px",
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative">
      {/* Margin doodles — little stars/sparkles in the notebook margin */}
      <MarginDoodles />

      {/* Navigation */}
      <Navbar />

      {/* 1. Hero — "Hey, I'm Devansh" sticky note + big heading + avatar card */}
      <Hero />

      <SketchedDivider />

      {/* 2. Projects — 2 featured taped-in sketch cards (visually strongest section) */}
      <FeaturedProjects />

      <SketchedDivider />

      {/* 3. Main Quest — Formos Studio professional experience card */}
      <MainQuestSection />

      <SketchedDivider />

      {/* 4. Tech Stack — tools of the trade skill tags */}
      <TechStack />

      <SketchedDivider />

      {/* 5. About — notebook page with marker-highlighted text */}
      <About />

      <SketchedDivider />

      {/* 6. Dev Activity Log — GitHub contributions graph (subtle) */}
      <DevActivityLog />

      <SketchedDivider />

      {/* 7. Guild Activities — leadership & community roles (2x2 grid) */}
      <GuildActivitiesSection />

      <SketchedDivider />

      {/* 8. Side Quests — pinned sticky note achievement badges */}
      <Achievements />

      <SketchedDivider />

      {/* 9. Collab — contact section with social links + email code block */}
      <Contact />

      {/* 10. Footer — torn-edge, "end of notebook" */}
      <Footer />
    </main>
  );
}
