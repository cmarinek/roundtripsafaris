"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart, Users, Trophy, Globe, ArrowRight, CheckCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
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
      <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&q=80"
            alt="Youth athletes in Kenya"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-900/85 via-earth-900/60 to-earth-900/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-terra-500/30 backdrop-blur-sm border border-terra-400/30 rounded-full text-terra-200 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Community Impact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-tight">
              Empowering Kenya&apos;s <br />
              <span className="text-amber-400">Youth Athletes</span>
            </h1>
            <p className="mt-6 text-lg text-warm-200 max-w-xl leading-relaxed">
              Our charity-focused group travel program combines the adventure of
              an African safari with the power of giving back to local communities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking?safari=kenya-youth-athletes-charity"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full transition-all hover:shadow-xl group text-lg"
              >
                Join the Next Trip
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-full transition-all text-lg"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative -mt-16 z-20 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-terra-600 rounded-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {impacts.map((item) => (
            <div key={item.label} className="text-center">
              <item.icon className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <div className="text-3xl md:text-4xl font-bold text-white font-serif">
                {item.stat}
              </div>
              <p className="text-terra-100 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* About the Program */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                label="Our Mission"
                title="Making a Tangible Difference"
                subtitle=""
                centered={false}
              />
              <div className="space-y-4 text-warm-700 leading-relaxed">
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
                    <CheckCircle className="w-5 h-5 text-safari-500 mt-0.5 shrink-0" />
                    <span className="text-warm-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80"
                alt="Community sports program"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trip Highlights */}
      <section className="py-24 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Trip Highlights"
            title="What You'll Experience"
            subtitle="Four pillars of our charity trip that create unforgettable impact and memories."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {tripHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-warm-200/50 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-earth-800 mb-2">{item.title}</h3>
                  <p className="text-warm-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
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
              light
            />
            <div className="space-y-4">
              {charitySafari.itinerary.map((day, i) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="w-14 h-14 bg-amber-600/20 rounded-xl flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs text-amber-400 font-medium uppercase">Day</span>
                    <span className="text-lg font-bold text-amber-300">{day.day}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{day.title}</h3>
                    <p className="text-warm-400 mt-1 leading-relaxed">{day.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/booking?safari=kenya-youth-athletes-charity"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full transition-all hover:shadow-lg group text-lg"
              >
                Book This Trip
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            label="Get Involved"
            title="Be Part of Something Bigger"
            subtitle="Whether you join our next trip or support from home, there are many ways to make a difference."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking?safari=kenya-youth-athletes-charity"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-terra-500 hover:bg-terra-400 text-white font-semibold rounded-full transition-all hover:shadow-lg group text-lg"
            >
              Join the Next Trip
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
