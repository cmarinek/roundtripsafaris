"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Users, Star, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import type { Safari } from "@/lib/data/safaris";

interface SafariCardProps {
  safari: Safari;
  index?: number;
  size?: "default" | "large";
}

export default function SafariCard({ safari, index = 0, size = "default" }: SafariCardProps) {
  const height = size === "large" ? "h-[500px] md:h-[600px]" : "h-[420px] md:h-[480px]";

  return (
    <ScrollReveal animation="fade-up" delay={index * 0.1}>
      <Link href={`/safaris/${safari.slug}`} className="group block">
        <div
          className={`relative ${height} rounded-2xl overflow-hidden hover-image-zoom`}
        >
          {/* Image */}
          <Image
            src={safari.image}
            alt={safari.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient overlay — heavier at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category badge */}
          <div className="absolute top-5 left-5">
            <span className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-semibold rounded-full uppercase tracking-[0.15em]">
              {safari.category}
            </span>
          </div>

          {/* Rating */}
          <div className="absolute top-5 right-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium rounded-full">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {safari.rating}
            </span>
          </div>

          {/* Content — overlaid on image bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
              <h3 className="text-xl md:text-2xl font-bold text-white font-serif leading-tight">
                {safari.title}
              </h3>
              <p className="text-warm-300 text-sm mt-2 line-clamp-2 opacity-80">
                {safari.tagline}
              </p>

              {/* Info bar */}
              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-warm-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  {safari.destination}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  {safari.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-500" />
                  {safari.groupSize}
                </span>
              </div>

              {/* Price + Arrow */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-warm-500">From</span>
                  <span className="block text-2xl font-bold text-white">
                    ${safari.price.toLocaleString()}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-amber-600 group-hover:border-amber-600 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}
