"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Globe, Users, Heart, Target, Eye } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FullWidthCTA from "@/components/ui/FullWidthCTA";

const team = [
  {
    name: "Charles Marinek",
    role: "Founder & Lead Safari Consultant",
    bio: "With a deep passion for African wildlife and community development, Charles founded RoundTrip Safaris to share the transformative power of Africa with travelers from Texas and beyond.",
    avatar: "CM",
  },
  {
    name: "Safari Operations Team",
    role: "On-Ground Coordinators",
    bio: "Our experienced ground team across Kenya, Tanzania, Botswana, Uganda, and Rwanda ensures every safari runs flawlessly with local expertise and genuine hospitality.",
    avatar: "SO",
  },
  {
    name: "Community Liaison Team",
    role: "Charity Program Directors",
    bio: "Dedicated to connecting travelers with local communities, our liaison team coordinates sports programs, equipment donations, and cultural exchanges that create lasting impact.",
    avatar: "CL",
  },
];

const values = [
  {
    icon: Globe,
    title: "Authentic Experiences",
    description: "We go beyond tourist trails to deliver genuine encounters with Africa's wildlife, people, and cultures.",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "Every safari supports local communities through employment, conservation efforts, and our charity programs.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "From luxury lodges to expert guides, we never cut corners. Every detail is curated for excellence.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description: "As a boutique company, we give every client the attention they deserve. Your safari is as unique as you are.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — split layout */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-hero">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-[0.95]">
                About RoundTrip<br />
                <span className="text-gradient">Safaris</span>
              </h1>
              <p className="mt-6 text-lg text-warm-300 max-w-xl leading-relaxed">
                Born from a love for Africa and a desire to make a difference. Based in Plano, Texas — serving the world since 2003.
              </p>
            </div>
            <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
                alt="African landscape"
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/30 to-transparent" />
              <div className="absolute bottom-6 left-6 glass rounded-xl px-5 py-3">
                <div className="text-2xl font-bold text-white font-serif">20+</div>
                <div className="text-amber-400 text-xs font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-earth-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <SectionHeading
                label="How It Started"
                title="From Plano, Texas to the Heart of Africa"
                subtitle=""
                align="left"
              />
              <div className="space-y-4 text-warm-300 leading-relaxed">
                <p>
                  RoundTrip Safaris was born from a simple belief: that everyone
                  deserves to experience the magic of Africa. Based in Plano, Texas,
                  we&apos;ve built a reputation over 20+ years for crafting premium safari
                  experiences that go far beyond the ordinary.
                </p>
                <p>
                  What sets us apart is our deep connection to the communities we
                  visit. We don&apos;t just pass through — we engage, support, and give
                  back. Our charity programs, particularly our youth athlete initiative
                  in Kenya, reflect our commitment to making every journey meaningful.
                </p>
                <p>
                  With trusted partnerships across Kenya, Tanzania, Botswana, Uganda,
                  and Rwanda, we handle every detail so you can focus on what matters:
                  the experience of a lifetime.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80"
                  alt="Safari landscape"
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

      {/* Mission & Vision */}
      <section className="py-24 bg-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="glass-card-hover rounded-2xl p-8 md:p-10 h-full">
                <Target className="w-10 h-10 text-amber-500 mb-6" />
                <h3 className="text-2xl font-bold text-white font-serif mb-4">
                  Our Mission
                </h3>
                <p className="text-warm-300 leading-relaxed">
                  To provide transformative African safari experiences that connect
                  travelers with nature, culture, and community. We strive to make
                  every journey meaningful — for our clients and for the communities
                  we visit.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="glass-card-hover rounded-2xl p-8 md:p-10 h-full">
                <Eye className="w-10 h-10 text-amber-500 mb-6" />
                <h3 className="text-2xl font-bold text-white font-serif mb-4">
                  Our Vision
                </h3>
                <p className="text-warm-300 leading-relaxed">
                  To be the most trusted safari company in Texas, known for
                  exceptional experiences, genuine community impact, and a personal
                  touch that makes every traveler feel like family.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-earth-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Stand For"
            title="Our Core Values"
            subtitle="The principles that guide every safari we craft."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="glass-card-hover rounded-2xl p-6 text-center h-full">
                  <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-500 mx-auto mb-4">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-warm-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Meet the Team"
            title="The People Behind Your Safari"
            subtitle="Passionate, experienced, and dedicated to making your African dream a reality."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.15}>
                <div className="glass-card-hover rounded-2xl overflow-hidden h-full">
                  <div className="h-48 bg-gradient-to-br from-amber-600/30 to-terra-600/30 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white text-3xl font-bold font-serif">
                      {member.avatar}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-amber-500 text-sm font-medium mt-1">
                      {member.role}
                    </p>
                    <p className="text-warm-400 mt-3 leading-relaxed text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <FullWidthCTA
        title="Ready to Plan Your Safari?"
        subtitle="Get in touch and let's start crafting your perfect African adventure."
        primaryLink="/booking"
        primaryLabel="Book Your Safari"
        secondaryLink="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
