import { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Blockchain Nexus — 1st Place (IIT Kanpur)",
    description:
      "Secured first position at IITK's Blockchain Nexus for building a blockchain-based healthcare solution.",
    emoji: "🥇",
    category: "award",
    stickyColor: "#fff9c4",
  },
  {
    id: "2",
    title: "Raisoni Tech Hackathon — 1st Place",
    description:
      "Won first place by building and pitching a production-ready solution under tight time constraints.",
    emoji: "🏆",
    category: "award",
    stickyColor: "#fff3e0",
  },
  {
    id: "3",
    title: "SIH Expo — 3rd Place",
    description:
      "Recognized among top teams for solution quality, execution, and technical depth.",
    emoji: "🥉",
    category: "award",
    stickyColor: "#fce4ec",
  },
  {
    id: "4",
    title: "Turbin3 Builder Graduate",
    description:
      "Completed the Turbin3 builder program focused on Web3 development and real-world blockchain applications.",
    emoji: "🛠️",
    category: "learning",
    stickyColor: "#e8f5e9",
  },
  {
    id: "5",
    title: "School of Solana — Season 8 Graduate",
    description:
      "Graduated from Season 8 of School of Solana, deep-diving into Solana development and Anchor-based programs.",
    emoji: "⛓️",
    category: "learning",
    stickyColor: "#e3f2fd",
  },
  {
    id: "6",
    title: "ETHGlobal New Delhi 2025 — Participant",
    description:
      "Built and collaborated in a global Web3 hackathon environment, shipping under real-world constraints.",
    emoji: "🌍",
    category: "community",
    stickyColor: "#fff9c4",
  },
  {
    id: "7",
    title: "Solana Apex & OnlyDevs — Attendee",
    description:
      "Attended ecosystem events focused on Solana and emerging tech, connecting with builders and founders.",
    emoji: "🎟️",
    category: "community",
    stickyColor: "#e8f5e9",
  },
  {
    id: "8",
    title: "Outstanding Tech Performer — 2025",
    description:
      "Awarded by college for consistent technical performance, hackathon results, and ecosystem contributions.",
    emoji: "🎖️",
    category: "milestone",
    stickyColor: "#fce4ec",
  },
];

export function getAchievementsByCategory(
  category: Achievement["category"],
): Achievement[] {
  return achievements.filter((a) => a.category === category);
}
