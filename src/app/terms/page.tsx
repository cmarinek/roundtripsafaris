export default function TermsPage() {
  return (
    <section className="bg-earth-900 pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-hero mb-12">
          <span className="inline-flex items-center px-4 py-1.5 bg-white/10 border border-white/10 rounded-full text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif leading-[0.95]">
            Terms of Service
          </h1>
          <p className="mt-4 text-warm-400">Last updated: February 2026</p>
        </div>

        <div className="prose-dark space-y-8 text-warm-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">1. Booking & Payments</h2>
            <p>A 30% deposit is required to confirm your booking. The remaining balance is due 60 days before the departure date. All prices are quoted in US dollars per person unless otherwise stated. Prices may vary based on season, availability, and group size.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">2. Cancellation Policy</h2>
            <p>Free cancellation is available up to 90 days before departure for a full refund of the deposit. Cancellations between 60-89 days before departure will receive a 50% refund. Cancellations less than 60 days before departure are non-refundable. We strongly recommend purchasing travel insurance.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">3. Travel Insurance</h2>
            <p>Comprehensive travel insurance is mandatory for all travelers. Insurance must cover trip cancellation, medical expenses, emergency evacuation, and personal belongings. Proof of insurance may be requested before departure.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">4. Health & Safety</h2>
            <p>Travelers are responsible for obtaining all necessary vaccinations and medications for their destination. We recommend consulting with a travel health specialist at least 6 weeks before departure. RoundTrip Safaris will provide guidance on health requirements for each destination.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">5. Liability</h2>
            <p>RoundTrip Safaris acts as an agent for various service providers including airlines, hotels, lodges, and ground transport operators. While we exercise due diligence in selecting our partners, we cannot be held responsible for the acts or omissions of these third-party providers.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">6. Changes to Itinerary</h2>
            <p>While we make every effort to operate trips as planned, we reserve the right to make changes to the itinerary due to weather, wildlife movements, road conditions, or other circumstances beyond our control. Alternative arrangements of comparable quality will be provided.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">7. Contact</h2>
            <p>For questions about these terms, contact us at:<br />
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
