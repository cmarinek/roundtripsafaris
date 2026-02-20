"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Sun, ChevronRight, ArrowRight } from "lucide-react";
import { getDestinationBySlug } from "@/lib/data/destinations";
import { getSafarisByDestination } from "@/lib/data/safaris";
import SafariCard from "@/components/ui/SafariCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FullWidthCTA from "@/components/ui/FullWidthCTA";

export default function DestinationDetailClient() {
  const params = useParams();
  const destination = getDestinationBySlug(params.slug as string);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-earth-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4 font-serif">Destination Not Found</h1>
          <Link href="/destinations" className="text-amber-500 hover:text-amber-400 transition-colors">
            Browse all destinations
          </Link>
        </div>
      </div>
    );
  }

  const destSafaris = getSafarisByDestination(destination.name);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/40 to-earth-900/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="animate-hero">
            <div className="flex items-center gap-2 text-warm-400 text-xs tracking-wide mb-5">
              <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/destinations" className="hover:text-amber-500 transition-colors">Destinations</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-amber-500">{destination.name}</span>
            </div>

            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 text-amber-400 text-[10px] font-semibold rounded-full uppercase tracking-[0.15em] mb-4">
              <MapPin className="w-3.5 h-3.5" />
              {destination.country}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-[0.95]">
              {destination.name}
            </h1>
            <p className="mt-3 text-lg text-amber-400/80 italic font-serif">{destination.tagline}</p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="relative -mt-12 z-20 max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <div className="glass rounded-2xl p-6 md:p-8 grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-xs font-semibold text-white tracking-wide mb-1">Best Time to Visit</h3>
                <p className="text-sm text-warm-400">{destination.bestTime}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sun className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-xs font-semibold text-white tracking-wide mb-1">Climate</h3>
                <p className="text-sm text-warm-400">{destination.climate}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* About */}
      <section className="py-20 bg-earth-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-lg text-warm-300 leading-relaxed">{destination.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10">
              <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-warm-400 mb-4">Key Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {destination.highlights.map((hl) => (
                  <span
                    key={hl}
                    className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm rounded-full font-medium"
                  >
                    {hl}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Safari Packages */}
      {destSafaris.length > 0 && (
        <section className="py-24 bg-earth-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="divider-amber mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif text-center leading-[0.95]">
                Safari Packages in {destination.name}
              </h2>
              <p className="mt-4 text-warm-400 text-center max-w-xl mx-auto">
                Explore our curated safari experiences in {destination.name}.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {destSafaris.map((safari, i) => (
                <SafariCard key={safari.slug} safari={safari} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Safaris CTA */}
      {destSafaris.length === 0 && (
        <section className="py-24 bg-earth-800">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <ScrollReveal>
              <div className="divider-amber mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white font-serif">
                {destination.name} Safaris Coming Soon
              </h2>
              <p className="mt-4 text-warm-400 max-w-xl mx-auto">
                We&apos;re currently developing safari packages for {destination.name}. Contact us to discuss a custom itinerary.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-sm tracking-[0.05em] uppercase group">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/safaris" className="btn-ghost text-sm tracking-[0.05em] uppercase">
                  Browse All Safaris
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Pre-footer CTA */}
      <FullWidthCTA />
    </>
  );
}
