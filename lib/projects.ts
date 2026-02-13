import { Project } from "@/types";

export const featuredProjects: Project[] = [
  {
    id: "1",
    slug: "zord",
    title: "Zord 🔐",
    description:
      "A zero-knowledge powered KYC system built on Solana — privacy-first identity verification.",
    longDescription:
      "Zord is my most ambitious build — a privacy-preserving KYC system using Zero Knowledge Proofs. Built with Anchor and modern zk primitives, it allows users to verify identity attributes without exposing raw personal data. The goal: prove what matters, reveal nothing else. Designed as an experiment in decentralized identity and cryptographic UX.",
    techStack: ["Anchor", "Solana", "Zero Knowledge Proofs", "Arcium"],
    image: "/projects/zord.png",
    liveUrl: "",
    githubUrl: "https://github.com/Haze-dev1/Zord-Turbin3",
    featured: true,
    color: "#e6f0ff",
    borderColor: "#7da2ff",
  },
  {
    id: "2",
    slug: "devfetch",
    title: "DevFetch 🦀",
    description:
      "A minimal Rust CLI tool that fetches and displays developer profile stats in the terminal.",
    longDescription:
      "DevFetch is a lightweight CLI tool written in Rust using Clap. It pulls and formats developer-related data cleanly inside the terminal — fast, simple, and distraction-free. Built to explore Rust ergonomics, CLI UX, and structured output formatting. A small tool, but built with care.",
    techStack: ["Rust", "Clap"],
    image: "/projects/devfetch.png",
    liveUrl: "",
    githubUrl: "https://github.com/Haze-dev1/Devfetch",
    featured: true,
    color: "#ffe8d6",
    borderColor: "#e8a87c",
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: "3",
    slug: "autofill-extension",
    title: "Automated Autofill Extension ⚡",
    description:
      "A browser extension that intelligently autofills repetitive forms.",
    longDescription:
      "A productivity-focused browser extension built with JavaScript and CSS that detects common form patterns and autofills them dynamically. Designed to reduce friction in repetitive workflows. Focused on DOM parsing, event handling, and clean UX within browser constraints.",
    techStack: ["JavaScript", "CSS", "Browser APIs"],
    image: "/projects/autofill.png",
    liveUrl: "",
    githubUrl:
      "https://github.com/Haze-dev1/Automated_autofill_Extension-Minor_project-",
    featured: false,
    color: "#f3e8ff",
    borderColor: "#c084fc",
  },
  {
    id: "4",
    slug: "amm-anchor",
    title: "AMM 💱",
    description: "A Solana-based Automated Market Maker built using Anchor.",
    longDescription:
      "An on-chain Automated Market Maker implemented with Anchor on Solana. Covers liquidity pools, swap logic, and constant product formulas. Built to deeply understand DeFi mechanics rather than just consume protocols. Focused on smart contract architecture and state management.",
    techStack: ["Anchor", "Solana", "Rust"],
    image: "/projects/amm.png",
    liveUrl: "",
    githubUrl: "https://github.com/Haze-dev1/Anchor_AMM",
    featured: false,
    color: "#e0f7fa",
    borderColor: "#4dd0e1",
  },
  {
    id: "5",
    slug: "cli-portfolio",
    title: "CLI Portfolio 💻",
    description: "A terminal-style portfolio built with TypeScript.",
    longDescription:
      "A portfolio experience that runs like a CLI inside the browser. Built with TypeScript to simulate terminal commands, command history, and interactive responses. Designed as a creative alternative to traditional portfolio layouts — minimal, nerdy, and fun.",
    techStack: ["TypeScript"],
    image: "/projects/cli-portfolio.png",
    liveUrl: "https://devansh-haze-portfolio.vercel.app/",
    githubUrl: "https://github.com/Haze-dev1/Portfolio",
    featured: false,
    color: "#ede9fe",
    borderColor: "#a78bfa",
  },
  {
    id: "6",
    slug: "sol-blog",
    title: "Sol Blog ✍️",
    description: "A blockchain-powered blog experiment built with Anchor.",
    longDescription:
      "An experimental blogging platform where posts are stored and managed via Solana programs. Built using TypeScript and Anchor to explore decentralized publishing and on-chain data models. More experimental than polished — but a strong learning deep dive.",
    techStack: ["TypeScript", "Anchor", "Solana"],
    image: "/projects/solblog.png",
    liveUrl: "https://solblog-haze.vercel.app/",
    githubUrl: "https://github.com/Haze-dev1/Solblog",
    featured: false,
    color: "#fef3c7",
    borderColor: "#f59e0b",
  },
  {
    id: "7",
    slug: "feasibility-api",
    title: "Feasibility Analysis API 📊",
    description:
      "An API that evaluates startup ideas using scraped signals and AI scoring.",
    longDescription:
      "A Python-based API that gathers market signals via web scraping and computes feasibility metrics. Designed to experiment with automated evaluation of startup ideas. Focused on data aggregation, scoring logic, and API architecture.",
    techStack: ["Python", "Web Scraping", "REST API"],
    image: "/projects/feasibility.png",
    liveUrl: "",
    githubUrl: "https://github.com/Haze-dev1/Feasibility_analysis_api",
    featured: false,
    color: "#d1fae5",
    borderColor: "#34d399",
  },
  {
    id: "8",
    slug: "passgencli",
    title: "PassGenCLI 🔑",
    description: "A simple and fast password generator CLI built in Rust.",
    longDescription:
      "A minimal password generator written in Rust using Clap. Generates secure passwords directly from the terminal with configurable length and character sets. Built to explore Rust fundamentals and CLI tooling.",
    techStack: ["Rust", "Clap"],
    image: "/projects/passgen.png",
    liveUrl: "",
    githubUrl: "https://github.com/Haze-dev1/PassGenCLI",
    featured: false,
    color: "#fce7f3",
    borderColor: "#ec4899",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return allProjects.filter((project) => project.featured);
}
