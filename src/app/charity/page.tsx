"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Trophy, Globe, ArrowRight, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FullWidthCTA from "@/components/ui/FullWidthCTA";
import { getSafariBySlug } from "@/lib/data/safaris";

const charitySafari = getSafariBySlug("kenya-youth-athletes-charity");

const impacts = [
  { icon: Users, stat: "200+", label: "Youth Athletes Supported" },
  { icon: Trophy, stat: "15+", label: "Sports Clinics Hosted" },
  { icon: Globe, stat: "10+", label: "Communities Reached" },
  { icon: Heart, stat: "500+", label: "Equipment Pieces Donated" },
];

const tripHighlights = [
  {
    title: "Volunteer with Youth Athletes",
    description: "Join local communities to support youth sports programs in urban and rural areas — from football to athletics, basketball to netball.",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&q=80",
  },
  {
    title: "Donate Sports Equipment",
    description: "Bring and donate jerseys, shoes, balls, and training gear to underserved communities that need them most.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
  },
  {
    title: "Coaching & Mentorship",
    description: "Provide hands-on skills development and foster growth both on and off the field through workshops and clinics.",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=600&q=80",
  },
  {
    title: "Safari Adventure",
    description: "Experience Kenya's stunning wildlife in Amboseli National Park with breathtaking views of Mount Kilimanjaro.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
  },
];

export default function CharityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&q=80"
            alt="Youth athletes in Kenya"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/50 to-earth-900/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <div className="max-w-3xl animate-hero">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
              <Heart className="w-3.5 h-3.5" />
              Community Impact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-[0.95]">
              Empowering Kenya&apos;s <br />
              <span className="text-gradient">Youth Athletes</span>
            </h1>
            <p className="mt-6 text-lg text-warm-300 max-w-xl leading-relaxed">
              Our charity-focused group travel program combines the adventure of
              an African safari with the power of giving back to local communities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking?safari=kenya-youth-athletes-charity"
                className="btn-primary text-sm tracking-[0.05em] uppercase group"
              >
                Join the Next Trip
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="btn-ghost text-sm tracking-[0.05em] uppercase"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative -mt-12 z-20 max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <div className="glass rounded-2xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {impacts.map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="w-7 h-7 text-amber-500 mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-white font-serif">
                  {item.stat}
                </div>
                <p className="text-warm-400 text-xs mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* About the Program */}
      <section className="py-24 bg-earth-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <SectionHeading
                label="Our Mission"
                title="Making a Tangible Difference"
                subtitle=""
                align="left"
              />
              <div className="space-y-4 text-warm-300 leading-relaxed">
                <p>
                  RoundTrip Safaris is proud to offer an impactful group travel
                  opportunity designed to support the incredible youth athletes of
                  Kenya. This charity-focused trip aims to empower the next
                  generation of Kenyan athletes by providing them with the
                  necessary resources, mentorship, and training they need to
                  thrive.
                </p>
                <p>
                  Whether it&apos;s helping with sports clinics, donating equipment,
                  or supporting local sports initiatives, this journey allows you
                  to make a tangible difference in the lives of young athletes
                  across Kenya.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Cultural Exchange — Experience Kenya's rich traditions",
                  "Adventure & Safari — Stunning wildlife in Amboseli",
                  "Lasting Impact — Support sustainable sports programs",
                  "Seamlessly Organized — All logistics handled by our team",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                    <span className="text-warm-300">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80"
                  alt="Community sports program"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/30 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trip Highlights */}
      <section className="py-24 bg-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Trip Highlights"
            title="What You'll Experience"
            subtitle="Four pillars of our charity trip that create unforgettable impact and memories."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {tripHighlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="glass-card-hover rounded-2xl overflow-hidden group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-earth-900/20 group-hover:bg-earth-900/10 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-warm-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Preview */}
      {charitySafari && (
        <section className="py-24 bg-earth-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="The Journey"
              title="8-Day Itinerary Overview"
              subtitle="A carefully crafted program blending community impact with safari adventure."
            />
            <div className="space-y-4">
              {charitySafari.itinerary.map((day, i) => (
                <ScrollReveal key={day.day} delay={i * 0.05}>
                  <div className="glass-card rounded-xl p-6 flex items-start gap-4">
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
            <div className="text-center mt-12">
              <Link
                href="/booking?safari=kenya-youth-athletes-charity"
                className="btn-primary text-sm tracking-[0.05em] uppercase group"
              >
                Book This Trip
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <FullWidthCTA
        title="Be Part of Something Bigger"
        subtitle="Whether you join our next trip or support from home, there are many ways to make a difference."
        primaryLink="/booking?safari=kenya-youth-athletes-charity"
        primaryLabel="Join the Next Trip"
        secondaryLink="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
