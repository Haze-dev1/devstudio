import type { Metadata } from "next";
import { Caveat, Patrick_Hand, JetBrains_Mono } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-caveat",
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-patrick-hand",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Devansh's Notebook ✏️ — Creative Dev & Builder",
  description:
    "The sketchbook of Devansh — a creative TypeScript developer who doodles code and builds playful digital things.",
  keywords: [
    "developer",
    "portfolio",
    "creative",
    "typescript",
    "frontend",
    "fullstack",
    "next.js",
    "react",
    "sketchbook",
  ],
  authors: [{ name: "Devansh" }],
  openGraph: {
    title: "Devansh's Notebook ✏️ — Creative Dev & Builder",
    description:
      "The sketchbook of Devansh — a creative TypeScript developer who doodles code and builds playful digital things.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${caveat.variable} ${patrickHand.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper text-ink min-h-screen overflow-x-hidden relative">
        {/* Notebook ruled lines background across entire page */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 31px, #c8d8e8 31px, #c8d8e8 32px)",
            backgroundSize: "100% 32px",
            opacity: 0.45,
          }}
        />

        {/* Red margin line */}
        <div
          className="fixed top-0 bottom-0 pointer-events-none z-0 hidden lg:block"
          aria-hidden="true"
          style={{
            left: "4.5rem",
            width: "2px",
            backgroundColor: "#e88e8e",
            opacity: 0.4,
          }}
        />

        {/* Spiral binding holes — CSS background pattern instead of 40 divs */}
        <div
          className="fixed top-0 bottom-0 pointer-events-none z-0 hidden lg:block"
          aria-hidden="true"
          style={{
            left: "1.2rem",
            width: "14px",
            backgroundImage:
              "radial-gradient(circle 7px at 7px 7px, #eae6de 5px, transparent 5.5px), radial-gradient(circle 7px at 7px 7px, #ccc8c0 6px, transparent 6.5px)",
            backgroundSize: "14px 64px",
            backgroundPosition: "0 32px",
            backgroundRepeat: "repeat-y",
          }}
        />

        {/* Faint coffee stain decoration — top right */}
        <div
          className="fixed pointer-events-none z-0 hidden md:block"
          aria-hidden="true"
          style={{
            top: "8rem",
            right: "3rem",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at 40% 45%, rgba(180, 150, 100, 0.06) 0%, rgba(180, 150, 100, 0.03) 50%, transparent 70%)",
            border: "1px solid rgba(180, 150, 100, 0.04)",
            transform: "rotate(-15deg) scale(1, 0.9)",
          }}
        />

        {/* Main content */}
        <MotionProvider>
          <div className="relative z-10">{children}</div>
        </MotionProvider>
      </body>
    </html>
  );
}
