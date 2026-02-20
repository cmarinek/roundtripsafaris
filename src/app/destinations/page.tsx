"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Sun, Calendar, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SafariCard from "@/components/ui/SafariCard";
import { destinations } from "@/lib/data/destinations";
import { getSafarisByDestination } from "@/lib/data/safaris";

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&q=80"
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
              Where We Go
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif">
              Our Destinations
            </h1>
            <p className="mt-4 text-lg text-warm-200 max-w-2xl">
              Three extraordinary countries, endless possibilities for adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      {destinations.map((dest, idx) => {
        const destSafaris = getSafarisByDestination(dest.name);
        const isEven = idx % 2 === 0;

        return (
          <section
            key={dest.slug}
            id={dest.slug}
            className={`py-24 ${isEven ? "bg-warm-50" : "bg-warm-100"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={!isEven ? "lg:order-2" : ""}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    <span className="text-sm font-semibold tracking-widest uppercase text-amber-600">
                      {dest.country}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-earth-800 font-serif">
                    {dest.name}
                  </h2>
                  <p className="text-xl text-warm-600 mt-2 italic">{dest.tagline}</p>
                  <p className="mt-6 text-warm-700 leading-relaxed">{dest.description}</p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 border border-warm-200/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-terra-500" />
                        <span className="text-sm font-semibold text-earth-800">Best Time to Visit</span>
                      </div>
                      <p className="text-sm text-warm-600">{dest.bestTime}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-warm-200/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Sun className="w-4 h-4 text-amber-500" />
                        <span className="text-sm font-semibold text-earth-800">Climate</span>
                      </div>
                      <p className="text-sm text-warm-600">{dest.climate}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-earth-800 mb-3 uppercase tracking-wider">Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="px-3 py-1.5 bg-amber-100 text-amber-800 text-sm rounded-full font-medium"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg ${!isEven ? "lg:order-1" : ""}`}
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>

              {/* Destination Safaris */}
              {destSafaris.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-2xl font-bold text-earth-800 font-serif mb-8">
                    Safaris in {dest.name}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destSafaris.map((safari, i) => (
                      <SafariCard key={safari.slug} safari={safari} index={i} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
