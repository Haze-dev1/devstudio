/* ============================================
   HAND-DRAWN SVG DOODLE ELEMENTS
   Scattered notebook decorations that bring
   the "Diary of a Wimpy Kid" energy.
   ============================================ */

// ─── Doodle Star ─────────────────────────────
export function DoodleStar({
  size = 24,
  className = "",
  color = "#1a1a1a",
  filled = false,
  delay = 0,
}: {
  size?: number;
  className?: string;
  color?: string;
  filled?: boolean;
  delay?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={filled ? color : "none"}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 2 L18.5 11 L28 11 L20.5 17 L23 26 L16 21 L9 26 L11.5 17 L4 11 L13.5 11 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Small Sparkle Star (like scribbled asterisk) ─
export function DoodleSparkle({
  size = 18,
  className = "",
  color = "#1a1a1a",
  delay = 0,
}: {
  size?: number;
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="10"
        y1="1"
        x2="10"
        y2="19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="10"
        x2="19"
        y2="10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="3"
        y1="3"
        x2="17"
        y2="17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="17"
        y1="3"
        x2="3"
        y2="17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Doodle Arrow (curvy, hand-drawn) ────────
export function DoodleArrow({
  direction = "right",
  size = 48,
  className = "",
  color = "#1a1a1a",
  delay = 0,
}: {
  direction?: "right" | "left" | "down" | "up" | "curve-right" | "curve-down";
  size?: number;
  className?: string;
  color?: string;
  delay?: number;
}) {
  const paths: Record<string, { path: string; head: string }> = {
    right: {
      path: "M4 20 C10 18, 18 22, 28 14 C32 11, 36 12, 42 14",
      head: "M38 8 L43 14 L37 19",
    },
    left: {
      path: "M42 20 C36 18, 28 22, 18 14 C14 11, 10 12, 4 14",
      head: "M8 8 L3 14 L9 19",
    },
    down: {
      path: "M20 4 C18 10, 22 18, 20 28 C19 32, 20 36, 20 42",
      head: "M14 38 L20 43 L26 38",
    },
    up: {
      path: "M20 42 C18 36, 22 28, 20 18 C19 14, 20 10, 20 4",
      head: "M14 8 L20 3 L26 8",
    },
    "curve-right": {
      path: "M4 8 C12 6, 16 14, 24 18 C32 22, 36 16, 42 12",
      head: "M38 6 L43 12 L37 16",
    },
    "curve-down": {
      path: "M8 4 C6 10, 14 16, 18 24 C22 32, 16 36, 12 42",
      head: "M6 38 L12 43 L16 37",
    },
  };

  const { path, head } = paths[direction];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d={path} stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path
        d={head}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// ─── Scribble Circle (hand-drawn emphasis) ───
export function DoodleCircle({
  size = 60,
  className = "",
  color = "#e57373",
  strokeWidth = 2.5,
  delay = 0,
}: {
  size?: number;
  className?: string;
  color?: string;
  strokeWidth?: number;
  delay?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity: 0.7 }}
    >
      <path
        d="M40 8 C58 6, 74 18, 74 38 C74 58, 60 74, 40 74 C20 74, 6 60, 6 40 C6 20, 20 8, 38 10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// ─── Squiggly Line / Scribble ────────────────
export function DoodleSquiggle({
  width = 120,
  className = "",
  color = "#1a1a1a",
  delay = 0,
}: {
  width?: number;
  className?: string;
  color?: string;
  delay?: number;
}) {
  const height = Math.round(width * 0.15);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 9 C8 3, 14 15, 20 9 C26 3, 32 15, 38 9 C44 3, 50 15, 56 9 C62 3, 68 15, 74 9 C80 3, 86 15, 92 9 C98 3, 104 15, 110 9 C113 6, 116 8, 118 9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Wavy Underline ──────────────────────────
export function DoodleUnderline({
  width = 200,
  className = "",
  color = "#1a1a1a",
  delay = 0,
}: {
  width?: number;
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <svg
      width={width}
      height="10"
      viewBox="0 0 200 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M1 5 Q12 1, 25 5 Q38 9, 50 5 Q62 1, 75 5 Q88 9, 100 5 Q112 1, 125 5 Q138 9, 150 5 Q162 1, 175 5 Q188 9, 199 5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// ─── Cross / X Mark ──────────────────────────
export function DoodleX({
  size = 20,
  className = "",
  color = "#e57373",
  delay = 0,
}: {
  size?: number;
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="3"
        y1="3"
        x2="21"
        y2="21"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="21"
        y1="3"
        x2="3"
        y2="21"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Checkbox (checked or unchecked) ─────────
export function DoodleCheckbox({
  checked = false,
  size = 22,
  className = "",
  delay = 0,
}: {
  checked?: boolean;
  size?: number;
  className?: string;
  delay?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {checked && (
        <path
          d="M7 12.5 L10.5 16 L17 8"
          stroke="#1a1a1a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

// ─── Thought Bubble ──────────────────────────
export function DoodleThoughtBubble({
  size = 40,
  className = "",
  color = "#1a1a1a",
  delay = 0,
}: {
  size?: number;
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 28 C4 28, 2 22, 6 18 C4 14, 8 8, 16 8 C18 4, 26 2, 32 6 C38 4, 44 10, 42 18 C46 22, 44 28, 38 28 C36 34, 28 36, 22 32 C18 34, 12 32, 10 28 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="white"
      />
      <circle
        cx="18"
        cy="40"
        r="3"
        stroke={color}
        strokeWidth="1.5"
        fill="white"
      />
      <circle
        cx="13"
        cy="45"
        r="2"
        stroke={color}
        strokeWidth="1.5"
        fill="white"
      />
    </svg>
  );
}

// ─── Exclamation Doodle ──────────────────────
export function DoodleExclamation({
  size = 28,
  className = "",
  color = "#e57373",
  delay = 0,
}: {
  size?: number;
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <svg
      width={size * 0.4}
      height={size}
      viewBox="0 0 12 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="6"
        y1="2"
        x2="6"
        y2="18"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="6" cy="24" r="2.5" fill={color} />
    </svg>
  );
}

// ─── Scattered Page Decorations ──────────────
// Use this to sprinkle random doodles around sections
export function NotebookDoodles({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Top-right star cluster */}
      <div className="absolute -top-2 -right-6 md:-right-10">
        <DoodleStar size={16} delay={0.3} />
        <DoodleStar
          size={10}
          className="ml-4 -mt-2"
          color="#8a8a8a"
          delay={0.5}
        />
        <DoodleSparkle
          size={12}
          className="ml-1 mt-1"
          color="#b8b8b8"
          delay={0.7}
        />
      </div>

      {/* Bottom-left squiggle */}
      <div className="absolute -bottom-4 -left-4 md:-left-8 opacity-30">
        <DoodleSquiggle width={60} color="#999" delay={0.6} />
      </div>
    </div>
  );
}

// ─── Margin Doodles (stuff drawn in notebook margins) ─
export function MarginDoodles() {
  return (
    <div
      className="fixed left-0 top-0 bottom-0 w-16 pointer-events-none select-none hidden lg:block z-[2]"
      aria-hidden="true"
    >
      {/* Little doodles in the left margin */}
      <div className="absolute top-[15rem] left-3">
        <DoodleStar size={14} color="#ccc8c0" filled delay={1} />
      </div>
      <div className="absolute top-[28rem] left-4">
        <DoodleSparkle size={12} color="#ccc8c0" delay={1.5} />
      </div>
      <div className="absolute top-[42rem] left-3">
        <DoodleStar size={11} color="#d8d4cc" delay={2} />
      </div>
      <div className="absolute top-[56rem] left-5">
        <DoodleSparkle size={10} color="#d8d4cc" delay={2.3} />
      </div>
      <div className="absolute top-[70rem] left-3">
        <DoodleStar size={13} color="#ccc8c0" filled delay={2.6} />
      </div>
    </div>
  );
}
