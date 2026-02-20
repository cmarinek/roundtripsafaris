import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react";

const quickLinks = [
  { href: "/safaris", label: "Safari Packages" },
  { href: "/destinations", label: "Destinations" },
  { href: "/charity", label: "Community Impact" },
  { href: "/booking", label: "Book a Safari" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
];

const destinations = [
  { href: "/destinations#kenya", label: "Kenya" },
  { href: "/destinations#tanzania", label: "Tanzania" },
  { href: "/destinations#botswana", label: "Botswana" },
];

export default function Footer() {
  return (
    <footer className="bg-earth-800 text-warm-200">
      {/* CTA Banner */}
      <div className="bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">
              Ready for Your African Adventure?
            </h3>
            <p className="text-amber-100 mt-2 text-lg">
              Let us craft your perfect safari experience.
            </p>
          </div>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-earth-800 font-bold rounded-full hover:bg-warm-100 transition-all hover:shadow-xl group text-lg"
          >
            Start Planning
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-xl group-hover:bg-amber-500 transition-colors">
                RT
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-tight">
                  RoundTrip
                </span>
                <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">
                  Safaris
                </span>
              </div>
            </Link>
            <p className="mt-4 text-warm-400 leading-relaxed">
              Premium African safari experiences from Plano, TX. Crafting
              unforgettable journeys across Kenya, Tanzania, and Botswana since
              day one.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/roundtripsafaris"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/roundtripsafaris"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Destinations
            </h4>
            <ul className="space-y-3">
              {destinations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12028839907"
                  className="flex items-start gap-3 text-warm-400 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>(202) 883-9907</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@roundtripsafaris.com"
                  className="flex items-start gap-3 text-warm-400 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>info@roundtripsafaris.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-warm-400">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>
                    Republic Drive
                    <br />
                    Plano, TX
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-warm-500">
          <p>&copy; {new Date().getFullYear()} RoundTrip Safaris. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/faq" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/faq" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
