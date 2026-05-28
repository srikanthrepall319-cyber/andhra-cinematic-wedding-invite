"use client";

import { useMemo } from "react";

export function FloatingPetals() {
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${4 + Math.random() * 4}s`,
        size: `${4 + Math.random() * 8}px`,
        opacity: 0.3 + Math.random() * 0.7
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="gold-particle"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}
    </div>
  );
}