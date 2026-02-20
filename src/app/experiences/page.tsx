"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FullWidthCTA from "@/components/ui/FullWidthCTA";
import { experiences } from "@/lib/data/experiences";

export default function ExperiencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
            alt="African safari experience"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/50 to-earth-900/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="animate-hero">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-[0.95]">
              Our Experiences
            </h1>
            <p className="mt-4 text-lg text-warm-300 max-w-2xl">
              From wildlife spectacles to mountain summits — discover the many ways to experience Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Bento Grid */}
      <section className="py-20 bg-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, i) => (
              <ScrollReveal
                key={exp.slug}
                delay={i * 0.1}
                className={i === 0 ? "md:col-span-2 lg:col-span-2 md:row-span-2" : ""}
              >
                <Link
                  href={`/experiences/${exp.slug}`}
                  className="group block relative h-full min-h-[280px] rounded-2xl overflow-hidden hover-image-zoom"
                >
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/30 to-transparent" />
                  <div className="absolute inset-0 bg-earth-900/0 group-hover:bg-earth-900/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                      <span className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 text-[10px] font-semibold text-amber-400 rounded-full uppercase tracking-[0.15em] mb-3">
                        Experience
                      </span>
                      <h3 className={`font-bold text-white font-serif leading-tight ${i === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>
                        {exp.title}
                      </h3>
                      <p className="text-warm-300 text-sm mt-2 line-clamp-2 opacity-80">
                        {exp.tagline}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-amber-500 text-sm font-semibold">
                        Explore
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FullWidthCTA />
    </>
  );
}
