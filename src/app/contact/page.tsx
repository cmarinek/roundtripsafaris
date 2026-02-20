"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook } from "lucide-react";
import toast from "react-hot-toast";
import SectionHeading from "@/components/ui/SectionHeading";

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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitting(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534177616064-886b3308811e?w=1920&q=80"
            alt="Beautiful African coastline"
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-warm-200 max-w-2xl">
              Ready to start planning your African adventure? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-earth-800 font-serif mb-6">
                  Let&apos;s Connect
                </h2>
                <p className="text-warm-600 leading-relaxed">
                  Whether you have a question about our safaris, want to discuss a
                  custom itinerary, or are ready to book, our team is here to help.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="tel:+12028839907"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-200 transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-800">Phone</h3>
                    <p className="text-warm-600 group-hover:text-amber-600 transition-colors">
                      (202) 883-9907
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@roundtripsafaris.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-terra-100 rounded-xl flex items-center justify-center group-hover:bg-terra-200 transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-terra-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-800">Email</h3>
                    <p className="text-warm-600 group-hover:text-terra-600 transition-colors">
                      info@roundtripsafaris.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-safari-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-safari-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-800">Office</h3>
                    <p className="text-warm-600">
                      Republic Drive<br />
                      Plano, TX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-warm-200 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-warm-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-800">Hours</h3>
                    <p className="text-warm-600">
                      Mon – Fri: 9:00 AM – 6:00 PM<br />
                      Sat: 10:00 AM – 4:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-earth-800 mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/roundtripsafaris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-warm-200 flex items-center justify-center hover:bg-amber-200 transition-colors text-warm-700 hover:text-amber-700"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/roundtripsafaris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-warm-200 flex items-center justify-center hover:bg-amber-200 transition-colors text-warm-700 hover:text-amber-700"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-warm-200/50">
                <h2 className="text-2xl font-bold text-earth-800 font-serif mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-warm-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-warm-50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-earth-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-warm-50"
                        placeholder="(xxx) xxx-xxxx"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-earth-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-warm-50"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="booking">Booking Question</option>
                        <option value="custom">Custom Safari</option>
                        <option value="charity">Charity Trip</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-warm-50 resize-none"
                      placeholder="Tell us about your dream safari..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed text-lg"
                  >
                    {submitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
