"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { getExperienceBySlug } from "@/lib/data/experiences";
import { getSafariBySlug } from "@/lib/data/safaris";
import SafariCard from "@/components/ui/SafariCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FullWidthCTA from "@/components/ui/FullWidthCTA";

export default function ExperienceDetailClient() {
  const params = useParams();
  const experience = getExperienceBySlug(params.slug as string);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-earth-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4 font-serif">Experience Not Found</h1>
          <Link href="/experiences" className="text-amber-500 hover:text-amber-400 transition-colors">
            Browse all experiences
          </Link>
        </div>
      </div>
    );
  }

  const relatedSafaris = experience.relatedSafariSlugs
    .map((slug) => getSafariBySlug(slug))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={experience.image}
            alt={experience.title}
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
              <Link href="/experiences" className="hover:text-amber-500 transition-colors">Experiences</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-amber-500">{experience.title}</span>
            </div>

            <span className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 text-amber-400 text-[10px] font-semibold rounded-full uppercase tracking-[0.15em] mb-4">
              Experience
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-[0.95]">
              {experience.title}
            </h1>
            <p className="mt-3 text-lg text-amber-400/80 italic font-serif">{experience.tagline}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-earth-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-lg text-warm-300 leading-relaxed">{experience.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white font-serif mb-6">Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {experience.highlights.map((hl) => (
                  <div key={hl} className="flex items-start gap-3 glass-card rounded-xl p-4">
                    <Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                    <span className="text-warm-200">{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Safari Packages */}
      {relatedSafaris.length > 0 && (
        <section className="py-24 bg-earth-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="divider-amber mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif text-center leading-[0.95]">
                Related Safari Packages
              </h2>
              <p className="mt-4 text-warm-400 text-center max-w-xl mx-auto">
                Explore our curated packages featuring {experience.title.toLowerCase()}.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {relatedSafaris.map((safari, i) => (
                safari && <SafariCard key={safari.slug} safari={safari} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-earth-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="divider-amber mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white font-serif">
              Ready for Your {experience.title} Adventure?
            </h2>
            <p className="mt-4 text-warm-400 max-w-xl mx-auto">
              Let our experts craft the perfect itinerary tailored to your interests.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn-primary text-sm tracking-[0.05em] uppercase group">
                Start Planning
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-ghost text-sm tracking-[0.05em] uppercase">
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
