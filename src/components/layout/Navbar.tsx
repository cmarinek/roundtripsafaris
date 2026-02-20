"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/safaris", label: "Safaris" },
  { href: "/experiences", label: "Experiences" },
  { href: "/destinations", label: "Destinations" },
  { href: "/honeymoon", label: "Honeymoon" },
  { href: "/charity", label: "Community" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-earth-900/95 backdrop-blur-xl border-b border-amber-600/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex flex-col group relative z-10">
            <span className="text-white font-sans text-[11px] font-semibold tracking-[0.3em] uppercase leading-none">
              RoundTrip
            </span>
            <span className="text-amber-500 font-sans text-[10px] font-medium tracking-[0.35em] uppercase leading-none mt-0.5">
              Safaris
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[11px] font-medium tracking-[0.15em] uppercase transition-colors ${
                    isActive
                      ? "text-amber-500"
                      : "text-warm-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-px bg-amber-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side — Phone + CTA + Mobile toggle */}
          <div className="flex items-center gap-4 relative z-10">
            <a
              href="tel:+12028839907"
              className="hidden xl:flex items-center gap-2 text-warm-400 hover:text-amber-500 transition-colors text-xs tracking-wide"
            >
              <Phone className="w-3.5 h-3.5" />
              (202) 883-9907
            </a>
            <Link
              href="/booking"
              className="hidden sm:inline-flex btn-outline text-xs !px-5 !py-2.5 tracking-[0.1em] uppercase"
            >
              Book Safari
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-amber-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 bg-earth-900/98 backdrop-blur-xl lg:hidden z-40"
          >
            <div className="flex flex-col justify-center items-center h-full px-8">
              <div className="space-y-2 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <Link
                    href="/"
                    className={`block py-3 text-2xl font-serif font-medium tracking-wide transition-colors ${
                      pathname === "/"
                        ? "text-amber-500"
                        : "text-warm-200 hover:text-white"
                    }`}
                  >
                    Home
                  </Link>
                </motion.div>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (i + 1) * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-3 text-2xl font-serif font-medium tracking-wide transition-colors ${
                        pathname === link.href
                          ? "text-amber-500"
                          : "text-warm-200 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-col items-center gap-4"
              >
                <Link href="/booking" className="btn-primary text-sm tracking-[0.1em] uppercase">
                  Book Your Safari
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+12028839907"
                  className="flex items-center gap-2 text-warm-400 hover:text-amber-500 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (202) 883-9907
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
