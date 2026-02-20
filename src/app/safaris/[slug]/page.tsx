"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin, Clock, Users, Star, Shield, ChevronRight, Check, X as XIcon,
  ArrowRight, Calendar, Mountain,
} from "lucide-react";
import { getSafariBySlug, safaris } from "@/lib/data/safaris";
import SafariCard from "@/components/ui/SafariCard";

export default function SafariDetailPage() {
  const params = useParams();
  const safari = getSafariBySlug(params.slug as string);

  if (!safari) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-earth-800 mb-4">Safari Not Found</h1>
          <Link href="/safaris" className="text-amber-600 hover:underline">
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
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={safari.image}
            alt={safari.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-warm-300 text-sm mb-4">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/safaris" className="hover:text-amber-400 transition-colors">Safaris</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-amber-400">{safari.title}</span>
            </div>

            <span className="inline-flex items-center px-3 py-1 bg-amber-600/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
              {safari.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif">
              {safari.title}
            </h1>
            <p className="mt-3 text-lg text-warm-200">{safari.tagline}</p>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-warm-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                {safari.destination}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                {safari.duration}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                {safari.groupSize}
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5 text-amber-400" />
                {safari.difficulty}
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-white">{safari.rating}</span>
                <span className="text-warm-300">({safari.reviewCount} reviews)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-earth-800 font-serif mb-4">
                  About This Safari
                </h2>
                <p className="text-warm-700 leading-relaxed text-lg">
                  {safari.description}
                </p>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-earth-800 font-serif mb-4">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {safari.gallery.map((img, i) => (
                    <div key={i} className="relative h-48 md:h-56 rounded-xl overflow-hidden">
                      <Image
                        src={img}
                        alt={`${safari.title} gallery ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-earth-800 font-serif mb-4">
                  Safari Highlights
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {safari.highlights.map((hl) => (
                    <div key={hl} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-warm-200/50">
                      <Check className="w-5 h-5 text-safari-500 mt-0.5 shrink-0" />
                      <span className="text-warm-700">{hl}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-earth-800 font-serif mb-6">
                  Day-by-Day Itinerary
                </h2>
                <div className="space-y-4">
                  {safari.itinerary.map((day, i) => (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="bg-white rounded-xl p-6 border border-warm-200/50 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-amber-100 rounded-xl flex flex-col items-center justify-center shrink-0">
                          <span className="text-xs text-amber-600 font-medium uppercase">Day</span>
                          <span className="text-lg font-bold text-amber-700">{day.day}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-earth-800">{day.title}</h3>
                          <p className="text-warm-600 mt-1 leading-relaxed">{day.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Included / Not Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-earth-800 font-serif mb-4">
                      What&apos;s Included
                    </h2>
                    <div className="space-y-3">
                      {safari.included.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-safari-500 mt-0.5 shrink-0" />
                          <span className="text-warm-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-earth-800 font-serif mb-4">
                      Not Included
                    </h2>
                    <div className="space-y-3">
                      {safari.notIncluded.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <XIcon className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                          <span className="text-warm-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-warm-200/50"
                >
                  <div className="text-center mb-6">
                    <div className="text-sm text-warm-600">Starting from</div>
                    <div className="text-4xl font-bold text-earth-800 font-serif">
                      ${safari.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-warm-500">per person</div>
                  </div>

                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between py-2 border-b border-warm-100">
                      <span className="text-warm-600">Duration</span>
                      <span className="font-medium text-earth-800">{safari.duration}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-warm-100">
                      <span className="text-warm-600">Group Size</span>
                      <span className="font-medium text-earth-800">{safari.groupSize}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-warm-100">
                      <span className="text-warm-600">Difficulty</span>
                      <span className="font-medium text-earth-800">{safari.difficulty}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-warm-600">Destination</span>
                      <span className="font-medium text-earth-800">{safari.destination}</span>
                    </div>
                  </div>

                  <Link
                    href={`/booking?safari=${safari.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full transition-all hover:shadow-lg group text-lg"
                  >
                    Book This Safari
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <p className="text-center text-xs text-warm-500 mt-3">
                    Free cancellation up to 90 days before departure
                  </p>
                </motion.div>

                {/* Contact Card */}
                <div className="bg-earth-800 rounded-2xl p-6 text-center">
                  <Shield className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-2">Need Help Deciding?</h3>
                  <p className="text-warm-400 text-sm mb-4">
                    Our safari experts are happy to answer any questions.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Safaris */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-earth-800 font-serif mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedSafaris.map((s, i) => (
                <SafariCard key={s.slug} safari={s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
