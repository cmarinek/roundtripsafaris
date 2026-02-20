"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Sun, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SafariCard from "@/components/ui/SafariCard";
import FullWidthCTA from "@/components/ui/FullWidthCTA";
import { destinations } from "@/lib/data/destinations";
import { getSafarisByDestination } from "@/lib/data/safaris";

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&q=80"
            alt="African landscape"
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
              Where We Go
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-[0.95]">
              Our Destinations
            </h1>
            <p className="mt-4 text-lg text-warm-300 max-w-2xl">
              Five extraordinary countries across East and Southern Africa — endless possibilities for adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Destination Quick Nav */}
      <section className="relative -mt-8 z-20 max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <div className="glass rounded-2xl p-6 flex flex-wrap justify-center gap-3">
            {destinations.map((dest) => (
              <a
                key={dest.slug}
                href={`#${dest.slug}`}
                className="px-5 py-2.5 rounded-full text-xs font-medium tracking-wide bg-white/5 text-warm-300 border border-white/10 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all"
              >
                {dest.name}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Destinations */}
      {destinations.map((dest, idx) => {
        const destSafaris = getSafarisByDestination(dest.name);
        const isEven = idx % 2 === 0;

        return (
          <section
            key={dest.slug}
            id={dest.slug}
            className={`py-24 ${isEven ? "bg-earth-900" : "bg-earth-800"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal animation={isEven ? "fade-right" : "fade-left"} className={!isEven ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-500">
                      {dest.country}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif leading-[0.95]">
                    {dest.name}
                  </h2>
                  <p className="text-lg text-amber-400/80 mt-2 italic font-serif">{dest.tagline}</p>
                  <p className="mt-6 text-warm-300 leading-relaxed">{dest.description}</p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className="glass-card rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-amber-500" />
                        <span className="text-xs font-semibold text-white tracking-wide">Best Time to Visit</span>
                      </div>
                      <p className="text-sm text-warm-400">{dest.bestTime}</p>
                    </div>
                    <div className="glass-card rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sun className="w-4 h-4 text-amber-500" />
                        <span className="text-xs font-semibold text-white tracking-wide">Climate</span>
                      </div>
                      <p className="text-sm text-warm-400">{dest.climate}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-warm-400 mb-3">Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs rounded-full font-medium"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="inline-flex items-center gap-2 mt-8 text-amber-500 hover:text-amber-400 text-sm font-semibold tracking-wide transition-colors group"
                  >
                    Explore {dest.name}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </ScrollReveal>

                <ScrollReveal animation={isEven ? "fade-left" : "fade-right"} className={!isEven ? "lg:order-1" : ""}>
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-900/40 to-transparent" />
                  </div>
                </ScrollReveal>
              </div>

              {/* Destination Safaris */}
              {destSafaris.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-2xl font-bold text-white font-serif mb-8">
                    Safaris in {dest.name}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destSafaris.map((safari, i) => (
                      <SafariCard key={safari.slug} safari={safari} index={i} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Pre-footer CTA */}
      <FullWidthCTA />
    </>
  );
}
