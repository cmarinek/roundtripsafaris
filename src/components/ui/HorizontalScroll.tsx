"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export default function HorizontalScroll({ children, className = "" }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`relative ${className}`}>
      <motion.div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </motion.div>

      {/* Fade edges */}
      <div className="absolute top-0 left-0 bottom-4 w-8 bg-gradient-to-r from-earth-900 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 bottom-4 w-8 bg-gradient-to-l from-earth-900 to-transparent pointer-events-none z-10" />
    </div>
  );
}
