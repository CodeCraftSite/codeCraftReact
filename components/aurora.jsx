"use client";

import { memo } from "react";

const AURORA_CSS = `
@keyframes aurora {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-aurora {
  animation-name: aurora;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@media (prefers-reduced-motion: reduce) {
  .animate-aurora { animation: none; }
}
`;

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    speed = 1,
  }) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`,
    };
    return (
      <>
        <style>{AURORA_CSS}</style>
        <span className={`relative inline-block ${className}`}>
          <span className="sr-only">{children}</span>

          <span
            className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
            style={gradientStyle}
            aria-hidden="true"
          >
            {children}
          </span>
        </span>
      </>
    );
  },
);
AuroraText.displayName = "AuroraText";
export default function AuroraView() {
  return (
    <>
      <style>{AURORA_CSS}</style>

      {}
      <main className="flex items-center justify-center font-sans text-black dark:text-white">
        <h1 className="text-6xl font-bold">
          Create{" "}
          <AuroraText speed={1} colors={["#38BDF8", "#3B82F6", "#EC4899"]}>
            beautiful
          </AuroraText>{" "}
          things
        </h1>
      </main>
    </>
  );
}
