"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Users, Heart, Target, Eye } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

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
    bio: "Our experienced ground team across Kenya, Tanzania, and Botswana ensures every safari runs flawlessly. With local expertise and genuine hospitality, they bring Africa to life.",
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
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
            alt="African landscape"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-900/80 via-earth-900/60 to-earth-900/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-hero">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif">
              About RoundTrip Safaris
            </h1>
            <p className="mt-4 text-lg text-warm-200 max-w-2xl">
              Born from a love for Africa and a desire to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-600 mb-3">
                How It Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-earth-800 font-serif">
                From Plano, Texas to the Heart of Africa
              </h2>
              <div className="mt-6 space-y-4 text-warm-700 leading-relaxed">
                <p>
                  RoundTrip Safaris was born from a simple belief: that everyone
                  deserves to experience the magic of Africa. Based in Plano, Texas,
                  we&apos;ve built a reputation for crafting premium safari experiences
                  that go far beyond the ordinary.
                </p>
                <p>
                  What sets us apart is our deep connection to the communities we
                  visit. We don&apos;t just pass through — we engage, support, and give
                  back. Our charity programs, particularly our youth athlete initiative
                  in Kenya, reflect our commitment to making every journey meaningful.
                </p>
                <p>
                  With years of combined experience and trusted partnerships across
                  Kenya, Tanzania, and Botswana, we handle every detail so you can
                  focus on what matters: the experience of a lifetime.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80"
                  alt="Safari landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-2xl shadow-lg hidden lg:block">
                <div className="text-3xl font-bold font-serif">15+</div>
                <div className="text-amber-100 text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-earth-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10"
            >
              <Target className="w-12 h-12 text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold text-white font-serif mb-4">
                Our Mission
              </h3>
              <p className="text-warm-300 leading-relaxed">
                To provide transformative African safari experiences that connect
                travelers with nature, culture, and community. We strive to make
                every journey meaningful — for our clients and for the communities
                we visit.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10"
            >
              <Eye className="w-12 h-12 text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold text-white font-serif mb-4">
                Our Vision
              </h3>
              <p className="text-warm-300 leading-relaxed">
                To be the most trusted safari company in Texas, known for
                exceptional experiences, genuine community impact, and a personal
                touch that makes every traveler feel like family.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Stand For"
            title="Our Core Values"
            subtitle="The principles that guide every safari we craft."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-warm-200/50 text-center"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mx-auto mb-4">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-earth-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-warm-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Meet the Team"
            title="The People Behind Your Safari"
            subtitle="Passionate, experienced, and dedicated to making your African dream a reality."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-warm-200/50"
              >
                <div className="h-48 bg-gradient-to-br from-terra-400 to-terra-600 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-white text-3xl font-bold">
                    {member.avatar}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-earth-800">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 text-sm font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="text-warm-600 mt-3 leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-warm-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            label="Let's Talk"
            title="Ready to Plan Your Safari?"
            subtitle="Get in touch and let's start crafting your perfect African adventure."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full transition-all hover:shadow-lg group text-lg"
            >
              Book Your Safari
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-earth-800 hover:bg-earth-700 text-white font-semibold rounded-full transition-all hover:shadow-lg text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
