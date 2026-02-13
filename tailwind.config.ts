import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#fdfcf8",
        "paper-dark": "#f5f0e8",
        "paper-lines": "#c8d8e8",
        "paper-margin": "#e88e8e",
        "paper-shadow": "#e8e4dc",

        ink: "#1a1a1a",
        "ink-light": "#4a4a4a",
        "ink-faded": "#8a8a8a",
        "ink-ghost": "#b8b8b8",

        pencil: "#555555",
        "pencil-light": "#999999",

        "sticky-yellow": "#fff9c4",
        "sticky-yellow-dark": "#f9f0a0",
        "sticky-pink": "#fce4ec",
        "sticky-pink-dark": "#f8c8d8",
        "sticky-blue": "#e3f2fd",
        "sticky-blue-dark": "#bbdefb",
        "sticky-green": "#e8f5e9",
        "sticky-green-dark": "#c8e6c9",
        "sticky-orange": "#fff3e0",
        "sticky-orange-dark": "#ffe0b2",

        tape: "rgba(255, 255, 220, 0.65)",
        "tape-dark": "rgba(230, 220, 180, 0.7)",

        "doodle-red": "#e57373",
        "doodle-blue": "#64b5f6",
        "doodle-green": "#81c784",
        "doodle-purple": "#ba68c8",
        "doodle-orange": "#ffb74d",
      },
      fontFamily: {
        hand: ["var(--font-caveat)", "Caveat", "cursive"],
        sketch: ["var(--font-patrick-hand)", "Patrick Hand", "cursive"],
        body: ["var(--font-patrick-hand)", "Patrick Hand", "cursive"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "sketch-xs": ["0.85rem", { lineHeight: "1.4" }],
        "sketch-sm": ["1rem", { lineHeight: "1.5" }],
        "sketch-base": ["1.15rem", { lineHeight: "1.6" }],
        "sketch-lg": ["1.35rem", { lineHeight: "1.5" }],
        "sketch-xl": ["1.65rem", { lineHeight: "1.3" }],
        "sketch-2xl": ["2.1rem", { lineHeight: "1.2" }],
        "sketch-3xl": ["2.8rem", { lineHeight: "1.15" }],
        "sketch-4xl": ["3.5rem", { lineHeight: "1.1" }],
        "sketch-5xl": ["4.5rem", { lineHeight: "1.05" }],
      },
      borderWidth: {
        sketch: "2.5px",
        "sketch-thick": "3px",
      },
      borderRadius: {
        sketch: "4px",
        "sketch-md": "8px",
        "sketch-lg": "12px",
        "sketch-xl": "16px",
      },
      boxShadow: {
        sketch: "4px 4px 0px #1a1a1a",
        "sketch-sm": "3px 3px 0px #1a1a1a",
        "sketch-lg": "6px 6px 0px #1a1a1a",
        "sketch-xl": "8px 8px 0px #1a1a1a",
        "sketch-hover": "7px 7px 0px #1a1a1a",
        "sketch-active": "1px 1px 0px #1a1a1a",
        sticky: "3px 3px 8px rgba(0, 0, 0, 0.12)",
        "sticky-hover": "5px 5px 12px rgba(0, 0, 0, 0.18)",
        tape: "0 1px 3px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        wobble: "wobble 3s ease-in-out infinite",
        "wobble-slow": "wobble 5s ease-in-out infinite",
        "wobble-reverse": "wobble-reverse 4s ease-in-out infinite",
        scribble: "scribble 0.15s ease-in-out",
        "tape-sway": "tape-sway 6s ease-in-out infinite",
        "pencil-draw": "pencil-draw 1.5s ease-out forwards",
        "page-flip": "page-flip 0.4s ease-out",
        "doodle-pop":
          "doodle-pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "float-gentle": "float-gentle 4s ease-in-out infinite",
      },
      keyframes: {
        wobble: {
          "0%, 100%": { transform: "rotate(-0.5deg)" },
          "50%": { transform: "rotate(0.5deg)" },
        },
        "wobble-reverse": {
          "0%, 100%": { transform: "rotate(0.7deg)" },
          "50%": { transform: "rotate(-0.7deg)" },
        },
        scribble: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(-1px, 1px) rotate(-0.5deg)" },
          "50%": { transform: "translate(1px, -1px) rotate(0.5deg)" },
          "75%": { transform: "translate(-1px, 0px) rotate(-0.3deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        "tape-sway": {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        "pencil-draw": {
          "0%": { strokeDashoffset: "100%", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { strokeDashoffset: "0%", opacity: "1" },
        },
        "page-flip": {
          "0%": { transform: "rotateY(-10deg) scale(0.95)", opacity: "0" },
          "100%": { transform: "rotateY(0deg) scale(1)", opacity: "1" },
        },
        "doodle-pop": {
          "0%": { transform: "scale(0) rotate(-10deg)", opacity: "0" },
          "60%": { transform: "scale(1.15) rotate(3deg)" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
      },
      spacing: {
        "notebook-margin": "4.5rem",
        "line-height": "2rem",
      },
      backgroundSize: {
        "notebook-lines": "100% 2rem",
      },
    },
  },
  plugins: [],
};

export default config;
