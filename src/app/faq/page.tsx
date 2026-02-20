"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Search } from "lucide-react";
import { faqItems } from "@/lib/data/faq";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categories = [
  { value: "all", label: "All Questions" },
  { value: "general", label: "General" },
  { value: "booking", label: "Booking" },
  { value: "travel", label: "Travel" },
  { value: "safety", label: "Safety" },
  { value: "charity", label: "Charity" },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filtered = faqItems.filter((item) => {
    const catMatch = activeCategory === "all" || item.category === activeCategory;
    const searchMatch =
      search === "" ||
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-earth-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-hero max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
              Help Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-[0.95]">
              Frequently Asked<br />Questions
            </h1>
            <p className="mt-4 text-lg text-warm-300 max-w-xl">
              Everything you need to know about planning your African safari.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-earth-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <ScrollReveal>
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-warm-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-lg"
              />
            </div>
          </ScrollReveal>

          {/* Category Filters */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => { setActiveCategory(cat.value); setOpenIndex(null); }}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                    activeCategory === cat.value
                      ? "bg-amber-600 text-white shadow-lg shadow-amber-600/20"
                      : "bg-white/5 text-warm-300 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* FAQ Items */}
          <div className="space-y-3">
            {filtered.map((item, i) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-warm-500 shrink-0 transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-warm-400 leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-warm-400 text-lg">
                No questions match your search. Try different keywords or{" "}
                <Link href="/contact" className="text-amber-500 hover:text-amber-400 transition-colors">
                  contact us
                </Link>
                .
              </p>
            </div>
          )}

          {/* Still Have Questions */}
          <ScrollReveal>
            <div className="mt-16 glass rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-4">
                Still Have Questions?
              </h2>
              <p className="text-warm-400 mb-8 max-w-xl mx-auto">
                Our safari experts are always happy to help. Reach out and we&apos;ll
                get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary text-sm tracking-[0.05em] uppercase group"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+12028839907"
                  className="btn-ghost text-sm tracking-[0.05em] uppercase"
                >
                  Call (202) 883-9907
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
