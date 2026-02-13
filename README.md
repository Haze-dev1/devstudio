# Devansh ✨ — Creative Dev Portfolio

A modern, playful, and expressive portfolio website built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=flat-square&logo=framer)

## ✨ Features

- **Cartoony & Minimal Design** — Soft pastel tones, playful shadows, rounded corners, and clean whitespace
- **Smooth Animations** — Subtle fade-ups, hover lifts, and floating elements powered by Framer Motion
- **Responsive Layout** — Mobile-first design that looks great on every screen size
- **Light Theme** — Warm cream background (`#fffdf7`) with a cozy, creative vibe
- **Reusable Components** — Clean component architecture with TypeScript types
- **App Router** — Built on Next.js App Router for modern routing and layouts

## 📁 Folder Structure

```
portfolio website/
├── app/
│   ├── globals.css          # Global styles, Tailwind directives, blobs, utilities
│   ├── layout.tsx           # Root layout with fonts, metadata, and background blobs
│   ├── page.tsx             # Homepage (Hero, About, Projects, Contact)
│   └── projects/
│       └── page.tsx         # All Projects page with grid layout
├── components/
│   ├── About.tsx            # About section with skills tags
│   ├── Contact.tsx          # Contact section with social links
│   ├── FeaturedProjects.tsx # Homepage featured projects (2 cards)
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section with avatar card
│   ├── Navbar.tsx           # Sticky navbar with mobile menu
│   └── ProjectCard.tsx      # Reusable project card component
├── lib/
│   └── projects.ts          # Project data (featured + all projects)
├── types/
│   └── index.ts             # TypeScript interfaces (Project)
├── public/                  # Static assets (images, resume, etc.)
├── tailwind.config.ts       # Tailwind theme (colors, shadows, animations)
├── postcss.config.mjs       # PostCSS configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # You are here!
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open in your browser:**

   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors

| Name         | Hex       | Usage                  |
| ------------ | --------- | ---------------------- |
| Cream        | `#fffdf7` | Background             |
| Cream Dark   | `#faf6ed` | Subtle background      |
| Peach        | `#ffe8d6` | Accent background      |
| Lavender     | `#e8dff5` | Accent background      |
| Mint         | `#d5f5e3` | Accent background      |
| Sky          | `#dbeafe` | Accent background      |
| Ink          | `#2d2d2d` | Primary text / borders |
| Ink Light    | `#5a5a5a` | Secondary text         |
| Ink Muted    | `#8a8a8a` | Muted text             |
| Accent       | `#ff6b6b` | Highlights             |

### Typography

- **Display:** Space Grotesk (headings)
- **Body:** DM Sans (paragraphs)
- **Mono:** JetBrains Mono (code, tags)

### Shadows

- `shadow-cartoon` — `6px 6px 0px #2d2d2d` (default card shadow)
- `shadow-cartoon-sm` — `4px 4px 0px #2d2d2d` (buttons, small elements)
- `shadow-cartoon-lg` — `8px 8px 0px #2d2d2d` (hero avatar card)
- `shadow-cartoon-hover` — `8px 8px 0px #2d2d2d` (hover state)
- `shadow-cartoon-active` — `2px 2px 0px #2d2d2d` (pressed state)

## 🛠️ Customization

### Adding a New Project

Edit `lib/projects.ts` and add a new entry to the `allProjects` array:

```ts
{
  id: "7",
  slug: "my-project",
  title: "My Project 🎉",
  description: "A short, fun description of what this project does.",
  longDescription: "A longer description for the case study page.",
  techStack: ["Next.js", "TypeScript", "TailwindCSS"],
  image: "/projects/my-project.png",
  liveUrl: "https://my-project.com",
  githubUrl: "https://github.com/devansh/my-project",
  featured: false,
  color: "#ffe8d6",
  borderColor: "#e8a87c",
}
```

Set `featured: true` to show it on the homepage (only the first 2 featured projects are displayed).

### Updating Personal Info

- **Name & branding:** Search for "Devansh" across components
- **Social links:** Edit `components/Contact.tsx`
- **Skills:** Edit the skills array in `components/About.tsx`
- **Resume:** Place your resume PDF at `public/resume.pdf`

## 📦 Tech Stack

| Technology     | Purpose                        |
| -------------- | ------------------------------ |
| Next.js 15     | React framework (App Router)   |
| TypeScript     | Type safety                    |
| TailwindCSS 3  | Utility-first styling          |
| Framer Motion  | Animations & transitions       |
| React Icons    | Icon library                   |
| Space Grotesk  | Display font (Google Fonts)    |
| DM Sans        | Body font (Google Fonts)       |
| JetBrains Mono | Monospace font (Google Fonts)  |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with 💛 and way too much coffee ☕