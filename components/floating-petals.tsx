"use client";

import { useMemo } from "react";

// Seeded pseudo-random so SSR and client produce identical values → no hydration mismatch
function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10_000;
  return x - Math.floor(x);
}

export function FloatingPetals() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        left:     `${seededRand(i * 3 + 0) * 100}%`,
        delay:    `${seededRand(i * 3 + 1) * 6}s`,
        duration: `${5 + seededRand(i * 3 + 2) * 6}s`,
        size:     `${4 + seededRand(i * 3 + 0) * 7}px`,
        opacity:  0.25 + seededRand(i * 3 + 1) * 0.65,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="gold-particle"
          style={{
            left:              p.left,
            width:             p.size,
            height:            p.size,
            opacity:           p.opacity,
            animationDelay:    p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}