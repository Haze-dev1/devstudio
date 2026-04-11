import { MainQuestExperience, GuildActivity, DevSighting } from "@/types";

// ─── Main Quest: Professional Work ───────────────────────────
export const mainQuest: MainQuestExperience[] = [
  {
    id: "win-capital-funds",
    role: "NLP Pipeline Lead Intern",
    organization: "Win Capital Funds",
    duration: "March 2026 — Present",
    impactPoints: [
      "Built the core NLP pipeline that powers the Capital Operating Platform, converting plain-English trading ideas into validated, executable strategy code through a multi-stage architecture.",
      "Designed code validation and sandboxing layers to ensure every auto-generated strategy is safe for execution before reaching the live trading engine.",
      "Established the strategy registry and templating system, enabling the team to version, reuse, and iterate on generated strategies across the platform.",
    ],
    techStack: [
      "Python",
      "NLP",
      "Node.js",
      "TypeScript",
    ],
    emoji: "📈",
    stickyColor: "#e3f2fd",
  },
  {
    id: "daemons-build",
    role: "Co-Founder",
    organization: "Daemons Build",
    duration: "March 2026 — Present",
    impactPoints: [
      "Started a tech agency that partners with early-stage founders to design, build, and ship their MVPs end-to-end.",
      "Personally own the technical architecture and delivery for client projects from initial scoping through to a live, deployable product.",
      "Built internal tooling and reusable project templates to streamline onboarding and cut delivery timelines across engagements.",
    ],
    techStack: [
      "Finance",
      "Blockchain",
      "AI",
      "Architecture",
    ],
    emoji: "🏗️",
    stickyColor: "#f3e5f5",
  },
  {
    id: "formos-studio",
    role: "Founder",
    organization: "Formos Studio",
    organizationUrl: "https://formos.studio",
    duration: "2025 — Present",
    impactPoints: [
      "Founded Formos Studio as an experimental lab for building privacy-first and crypto-native systems",
      "Designed and developed Zord — a zero-knowledge powered KYC protocol on Solana",
      "Architected smart contracts using Anchor with a focus on secure state design and composability",
      "Explored decentralized identity, cryptographic primitives, and on-chain UX patterns",
    ],
    techStack: [
      "Rust",
      "Anchor",
      "Solana",
      "Zero Knowledge Proofs",
      "TypeScript",
      "React",
    ],
    emoji: "🧑‍💻",
    stickyColor: "#fff9c4",
  }
];

// ─── Guild Activities: Leadership & Community Roles ──────────
export const guildActivities: GuildActivity[] = [
  {
    id: "hackronyx",
    role: "Sponsorship Head",
    organization: "Hackronyx",
    description:
      "Led sponsorship strategy for a hackathon with 3,500+ registrations. Pitched to tech companies, secured partnerships, and managed sponsor communications and deliverables end-to-end.",
    emoji: "🤝",
    impactMetric: "3.5K+ registrations • Closed sponsor partnerships",
    stickyColor: "#e3f2fd",
  },
  {
    id: "hackgenx",
    role: "Tech Mentor & Judge",
    organization: "Hackgenx",
    description:
      "Mentored hackathon teams on architecture, scope clarity, and execution strategy. Evaluated final projects based on technical depth, practicality, and product thinking.",
    emoji: "🧑‍🏫",
    impactMetric: "Guided teams from idea to execution",
    stickyColor: "#e8f5e9",
  },
  {
    id: "getonchain",
    role: "Speaker",
    organization: "Get On Chain",
    description:
      "Delivered a technical session on Solana and blockchain fundamentals. Simplified core concepts like smart contracts, decentralization, and on-chain architecture for early-stage developers.",
    emoji: "🎙️",
    impactMetric: "Spoke on Solana & blockchain fundamentals",
    stickyColor: "#ede7f6",
  },
  {
    id: "commenzy",
    role: "Content & Research Head",
    organization: "Commenzy",
    description:
      "Led technical research and content direction. Produced structured documentation, deep-dive articles, and educational resources to strengthen the developer community.",
    emoji: "📝",
    impactMetric: "Built structured technical knowledge base",
    stickyColor: "#fff3e0",
  },
];
