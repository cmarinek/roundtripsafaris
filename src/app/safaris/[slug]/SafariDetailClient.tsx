"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin, Clock, Users, Star, Shield, ChevronRight, Check, X as XIcon,
  ArrowRight, Mountain,
} from "lucide-react";
import { getSafariBySlug, safaris } from "@/lib/data/safaris";
import SafariCard from "@/components/ui/SafariCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FullWidthCTA from "@/components/ui/FullWidthCTA";

export default function SafariDetailClient() {
  const params = useParams();
  const safari = getSafariBySlug(params.slug as string);

  if (!safari) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-earth-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4 font-serif">Safari Not Found</h1>
          <Link href="/safaris" className="text-amber-500 hover:text-amber-400 transition-colors">
            Browse all safaris
          </Link>
        </div>
      </div>
    );
  }

  const relatedSafaris = safaris
    .filter((s) => s.slug !== safari.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={safari.image}
            alt={safari.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/40 to-earth-900/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="animate-hero">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-warm-400 text-xs tracking-wide mb-5">
              <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/safaris" className="hover:text-amber-500 transition-colors">Safaris</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-amber-500">{safari.title}</span>
            </div>

            <span className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 text-amber-400 text-[10px] font-semibold rounded-full uppercase tracking-[0.15em] mb-4">
              {safari.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-[0.95]">
              {safari.title}
            </h1>
            <p className="mt-4 text-lg text-warm-300">{safari.tagline}</p>

            <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-warm-300">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                {safari.destination}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500" />
                {safari.duration}
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-500" />
                {safari.groupSize}
              </span>
              <span className="flex items-center gap-2">
                <Mountain className="w-4 h-4 text-amber-500" />
                {safari.difficulty}
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-white">{safari.rating}</span>
                <span className="text-warm-400">({safari.reviewCount} reviews)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                  About This Safari
                </h2>
                <p className="text-warm-300 leading-relaxed text-lg">
                  {safari.description}
                </p>
              </ScrollReveal>

              {/* Gallery */}
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-white font-serif mb-5">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {safari.gallery.map((img, i) => (
                    <div key={i} className="relative h-48 md:h-56 rounded-xl overflow-hidden group">
                      <Image
                        src={img}
                        alt={`${safari.title} gallery ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-earth-900/0 group-hover:bg-earth-900/20 transition-colors duration-500" />
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Highlights */}
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-white font-serif mb-5">
                  Safari Highlights
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {safari.highlights.map((hl) => (
                    <div key={hl} className="flex items-start gap-3 glass-card rounded-xl p-4">
                      <Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-warm-200">{hl}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Itinerary */}
              <div>
                <ScrollReveal>
                  <h2 className="text-2xl font-bold text-white font-serif mb-6">
                    Day-by-Day Itinerary
                  </h2>
                </ScrollReveal>
                <div className="relative space-y-4">
                  {/* Timeline line */}
                  <div className="absolute left-7 top-6 bottom-6 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent hidden md:block" />
                  {safari.itinerary.map((day, i) => (
                    <ScrollReveal key={day.day} delay={i * 0.05}>
                      <div className="glass-card rounded-xl p-6 flex items-start gap-4 relative">
                        <div className="w-14 h-14 bg-amber-600/15 border border-amber-500/20 rounded-xl flex flex-col items-center justify-center shrink-0">
                          <span className="text-[10px] text-amber-400 font-medium uppercase tracking-wider">Day</span>
                          <span className="text-lg font-bold text-amber-300">{day.day}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{day.title}</h3>
                          <p className="text-warm-400 mt-1 leading-relaxed">{day.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Included / Not Included */}
              <ScrollReveal>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white font-serif mb-5">
                      What&apos;s Included
                    </h2>
                    <div className="space-y-3">
                      {safari.included.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                          <span className="text-warm-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white font-serif mb-5">
                      Not Included
                    </h2>
                    <div className="space-y-3">
                      {safari.notIncluded.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <XIcon className="w-5 h-5 text-warm-500 mt-0.5 shrink-0" />
                          <span className="text-warm-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Booking Card */}
                <div className="glass rounded-2xl p-6 border border-white/10">
                  <div className="text-center mb-6">
                    <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-warm-400">Starting from</div>
                    <div className="text-4xl font-bold text-white font-serif mt-1">
                      ${safari.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-warm-500 mt-1">per person</div>
                  </div>

                  <div className="space-y-0 mb-6 text-sm">
                    <div className="flex justify-between py-3 border-b border-white/5">
                      <span className="text-warm-400">Duration</span>
                      <span className="font-medium text-white">{safari.duration}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/5">
                      <span className="text-warm-400">Group Size</span>
                      <span className="font-medium text-white">{safari.groupSize}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/5">
                      <span className="text-warm-400">Difficulty</span>
                      <span className="font-medium text-white">{safari.difficulty}</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-warm-400">Destination</span>
                      <span className="font-medium text-white">{safari.destination}</span>
                    </div>
                  </div>

                  <Link
                    href={`/booking?safari=${safari.slug}`}
                    className="w-full btn-primary text-sm tracking-[0.05em] uppercase justify-center group"
                  >
                    Book This Safari
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <p className="text-center text-xs text-warm-500 mt-3">
                    Free cancellation up to 90 days before departure
                  </p>
                </div>

                {/* Contact Card */}
                <div className="glass-card rounded-2xl p-6 text-center">
                  <Shield className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-2">Need Help Deciding?</h3>
                  <p className="text-warm-400 text-sm mb-4">
                    Our safari experts are happy to answer any questions.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-ghost text-xs tracking-[0.05em] uppercase"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Safaris */}
          <div className="mt-24">
            <ScrollReveal>
              <div className="divider-amber mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif text-center leading-[0.95]">
                You Might Also Like
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              {relatedSafaris.map((s, i) => (
                <SafariCard key={s.slug} safari={s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <FullWidthCTA />
    </>
  );
}
