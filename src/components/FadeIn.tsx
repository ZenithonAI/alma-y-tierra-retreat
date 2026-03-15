"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

type Direction = "up" | "down" | "left" | "right" | "none";

const directionMap: Record<Direction, { hidden: string; visible: string }> = {
  up: { hidden: "translate-y-10 opacity-0", visible: "translate-y-0 opacity-100" },
  down: { hidden: "-translate-y-10 opacity-0", visible: "translate-y-0 opacity-100" },
  left: { hidden: "translate-x-10 opacity-0", visible: "translate-x-0 opacity-100" },
  right: { hidden: "-translate-x-10 opacity-0", visible: "translate-x-0 opacity-100" },
  none: { hidden: "opacity-0", visible: "opacity-100" },
};

export default function FadeIn({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 800,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
}) {
  const { ref, isVisible } = useFadeIn();
  const styles = directionMap[direction];

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? styles.visible : styles.hidden
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
