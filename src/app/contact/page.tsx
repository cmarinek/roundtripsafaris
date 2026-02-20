"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook } from "lucide-react";
import toast from "react-hot-toast";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitting(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-earth-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-hero max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-[0.95]">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-warm-300 max-w-xl">
              Ready to start planning your African adventure? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <ScrollReveal animation="fade-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    Let&apos;s Connect
                  </h2>
                  <p className="text-warm-400 leading-relaxed">
                    Whether you have a question about our safaris, want to discuss a
                    custom itinerary, or are ready to book, our team is here to help.
                  </p>
                </div>

                <div className="space-y-5">
                  <a href="tel:+12028839907" className="flex items-start gap-4 group">
                    <div className="w-11 h-11 glass-card rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <Phone className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">Phone</h3>
                      <p className="text-warm-400 group-hover:text-amber-400 transition-colors">
                        (202) 883-9907
                      </p>
                    </div>
                  </a>

                  <a href="mailto:info@roundtripsafaris.com" className="flex items-start gap-4 group">
                    <div className="w-11 h-11 glass-card rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">Email</h3>
                      <p className="text-warm-400 group-hover:text-amber-400 transition-colors">
                        info@roundtripsafaris.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 glass-card rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">Office</h3>
                      <p className="text-warm-400">
                        Republic Drive<br />
                        Plano, TX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 glass-card rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">Hours</h3>
                      <p className="text-warm-400">
                        Mon – Fri: 9:00 AM – 6:00 PM EST<br />
                        Sat: 10:00 AM – 4:00 PM<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-white text-sm mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com/roundtripsafarisworldwide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-amber-500/20 transition-colors text-warm-400 hover:text-amber-500"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://facebook.com/roundtripsafaris"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-amber-500/20 transition-colors text-warm-400 hover:text-amber-500"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal animation="fade-left" className="lg:col-span-2">
              <div className="glass rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white font-serif mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold tracking-[0.1em] uppercase text-warm-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-warm-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold tracking-[0.1em] uppercase text-warm-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-warm-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold tracking-[0.1em] uppercase text-warm-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-warm-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="(xxx) xxx-xxxx"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold tracking-[0.1em] uppercase text-warm-400 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      >
                        <option value="" className="bg-earth-800">Select a subject</option>
                        <option value="general" className="bg-earth-800">General Inquiry</option>
                        <option value="booking" className="bg-earth-800">Booking Question</option>
                        <option value="custom" className="bg-earth-800">Custom Safari</option>
                        <option value="charity" className="bg-earth-800">Charity Trip</option>
                        <option value="other" className="bg-earth-800">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold tracking-[0.1em] uppercase text-warm-400 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-warm-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your dream safari..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary text-sm tracking-[0.05em] uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
