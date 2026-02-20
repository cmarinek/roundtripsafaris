"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface FullWidthCTAProps {
  title?: string;
  subtitle?: string;
  primaryLink?: string;
  primaryLabel?: string;
  secondaryLink?: string;
  secondaryLabel?: string;
  image?: string;
}

export default function FullWidthCTA({
  title = "Your African Adventure Awaits",
  subtitle = "Let us craft an unforgettable journey tailored to your dreams.",
  primaryLink = "/booking",
  primaryLabel = "Start Planning",
  secondaryLink = "/contact",
  secondaryLabel = "Get in Touch",
  image = "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80",
}: FullWidthCTAProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-earth-900/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/50 via-transparent to-earth-900/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <div className="divider-amber-wide mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-[0.95]">
            {title}
          </h2>
          <p className="mt-5 text-lg text-warm-300 max-w-xl mx-auto">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryLink} className="btn-primary text-sm tracking-[0.05em] uppercase group">
              {primaryLabel}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href={secondaryLink} className="btn-ghost text-sm tracking-[0.05em] uppercase">
              {secondaryLabel}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
