"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 600,
  color = "#000000",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 📌 Position fixe au centre du composant
  useEffect(() => {
    if (!containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    mouseX.set(width / 2);
    mouseY.set(height / 1.6);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className={cn("p-10 rounded-md relative overflow-hidden", className)}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute inset-px rounded-md opacity-100 w-full h-full"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 70%
            )
          `,
        }}
      >
        <CanvasRevealEffect
          animationSpeed={16}
          containerClassName="bg-transparent absolute inset-0 pointer-events-none w-full h-full"
          colors={[
            [242, 406, 132], // Utilisation du doré (F2CE84)
            [107, 79, 58], // Brun foncé (Complémentaire)
            [217, 145, 91], // Accent orange-brun
          ]}
          dotSize={40}
        />
      </motion.div>

      {children}
    </div>
  );
};
