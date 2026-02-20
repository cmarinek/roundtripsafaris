"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SafariCard from "@/components/ui/SafariCard";
import FullWidthCTA from "@/components/ui/FullWidthCTA";
import { safaris } from "@/lib/data/safaris";

const categories = [
  { value: "all", label: "All Safaris" },
  { value: "wildlife", label: "Wildlife" },
  { value: "luxury", label: "Luxury" },
  { value: "adventure", label: "Adventure" },
  { value: "charity", label: "Charity" },
  { value: "cultural", label: "Cultural" },
];

const destinationFilters = [
  { value: "all", label: "All Destinations" },
  { value: "Kenya", label: "Kenya" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "Botswana", label: "Botswana" },
];

export default function SafarisPage() {
  const [category, setCategory] = useState("all");
  const [destination, setDestination] = useState("all");

  const filtered = safaris.filter((s) => {
    const catMatch = category === "all" || s.category === category;
    const destMatch = destination === "all" || s.destination === destination;
    return catMatch && destMatch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1920&q=80"
            alt="Safari vehicles in the wild"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/50 to-earth-900/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 w-full">
          <div className="animate-hero">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
              Our Adventures
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-[0.95]">
              Safari Packages
            </h1>
            <p className="mt-4 text-lg text-warm-300 max-w-2xl">
              From wildlife spectacles to luxury escapes — find the perfect African adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar — overlaps hero */}
      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="text-[11px] font-semibold tracking-[0.2em] uppercase text-warm-400 mb-3 block">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setCategory(cat.value)}
                      className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                        category === cat.value
                          ? "bg-amber-600 text-white shadow-lg shadow-amber-600/20"
                          : "bg-white/5 text-warm-300 border border-white/10 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <label className="text-[11px] font-semibold tracking-[0.2em] uppercase text-warm-400 mb-3 block">
                  Destination
                </label>
                <div className="flex flex-wrap gap-2">
                  {destinationFilters.map((dest) => (
                    <button
                      key={dest.value}
                      onClick={() => setDestination(dest.value)}
                      className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                        destination === dest.value
                          ? "bg-terra-500 text-white shadow-lg shadow-terra-500/20"
                          : "bg-white/5 text-warm-300 border border-white/10 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {dest.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Safari Grid */}
      <section className="py-20 bg-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-warm-400 text-sm tracking-wide">
            Showing {filtered.length} safari{filtered.length !== 1 ? "s" : ""}
          </div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filtered.map((safari, i) => (
                <SafariCard key={safari.slug} safari={safari} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-warm-400 text-lg mb-6">
                No safaris match your current filters.
              </p>
              <button
                onClick={() => { setCategory("all"); setDestination("all"); }}
                className="btn-outline text-sm tracking-[0.05em] uppercase"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Trip CTA */}
      <section className="py-24 bg-earth-800 bg-grain">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="divider-amber-wide mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif leading-[0.95]">
              Don&apos;t See What You&apos;re Looking For?
            </h2>
            <p className="mt-4 text-warm-400 max-w-xl mx-auto">
              We specialize in custom-tailored safari experiences. Tell us your dream and we&apos;ll make it happen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-sm tracking-[0.05em] uppercase group">
                Design Your Safari
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/experiences" className="btn-ghost text-sm tracking-[0.05em] uppercase">
                Browse Experiences
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <FullWidthCTA />
    </>
  );
}
