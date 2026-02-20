import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight, Clock } from "lucide-react";

const destinations = [
  { href: "/destinations/kenya", label: "Kenya" },
  { href: "/destinations/tanzania", label: "Tanzania" },
  { href: "/destinations/botswana", label: "Botswana" },
  { href: "/destinations/uganda", label: "Uganda" },
  { href: "/destinations/rwanda", label: "Rwanda" },
];

const experiences = [
  { href: "/experiences/wildlife-safaris", label: "Wildlife Safaris" },
  { href: "/experiences/beach-holidays", label: "Beach Holidays" },
  { href: "/experiences/mountain-climbing", label: "Mountain Climbing" },
  { href: "/experiences/cultural-tours", label: "Cultural Tours" },
  { href: "/experiences/honeymoon", label: "Honeymoon Safaris" },
];

const quickLinks = [
  { href: "/safaris", label: "Safari Packages" },
  { href: "/offers", label: "Special Offers" },
  { href: "/charity", label: "Community Impact" },
  { href: "/booking", label: "Book a Safari" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="relative bg-earth-900 border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group">
              <div className="flex flex-col">
                <span className="text-white font-sans text-sm font-semibold tracking-[0.3em] uppercase leading-none">
                  RoundTrip
                </span>
                <span className="text-amber-500 font-sans text-xs font-medium tracking-[0.35em] uppercase leading-none mt-1">
                  Safaris
                </span>
              </div>
            </Link>
            <p className="mt-5 text-warm-500 leading-relaxed max-w-sm text-sm">
              Luxury African safari experiences since 2003. Crafting unforgettable journeys
              across East and Southern Africa — from wildlife spectacles to cultural
              immersions and community impact.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/roundtripsafarisworldwide"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-warm-400 hover:text-amber-500 hover:border-amber-600/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/roundtripsafaris"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-warm-400 hover:text-amber-500 hover:border-amber-600/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-warm-600 text-xs">
              <Clock className="w-3.5 h-3.5" />
              Mon – Fri, 9 AM – 6 PM EST
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-warm-300 mb-5">
              Destinations
            </h4>
            <ul className="space-y-3">
              {destinations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-500 hover:text-amber-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-warm-300 mb-5">
              Experiences
            </h4>
            <ul className="space-y-3">
              {experiences.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-500 hover:text-amber-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-warm-300 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12028839907"
                  className="flex items-start gap-3 text-warm-500 hover:text-amber-500 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  (202) 883-9907
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@roundtripsafaris.com"
                  className="flex items-start gap-3 text-warm-500 hover:text-amber-500 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  info@roundtripsafaris.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-warm-500 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    Republic Drive<br />
                    Plano, TX
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors text-sm font-medium group"
              >
                Book Your Safari
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-600">
          <p>
            &copy; {new Date().getFullYear()} RoundTrip Safaris. Luxury African Safari Experiences Since 2003.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-amber-500 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-amber-500 transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-amber-500 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
