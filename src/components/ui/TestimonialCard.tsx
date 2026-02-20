"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-warm-200/50 relative"
    >
      <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-200" />
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-warm-700 leading-relaxed italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-terra-500 flex items-center justify-center text-white font-bold text-sm">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-earth-800">{testimonial.name}</p>
          <p className="text-sm text-warm-600">
            {testimonial.location} &middot; {testimonial.safari}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
