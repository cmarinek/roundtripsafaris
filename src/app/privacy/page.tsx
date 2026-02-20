export default function PrivacyPage() {
  return (
    <section className="bg-earth-900 pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-hero mb-12">
          <span className="inline-flex items-center px-4 py-1.5 bg-white/10 border border-white/10 rounded-full text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif leading-[0.95]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-warm-400">Last updated: February 2026</p>
        </div>

        <div className="prose-dark space-y-8 text-warm-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including your name, email address, phone number, and travel preferences when you book a safari, submit a contact form, or subscribe to our newsletter. We also collect information about your browsing behavior on our website.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to process your bookings, communicate with you about our services, send promotional materials (with your consent), improve our website, and comply with legal obligations.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">3. Information Sharing</h2>
            <p>We do not sell your personal information. We may share your information with our trusted safari partners (lodges, guides, airlines) as necessary to fulfill your booking, with payment processors to handle transactions, and with service providers who assist us in operating our website.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact us at info@roundtripsafaris.com.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">6. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:<br />
            RoundTrip Safaris<br />
            Republic Drive, Plano, TX<br />
            info@roundtripsafaris.com<br />
            (202) 883-9907</p>
          </div>
        </div>
      </div>
    </section>
  );
}
