"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  size?: "default" | "lg";
  align?: "center" | "left";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  size = "default",
  align,
}: SectionHeadingProps) {
  const isCenter = align ? align === "center" : centered;
  const headingSize =
    size === "lg"
      ? "text-4xl md:text-5xl lg:text-6xl"
      : "text-3xl md:text-4xl lg:text-5xl";

  return (
    <div className={`mb-16 ${isCenter ? "text-center" : ""}`}>
      {label && (
        <ScrollReveal delay={0}>
          <div className={`flex items-center gap-4 mb-5 ${isCenter ? "justify-center" : ""}`}>
            <div className="h-px w-8 bg-amber-600/40" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-amber-500">
              {label}
            </span>
            <div className="h-px w-8 bg-amber-600/40" />
          </div>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className={`${headingSize} font-bold font-serif leading-[0.95] text-white`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p
            className={`mt-5 text-lg max-w-2xl text-warm-400 leading-relaxed ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
