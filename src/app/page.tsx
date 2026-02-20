"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Heart,
  Compass,
  Star,
  MapPin,
  ChevronDown,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SafariCard from "@/components/ui/SafariCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { getFeaturedSafaris } from "@/lib/data/safaris";
import { destinations } from "@/lib/data/destinations";
import { testimonials } from "@/lib/data/testimonials";

const featuredSafaris = getFeaturedSafaris();

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=85"
            alt="African savanna at golden hour with elephants"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-900/80 via-earth-900/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 via-transparent to-earth-900/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl animate-hero-home">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-600/30 backdrop-blur-sm border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium mb-6 animate-hero-badge"
            >
              <Compass className="w-4 h-4" />
              Premium African Safari Experiences
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif leading-[1.1]">
              Discover the
              <br />
              <span className="text-amber-400">Magic of Africa</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-warm-200 max-w-xl leading-relaxed">
              Handcrafted safari experiences across Kenya, Tanzania, and
              Botswana. Wildlife encounters, luxury lodges, and community impact
              — all in one extraordinary journey.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/safaris"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-amber-600/25 group text-lg"
              >
                Explore Safaris
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-full transition-all text-lg"
              >
                Book Your Trip
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-delayed">
          <div className="flex flex-col items-center gap-2 text-white/60 animate-scroll-bounce">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-earth-800 rounded-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <AnimatedCounter end={500} suffix="+" label="Happy Travelers" />
          <AnimatedCounter end={50} suffix="+" label="Safari Packages" />
          <AnimatedCounter end={3} label="Countries" />
          <AnimatedCounter end={15} suffix="+" label="Years Experience" />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why RoundTrip Safaris"
            title="Your Safari, Perfectly Crafted"
            subtitle="We don't just plan trips — we create transformative experiences that connect you with Africa's wild heart."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: Compass,
                title: "Expert Guides",
                description:
                  "Our seasoned guides have decades of combined experience. They know every trail, every waterhole, and every secret spot that makes a safari extraordinary.",
                color: "bg-terra-500",
              },
              {
                icon: Shield,
                title: "Safe & Seamless",
                description:
                  "From visa guidance to emergency evacuation coverage, every detail is handled. You focus on the adventure while we take care of the rest.",
                color: "bg-safari-500",
              },
              {
                icon: Heart,
                title: "Community Impact",
                description:
                  "Your journey supports local communities. Our charity programs empower Kenyan youth athletes and contribute to sustainable conservation efforts.",
                color: "bg-amber-600",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-md border border-warm-200/50 hover:shadow-lg transition-shadow group"
              >
                <div
                  className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-earth-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-warm-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Safaris */}
      <section className="py-24 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Featured Adventures"
            title="Our Most Popular Safaris"
            subtitle="Handpicked experiences that our travelers rave about. Each one crafted to deliver the adventure of a lifetime."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredSafaris.map((safari, i) => (
              <SafariCard key={safari.slug} safari={safari} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/safaris"
              className="inline-flex items-center gap-2 px-8 py-4 bg-earth-800 hover:bg-earth-700 text-white font-semibold rounded-full transition-all hover:shadow-lg group"
            >
              View All Safaris
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Where We Go"
            title="Explore Our Destinations"
            subtitle="From Kenya's iconic savannas to Botswana's pristine waterways, discover the best of Africa."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Link
                  href={`/destinations#${dest.slug}`}
                  className="group block relative h-96 rounded-2xl overflow-hidden"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">
                        {dest.safariCount} safaris available
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white font-serif">
                      {dest.name}
                    </h3>
                    <p className="text-warm-300 mt-1">{dest.tagline}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charity Section */}
      <section className="py-24 bg-terra-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 text-amber-300">
                Making a Difference
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif leading-tight">
                Empowering Kenya&apos;s Youth Athletes
              </h2>
              <p className="mt-6 text-terra-100 text-lg leading-relaxed">
                Our charity-focused group travel program supports the incredible
                youth athletes of Kenya. Through coaching, mentorship, and
                equipment donations, we&apos;re helping the next generation thrive —
                on and off the field.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Sports clinics in urban and rural communities",
                  "Equipment donations: jerseys, shoes, balls, and gear",
                  "Coaching, mentorship, and leadership development",
                  "Combined with an unforgettable safari adventure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-terra-100">
                    <Heart className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/charity"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-terra-600 font-semibold rounded-full hover:bg-warm-100 transition-all hover:shadow-xl group text-lg"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80"
                alt="Youth athletes in Kenya"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Traveler Stories"
            title="What Our Clients Say"
            subtitle="Real experiences from real travelers. Their stories speak louder than anything we could say."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Process Section */}
      <section className="py-24 bg-earth-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="Your Safari in 4 Simple Steps"
            subtitle="From dream to reality — we make the journey effortless."
            light
          />

          <div className="grid md:grid-cols-4 gap-8 mt-8">
            {[
              {
                step: "01",
                title: "Choose Your Safari",
                description:
                  "Browse our curated packages or tell us your dream safari and we'll build it from scratch.",
              },
              {
                step: "02",
                title: "Customize & Book",
                description:
                  "Work with our team to tailor every detail. Confirm your dates and secure your spot.",
              },
              {
                step: "03",
                title: "Prepare & Pack",
                description:
                  "Receive your detailed itinerary, packing list, and pre-trip briefing. We handle the logistics.",
              },
              {
                step: "04",
                title: "Experience Africa",
                description:
                  "Touch down in Africa and let the adventure begin. Our team is with you every step of the way.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-amber-600/30 font-serif mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-warm-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
