"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Heart,
  Compass,
  MapPin,
  Globe,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SafariCard from "@/components/ui/SafariCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import FullWidthCTA from "@/components/ui/FullWidthCTA";
import { getFeaturedSafaris } from "@/lib/data/safaris";
import { destinations } from "@/lib/data/destinations";
import { experiences } from "@/lib/data/experiences";
import { testimonials } from "@/lib/data/testimonials";

const featuredSafaris = getFeaturedSafaris();

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=85"
          alt="African savanna at golden hour with elephants"
          speed={0.12}
          priority
          overlayClassName="bg-gradient-to-b from-earth-900/60 via-earth-900/30 to-earth-900"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl animate-hero-home">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] uppercase text-amber-500 mb-6 animate-hero-badge">
              <span className="w-8 h-px bg-amber-500" />
              Since 2003
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif leading-[0.9]">
              Experience the
              <br />
              <span className="text-gradient">Magic of Africa</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-warm-300 max-w-xl leading-relaxed">
              Handcrafted luxury safaris across East and Southern Africa.
              Wildlife encounters, cultural immersions, and community impact
              — all in one extraordinary journey.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/safaris" className="btn-primary group">
                Explore Safaris
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/booking" className="btn-ghost">
                Book Your Trip
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in-delayed">
          <span className="text-[10px] uppercase tracking-[0.3em] text-warm-500">Scroll</span>
          <div className="w-px h-12 bg-warm-700 relative overflow-hidden">
            <div className="w-px h-full bg-amber-500 animate-scroll-line" />
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="relative z-20 section-overlap">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="glass-card p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCounter end={20} suffix="+" label="Years Experience" />
              <AnimatedCounter end={500} suffix="+" label="Happy Travelers" />
              <AnimatedCounter end={9} label="Countries" />
              <AnimatedCounter end={50} suffix="+" label="Safari Packages" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ EXPERIENCES BENTO ============ */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Offer"
            title="Unforgettable Experiences"
            subtitle="From wildlife spectacles to cultural immersions — discover how you want to experience Africa."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large card */}
            <ScrollReveal className="lg:col-span-2 lg:row-span-2">
              <Link
                href={`/experiences/${experiences[0].slug}`}
                className="group block relative h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden hover-image-zoom"
              >
                <Image
                  src={experiences[0].image}
                  alt={experiences[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-amber-500 font-semibold">
                    Featured Experience
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white font-serif mt-2 leading-tight">
                    {experiences[0].title}
                  </h3>
                  <p className="text-warm-300 mt-2 max-w-md text-sm">{experiences[0].tagline}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-amber-500 text-sm font-medium group-hover:gap-3 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {experiences.slice(1).map((exp, i) => (
              <ScrollReveal key={exp.slug} delay={0.1 * (i + 1)}>
                <Link
                  href={`/experiences/${exp.slug}`}
                  className="group block relative h-[220px] rounded-2xl overflow-hidden hover-image-zoom"
                >
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-bold text-white font-serif">{exp.title}</h3>
                    <p className="text-warm-400 text-xs mt-1">{exp.tagline}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED SAFARIS ============ */}
      <section className="py-32 bg-earth-800 relative">
        <div className="absolute inset-0 bg-grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Featured Adventures"
            title="Our Most Popular Safaris"
            subtitle="Handpicked experiences that our travelers rave about. Each one crafted to deliver the adventure of a lifetime."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {featuredSafaris.map((safari, i) => (
              <SafariCard key={safari.slug} safari={safari} index={i} />
            ))}
          </div>

          <ScrollReveal className="text-center mt-14">
            <Link href="/safaris" className="btn-outline group">
              View All Safaris
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ DESTINATIONS ============ */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Where We Go"
            title="Explore Our Destinations"
            subtitle="From Kenya's iconic savannas to Rwanda's misty gorilla forests — discover the best of Africa."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {destinations.map((dest, i) => (
              <ScrollReveal key={dest.slug} delay={i * 0.08}>
                <Link
                  href={`/destinations#${dest.slug}`}
                  className="group block relative h-72 md:h-80 rounded-2xl overflow-hidden hover-image-zoom"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/40 to-transparent group-hover:via-earth-900/20 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-1.5 mb-2">
                      <MapPin className="w-3 h-3 text-amber-500" />
                      <span className="text-[10px] text-amber-500 font-medium uppercase tracking-[0.15em]">
                        {dest.safariCount > 0 ? `${dest.safariCount} safaris` : "Coming soon"}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white font-serif">{dest.name}</h3>
                    <p className="text-warm-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {dest.tagline}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="py-32 bg-earth-800 relative overflow-hidden glow-amber">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why RoundTrip Safaris"
            title="Your Safari, Perfectly Crafted"
            subtitle="We don't just plan trips — we create transformative experiences that connect you with Africa's wild heart."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Compass,
                title: "Expert Local Guides",
                description:
                  "20+ years of experience. Our guides know every trail, waterhole, and secret spot.",
              },
              {
                icon: Shield,
                title: "Safe & Seamless",
                description:
                  "Visa guidance, emergency evacuation cover, 24/7 support. You focus on adventure.",
              },
              {
                icon: Heart,
                title: "Community Impact",
                description:
                  "Every journey supports local communities through employment and our charity programs.",
              },
              {
                icon: Globe,
                title: "9 Countries",
                description:
                  "Kenya, Tanzania, Botswana, Uganda, Rwanda, and more — Africa's finest destinations.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="glass-card-hover p-7 h-full">
                  <div className="w-12 h-12 rounded-xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center text-amber-500 mb-5">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-warm-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CHARITY ============ */}
      <section className="relative py-32 overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&q=80"
          alt="Youth athletes in Kenya"
          speed={0.1}
          overlayClassName="bg-gradient-to-r from-earth-900/90 via-earth-900/70 to-earth-900/40"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-px bg-amber-500" />
                  <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-amber-500">
                    Making a Difference
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif leading-[0.95]">
                  Empowering Kenya&apos;s Youth Athletes
                </h2>
                <p className="mt-6 text-warm-300 text-lg leading-relaxed">
                  Our charity-focused group travel program supports the incredible
                  youth athletes of Kenya through coaching, mentorship, and
                  equipment donations.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Sports clinics in urban and rural communities",
                    "Equipment donations: jerseys, shoes, balls, and gear",
                    "Coaching, mentorship, and leadership development",
                    "Combined with an unforgettable safari adventure",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-warm-200 text-sm">
                      <Heart className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/charity" className="btn-primary mt-8 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-32 bg-earth-800 relative">
        <div className="absolute inset-0 bg-grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Traveler Stories"
            title="What Our Clients Say"
            subtitle="Real experiences from real travelers."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, i) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="Your Safari in 4 Simple Steps"
            subtitle="From dream to reality — we make the journey effortless."
          />

          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-white/5" />
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Choose Your Safari", description: "Browse our curated packages or tell us your dream safari." },
                { step: "02", title: "Customize & Book", description: "Tailor every detail with our team. Confirm dates and secure your spot." },
                { step: "03", title: "Prepare & Pack", description: "Receive your itinerary, packing list, and pre-trip briefing." },
                { step: "04", title: "Experience Africa", description: "Touch down and let the adventure begin. We're with you every step." },
              ].map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 0.12}>
                  <div className="relative text-center md:text-left">
                    <div className="hidden md:flex w-6 h-6 rounded-full bg-earth-900 border-2 border-amber-600/50 mx-auto md:mx-0 mb-8 items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                    </div>
                    <div className="text-5xl font-bold text-amber-600/15 font-serif mb-3">{item.step}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-warm-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <FullWidthCTA />
    </>
  );
}
