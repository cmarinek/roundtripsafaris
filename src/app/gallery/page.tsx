"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FullWidthCTA from "@/components/ui/FullWidthCTA";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80", alt: "Elephants on the savanna", category: "wildlife" },
  { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80", alt: "Lion in the wild", category: "wildlife" },
  { src: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80", alt: "Okavango Delta waterway", category: "landscape" },
  { src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80", alt: "Safari sunset", category: "landscape" },
  { src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800&q=80", alt: "Safari vehicle in the wild", category: "safari" },
  { src: "https://images.unsplash.com/photo-1534177616064-886b3308811e?w=800&q=80", alt: "Zanzibar beach", category: "landscape" },
  { src: "https://images.unsplash.com/photo-1521150932951-303a95503ed3?w=800&q=80", alt: "Mount Kilimanjaro", category: "landscape" },
  { src: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80", alt: "Community engagement", category: "community" },
  { src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80", alt: "Local children playing", category: "community" },
  { src: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=800&q=80", alt: "African village", category: "community" },
  { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80", alt: "Wildlife close-up", category: "wildlife" },
  { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80", alt: "Savanna panorama", category: "landscape" },
];

const categories = [
  { value: "all", label: "All Photos" },
  { value: "wildlife", label: "Wildlife" },
  { value: "landscape", label: "Landscapes" },
  { value: "safari", label: "Safari Life" },
  { value: "community", label: "Community" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null
    );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-earth-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-hero max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
              Visual Stories
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-[0.95]">
              Safari Gallery
            </h1>
            <p className="mt-4 text-lg text-warm-300 max-w-xl">
              A glimpse into the extraordinary moments our travelers experience.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    filter === cat.value
                      ? "bg-amber-600 text-white shadow-lg shadow-amber-600/20"
                      : "bg-white/5 text-warm-300 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="relative w-full overflow-hidden rounded-xl group cursor-pointer block"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={i % 3 === 0 ? 500 : i % 3 === 1 ? 350 : 400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-earth-900/0 group-hover:bg-earth-900/40 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium tracking-wide">
                      View
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <FullWidthCTA />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-earth-900/98 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-warm-400 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-400 hover:text-white transition-colors z-10 p-2"
              aria-label="Previous"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-400 hover:text-white transition-colors z-10 p-2"
              aria-label="Next"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] w-full"
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                sizes="100vw"
              />
              <p className="text-center text-warm-400 mt-4 text-sm">
                {filtered[lightboxIndex].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
