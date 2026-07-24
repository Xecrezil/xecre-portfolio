"use client";

import { useMemo } from "react";

type Star = {
  id: number;
  size: number;
  top: number;
  left: number;
  opacity: number;
};

export default function StarField() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 80 }, (_, index) => ({
      id: index,
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">

      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
          }}
        />
      ))}

    </div>
  );
}