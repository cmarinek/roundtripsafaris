"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag, Calendar, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import FullWidthCTA from "@/components/ui/FullWidthCTA";
import { offers } from "@/lib/data/offers";

export default function OffersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-earth-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-hero max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
              <Tag className="w-3.5 h-3.5" />
              Special Offers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-[0.95]">
              Current Deals &<br />
              <span className="text-gradient">Special Offers</span>
            </h1>
            <p className="mt-4 text-lg text-warm-300 max-w-xl">
              Take advantage of our seasonal promotions and exclusive packages.
            </p>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 bg-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {offers.map((offer, i) => (
              <ScrollReveal key={offer.slug} delay={i * 0.1}>
                <div className="glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative h-56">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1.5 bg-amber-600 text-white text-xs font-bold rounded-full">
                        {offer.discount}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white font-serif mb-2">{offer.title}</h3>
                    <p className="text-warm-400 text-sm leading-relaxed mb-4">{offer.description}</p>

                    <div className="flex flex-wrap gap-3 mb-4 text-xs text-warm-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        Valid until {offer.validUntil}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                        {offer.destinations.join(", ")}
                      </span>
                    </div>

                    <div className="space-y-1.5 mb-6">
                      {offer.highlights.map((hl) => (
                        <div key={hl} className="flex items-center gap-2 text-sm text-warm-300">
                          <div className="w-1 h-1 bg-amber-500 rounded-full shrink-0" />
                          {hl}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex items-end justify-between pt-4 border-t border-white/5">
                      <div>
                        <div className="text-warm-500 text-xs line-through">
                          ${offer.originalPrice.toLocaleString()}
                        </div>
                        <div className="text-2xl font-bold text-white">
                          ${offer.offerPrice.toLocaleString()}
                          <span className="text-warm-400 text-xs font-normal ml-1">per person</span>
                        </div>
                      </div>
                      <Link
                        href="/booking"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded-full transition-all group"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FullWidthCTA
        title="Don't See What You Need?"
        subtitle="Contact us for custom packages and group rates."
        primaryLink="/contact"
        primaryLabel="Get in Touch"
        secondaryLink="/safaris"
        secondaryLabel="Browse Safaris"
      />
    </>
  );
}
