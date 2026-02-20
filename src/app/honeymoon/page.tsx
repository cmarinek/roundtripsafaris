"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight, Star, Sparkles, Wine, Sunrise } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FullWidthCTA from "@/components/ui/FullWidthCTA";
import SafariCard from "@/components/ui/SafariCard";
import { getSafariBySlug } from "@/lib/data/safaris";

const honeymoonHighlights = [
  {
    icon: Sunrise,
    title: "Hot Air Balloon Safaris",
    description: "Float above the Serengeti at dawn with your partner for a truly once-in-a-lifetime view.",
  },
  {
    icon: Wine,
    title: "Candlelit Bush Dinners",
    description: "Dine under a canopy of stars with gourmet cuisine prepared by your private chef.",
  },
  {
    icon: Heart,
    title: "Private Game Drives",
    description: "Just you, your partner, and the wild. No crowds, no sharing — pure intimacy.",
  },
  {
    icon: Sparkles,
    title: "Luxury Accommodation",
    description: "From private plunge pools to overwater villas, every detail is curated for romance.",
  },
];

const honeymoonSafaris = [
  getSafariBySlug("serengeti-luxury-escape"),
  getSafariBySlug("zanzibar-cultural-safari"),
].filter(Boolean);

export default function HoneymoonPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&q=80"
            alt="Romantic African sunset"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/40 to-earth-900/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <div className="max-w-3xl animate-hero">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
              <Heart className="w-3.5 h-3.5" />
              Honeymoon
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-serif leading-[0.95]">
              Begin Your Forever<br />
              <span className="text-gradient">in the Wild</span>
            </h1>
            <p className="mt-6 text-lg text-warm-300 max-w-xl leading-relaxed">
              There&apos;s nothing more romantic than watching a sunset over the African savanna
              with the person you love. Let Africa be the backdrop to your love story.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="btn-primary text-sm tracking-[0.05em] uppercase group"
              >
                Plan Your Honeymoon
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="btn-ghost text-sm tracking-[0.05em] uppercase"
              >
                Speak to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Honeymoon Safari */}
      <section className="py-24 bg-earth-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Africa"
            title="The Ultimate Honeymoon Destination"
            subtitle="Combine luxury, adventure, and intimacy for a honeymoon you'll never forget."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {honeymoonHighlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="glass-card-hover rounded-2xl p-6 text-center h-full">
                  <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-500 mx-auto mb-4">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-warm-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 bg-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Honeymoon Packages"
            title="Curated for Romance"
            subtitle="Our most popular honeymoon-worthy safari experiences."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {honeymoonSafaris.map((safari, i) => (
              safari && <SafariCard key={safari.slug} safari={safari} index={i} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-earth-800 bg-grain">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <Star className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <blockquote className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed">
              &ldquo;Our honeymoon safari was the most magical experience of our lives.
              Waking up to the sound of the wild, sundowners on the savanna,
              and the most breathtaking landscapes we&apos;ve ever seen.&rdquo;
            </blockquote>
            <div className="mt-6">
              <p className="text-amber-500 font-semibold">— Sarah & James</p>
              <p className="text-warm-400 text-sm">Serengeti & Zanzibar, 2024</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <FullWidthCTA
        title="Your Love Story Awaits"
        subtitle="Let us create a honeymoon as unique as your love story."
        primaryLink="/booking"
        primaryLabel="Start Planning"
        secondaryLink="/contact"
        secondaryLabel="Get in Touch"
        image="https://images.unsplash.com/photo-1534177616064-886b3308811e?w=1920&q=80"
      />
    </>
  );
}
