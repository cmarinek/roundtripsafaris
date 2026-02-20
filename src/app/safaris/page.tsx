"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SafariCard from "@/components/ui/SafariCard";
import { safaris } from "@/lib/data/safaris";

const categories = [
  { value: "all", label: "All Safaris" },
  { value: "wildlife", label: "Wildlife" },
  { value: "luxury", label: "Luxury" },
  { value: "adventure", label: "Adventure" },
  { value: "charity", label: "Charity" },
  { value: "cultural", label: "Cultural" },
];

const destinationFilters = [
  { value: "all", label: "All Destinations" },
  { value: "Kenya", label: "Kenya" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "Botswana", label: "Botswana" },
];

export default function SafarisPage() {
  const [category, setCategory] = useState("all");
  const [destination, setDestination] = useState("all");

  const filtered = safaris.filter((s) => {
    const catMatch = category === "all" || s.category === category;
    const destMatch = destination === "all" || s.destination === destination;
    return catMatch && destMatch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1920&q=80"
            alt="Safari vehicles in the wild"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-900/80 via-earth-900/60 to-earth-900/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Our Adventures
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif">
              Safari Packages
            </h1>
            <p className="mt-4 text-lg text-warm-200 max-w-2xl">
              From wildlife spectacles to luxury escapes — find the perfect African adventure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Safaris */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-md border border-warm-200/50 mb-12"
          >
            <div className="flex items-center gap-2 mb-4 text-earth-800">
              <Filter className="w-5 h-5" />
              <span className="font-semibold">Filter Safaris</span>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="text-sm text-warm-600 mb-2 block">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setCategory(cat.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        category === cat.value
                          ? "bg-amber-600 text-white shadow-md"
                          : "bg-warm-100 text-warm-700 hover:bg-warm-200"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <label className="text-sm text-warm-600 mb-2 block">Destination</label>
                <div className="flex flex-wrap gap-2">
                  {destinationFilters.map((dest) => (
                    <button
                      key={dest.value}
                      onClick={() => setDestination(dest.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        destination === dest.value
                          ? "bg-terra-500 text-white shadow-md"
                          : "bg-warm-100 text-warm-700 hover:bg-warm-200"
                      }`}
                    >
                      {dest.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <div className="mb-6 text-warm-600">
            Showing {filtered.length} safari{filtered.length !== 1 ? "s" : ""}
          </div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((safari, i) => (
                <SafariCard key={safari.slug} safari={safari} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-warm-600 text-lg">
                No safaris match your current filters. Try adjusting your selection.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
