"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

type Direction = "up" | "down" | "left" | "right" | "none";

const directionMap: Record<Direction, { hidden: string; visible: string }> = {
  up: { hidden: "translate-y-4 opacity-20", visible: "translate-y-0 opacity-100" },
  down: { hidden: "-translate-y-4 opacity-20", visible: "translate-y-0 opacity-100" },
  left: { hidden: "translate-x-4 opacity-20", visible: "translate-x-0 opacity-100" },
  right: { hidden: "-translate-x-4 opacity-20", visible: "translate-x-0 opacity-100" },
  none: { hidden: "opacity-20", visible: "opacity-100" },
};

export default function FadeIn({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 400,
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
      className={`transition-all ease-out ${
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
