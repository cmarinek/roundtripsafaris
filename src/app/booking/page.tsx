"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight, ChevronLeft, Check, Calendar, Users, MapPin,
  CreditCard, User, Mail, Phone, ArrowRight, Shield,
} from "lucide-react";
import toast from "react-hot-toast";
import { safaris } from "@/lib/data/safaris";

type BookingStep = 1 | 2 | 3 | 4;

interface BookingData {
  safari: string;
  date: string;
  travelers: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  specialRequests: string;
  emergencyName: string;
  emergencyPhone: string;
  agreeTerms: boolean;
}

const steps = [
  { num: 1, label: "Select Safari", icon: MapPin },
  { num: 2, label: "Choose Date", icon: Calendar },
  { num: 3, label: "Traveler Details", icon: User },
  { num: 4, label: "Confirm & Pay", icon: CreditCard },
];

const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-warm-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all";

function BookingContent() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("safari") || "";

  const [step, setStep] = useState<BookingStep>(preselected ? 2 : 1);
  const [data, setData] = useState<BookingData>({
    safari: preselected,
    date: "",
    travelers: 2,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "United States",
    specialRequests: "",
    emergencyName: "",
    emergencyPhone: "",
    agreeTerms: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedSafari = safaris.find((s) => s.slug === data.safari);

  const updateField = (field: keyof BookingData, value: string | number | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4) as BookingStep);
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1) as BookingStep);

  const canProceed = () => {
    switch (step) {
      case 1: return !!data.safari;
      case 2: return !!data.date && data.travelers >= 1;
      case 3: return !!data.firstName && !!data.lastName && !!data.email && !!data.phone;
      case 4: return data.agreeTerms;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Booking request submitted successfully!");
  };

  const availableDates: string[] = [];
  const now = new Date();
  for (let i = 2; i <= 14; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    availableDates.push(d.toISOString().split("T")[0]);
    const d2 = new Date(now.getFullYear(), now.getMonth() + i, 15);
    availableDates.push(d2.toISOString().split("T")[0]);
  }

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center py-32 bg-earth-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto px-4 text-center"
        >
          <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
            Booking Request Received!
          </h1>
          <p className="text-warm-300 text-lg mb-2">
            Thank you, {data.firstName}! We&apos;ve received your booking request for:
          </p>
          <p className="text-xl font-bold text-amber-500 mb-6">
            {selectedSafari?.title}
          </p>
          <p className="text-warm-400 mb-8">
            Our team will review your request and send you a detailed confirmation
            with payment instructions within 24 hours. Check your email at{" "}
            <strong className="text-white">{data.email}</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary text-sm tracking-[0.05em] uppercase">
              Back to Home
            </Link>
            <Link href="/safaris" className="btn-ghost text-sm tracking-[0.05em] uppercase">
              Browse More Safaris
            </Link>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={selectedSafari?.image || "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"}
            alt="Book your safari"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/60 to-earth-900/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="animate-hero">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
              Book Your Safari
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif leading-[0.95]">
              {selectedSafari ? selectedSafari.title : "Start Your Adventure"}
            </h1>
            <p className="mt-3 text-warm-300 text-lg">
              Complete the steps below to secure your African safari experience.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-12 bg-earth-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-6 left-0 right-0 h-px bg-white/10" />
              <div
                className="absolute top-6 left-0 h-px bg-amber-600 transition-all duration-500"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
              {steps.map((s) => (
                <div key={s.num} className="relative flex flex-col items-center z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      step >= s.num
                        ? "bg-amber-600 text-white shadow-lg shadow-amber-600/25"
                        : "bg-white/5 border border-white/10 text-warm-500"
                    }`}
                  >
                    {step > s.num ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <s.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium hidden sm:block ${
                      step >= s.num ? "text-amber-500" : "text-warm-500"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step 1: Select Safari */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-white font-serif mb-6">
                    Choose Your Safari Experience
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {safaris.map((safari) => (
                      <button
                        key={safari.slug}
                        onClick={() => updateField("safari", safari.slug)}
                        className={`text-left rounded-xl border-2 overflow-hidden transition-all ${
                          data.safari === safari.slug
                            ? "border-amber-600 shadow-lg shadow-amber-600/10"
                            : "border-white/10 hover:border-white/20 bg-white/5"
                        }`}
                      >
                        <div className="flex gap-4 p-4">
                          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={safari.image}
                              alt={safari.title}
                              fill
                              className="object-cover"
                              sizes="96px"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-white truncate">
                              {safari.title}
                            </h3>
                            <p className="text-sm text-warm-400 mt-0.5">
                              {safari.destination} &middot; {safari.duration}
                            </p>
                            <p className="text-sm font-bold text-amber-500 mt-1">
                              From ${safari.price.toLocaleString()}/person
                            </p>
                            {data.safari === safari.slug && (
                              <div className="mt-1 flex items-center gap-1 text-xs text-amber-400 font-medium">
                                <Check className="w-3 h-3" />
                                Selected
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Travelers */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-white font-serif mb-6">
                    Select Date & Group Size
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass rounded-2xl p-6">
                      <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-amber-500" />
                        Departure Date
                      </h3>
                      <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto pr-2">
                        {availableDates.map((date) => {
                          const d = new Date(date + "T00:00:00");
                          const formatted = d.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          });
                          return (
                            <button
                              key={date}
                              onClick={() => updateField("date", date)}
                              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                                data.date === date
                                  ? "bg-amber-600 text-white shadow-md"
                                  : "bg-white/5 text-warm-300 hover:bg-white/10 border border-white/10"
                              }`}
                            >
                              {formatted}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="glass rounded-2xl p-6">
                        <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-amber-500" />
                          Number of Travelers
                        </h3>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => updateField("travelers", Math.max(1, data.travelers - 1))}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold text-warm-400 hover:border-amber-500 hover:text-amber-500 transition-colors"
                          >
                            -
                          </button>
                          <span className="text-3xl font-bold text-white w-12 text-center">
                            {data.travelers}
                          </span>
                          <button
                            onClick={() => updateField("travelers", Math.min(25, data.travelers + 1))}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold text-warm-400 hover:border-amber-500 hover:text-amber-500 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm text-warm-500 mt-2">
                          {selectedSafari?.groupSize}
                        </p>
                      </div>

                      {selectedSafari && (
                        <div className="glass rounded-2xl p-6 border-amber-500/20">
                          <h3 className="font-semibold text-white mb-3">
                            Pricing Summary
                          </h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-warm-400">{selectedSafari.title}</span>
                              <span className="font-medium text-white">${selectedSafari.price.toLocaleString()}/person</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-warm-400">Travelers</span>
                              <span className="font-medium text-white">&times; {data.travelers}</span>
                            </div>
                            <div className="border-t border-white/10 my-2" />
                            <div className="flex justify-between text-lg font-bold text-white">
                              <span>Estimated Total</span>
                              <span className="text-amber-500">${(selectedSafari.price * data.travelers).toLocaleString()}</span>
                            </div>
                          </div>
                          <p className="text-xs text-warm-500 mt-3">
                            Final pricing confirmed upon booking review.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Traveler Details */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-white font-serif mb-6">
                    Your Details
                  </h2>
                  <div className="glass rounded-2xl p-6 md:p-8 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-warm-400 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={data.firstName}
                          onChange={(e) => updateField("firstName", e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-warm-400 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={data.lastName}
                          onChange={(e) => updateField("lastName", e.target.value)}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-warm-400 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={data.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-warm-400 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={data.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-warm-400 mb-2">
                        Country of Residence
                      </label>
                      <input
                        type="text"
                        value={data.country}
                        onChange={(e) => updateField("country", e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-warm-400 mb-2">
                        Special Requests or Dietary Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={data.specialRequests}
                        onChange={(e) => updateField("specialRequests", e.target.value)}
                        className={`${inputClass} resize-none`}
                        placeholder="Allergies, mobility requirements, celebrations, etc."
                      />
                    </div>

                    <div className="border-t border-white/10 pt-6">
                      <h3 className="font-semibold text-white mb-4">
                        Emergency Contact
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-warm-400 mb-2">
                            Contact Name
                          </label>
                          <input
                            type="text"
                            value={data.emergencyName}
                            onChange={(e) => updateField("emergencyName", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-warm-400 mb-2">
                            Contact Phone
                          </label>
                          <input
                            type="tel"
                            value={data.emergencyPhone}
                            onChange={(e) => updateField("emergencyPhone", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirm */}
              {step === 4 && selectedSafari && (
                <div>
                  <h2 className="text-2xl font-bold text-white font-serif mb-6">
                    Review & Confirm
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="glass rounded-2xl p-6">
                        <h3 className="font-semibold text-white mb-4">Safari Details</h3>
                        <div className="flex gap-4 mb-4">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={selectedSafari.image}
                              alt={selectedSafari.title}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{selectedSafari.title}</h4>
                            <p className="text-sm text-warm-400">{selectedSafari.destination} &middot; {selectedSafari.duration}</p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm border-t border-white/10 pt-4">
                          <div className="flex justify-between">
                            <span className="text-warm-400">Departure Date</span>
                            <span className="font-medium text-white">{new Date(data.date + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-warm-400">Travelers</span>
                            <span className="font-medium text-white">{data.travelers}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-warm-400">Price per person</span>
                            <span className="font-medium text-white">${selectedSafari.price.toLocaleString()}</span>
                          </div>
                          <div className="border-t border-white/10 my-2" />
                          <div className="flex justify-between text-lg font-bold">
                            <span className="text-white">Estimated Total</span>
                            <span className="text-amber-500">${(selectedSafari.price * data.travelers).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="glass rounded-2xl p-6">
                        <h3 className="font-semibold text-white mb-4">Traveler Information</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-warm-400">Name</span>
                            <span className="font-medium text-white">{data.firstName} {data.lastName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-warm-400">Email</span>
                            <span className="font-medium text-white">{data.email}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-warm-400">Phone</span>
                            <span className="font-medium text-white">{data.phone}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-warm-400">Country</span>
                            <span className="font-medium text-white">{data.country}</span>
                          </div>
                          {data.specialRequests && (
                            <div className="pt-2 border-t border-white/10">
                              <span className="text-warm-400">Special Requests:</span>
                              <p className="font-medium text-white mt-1">{data.specialRequests}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="glass rounded-2xl p-6">
                        <h3 className="font-semibold text-white mb-4">Important Information</h3>
                        <ul className="space-y-3 text-sm text-warm-400">
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                            This is a booking request. Final confirmation and payment details will be sent via email within 24 hours.
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                            A 30% deposit is required to secure your booking. Balance is due 60 days before departure.
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                            Free cancellation up to 90 days before departure. See our FAQ for full cancellation policy.
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                            Travel insurance is required for all travelers.
                          </li>
                        </ul>
                      </div>

                      <div className="glass rounded-2xl p-6 border-amber-500/20">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={data.agreeTerms}
                            onChange={(e) => updateField("agreeTerms", e.target.checked)}
                            className="mt-1 w-5 h-5 rounded border-white/20 bg-white/5 text-amber-600 focus:ring-amber-500"
                          />
                          <span className="text-sm text-warm-300">
                            I understand this is a booking request and agree to be contacted by
                            RoundTrip Safaris to finalize my booking. I have read and accept the
                            cancellation policy and terms of service.
                          </span>
                        </label>

                        <button
                          onClick={handleSubmit}
                          disabled={!canProceed() || submitting}
                          className="mt-6 w-full btn-primary text-sm tracking-[0.05em] uppercase justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {submitting ? (
                            "Submitting..."
                          ) : (
                            <>
                              Submit Booking Request
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>

                        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-warm-500">
                          <Shield className="w-4 h-4" />
                          Your information is secure and encrypted
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {!submitted && (
            <div className="flex justify-between mt-10">
              {step > 1 ? (
                <button
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-warm-300 font-medium rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
              ) : (
                <div />
              )}
              {step < 4 && (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="btn-primary text-sm tracking-[0.05em] uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-earth-900 pt-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-warm-400">Loading booking...</p>
          </div>
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
