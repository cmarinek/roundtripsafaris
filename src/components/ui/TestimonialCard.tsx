"use client";

import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import type { Testimonial } from "@/lib/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({
  testimonial,
  index = 0,
}: TestimonialCardProps) {
  return (
    <ScrollReveal animation="fade-up" delay={index * 0.1}>
      <div className="glass-card-hover p-8 relative group">
        {/* Decorative quote */}
        <div className="absolute top-6 right-8 text-6xl font-serif text-amber-600/10 leading-none select-none">
          &ldquo;
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-warm-200 leading-relaxed text-[15px]">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {/* Author */}
        <div className="mt-6 flex items-center gap-4 pt-6 border-t border-white/5">
          <div className="w-11 h-11 rounded-full bg-amber-600/20 ring-2 ring-amber-600/30 flex items-center justify-center text-amber-500 font-bold text-sm">
            {testimonial.avatar}
          </div>
          <div>
            <p className="font-semibold text-white text-sm">{testimonial.name}</p>
            <p className="text-xs text-warm-500 mt-0.5">
              {testimonial.location} &middot; {testimonial.safari}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
