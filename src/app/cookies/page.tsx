export default function CookiesPage() {
  return (
    <section className="bg-earth-900 pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-hero mb-12">
          <span className="inline-flex items-center px-4 py-1.5 bg-white/10 border border-white/10 rounded-full text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif leading-[0.95]">
            Cookie Policy
          </h1>
          <p className="mt-4 text-warm-400">Last updated: February 2026</p>
        </div>

        <div className="prose-dark space-y-8 text-warm-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and to provide information to the website owners.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">How We Use Cookies</h2>
            <p>We use cookies to understand how you interact with our website, remember your preferences, and improve your overall experience. We use essential cookies (required for the website to function), analytics cookies (to understand how visitors use our site), and preference cookies (to remember your settings).</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">Managing Cookies</h2>
            <p>Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. However, please note that disabling cookies may affect some features of our website.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-serif mb-3">Contact</h2>
            <p>If you have questions about our use of cookies, please contact us at:<br />
            info@roundtripsafaris.com<br />
            (202) 883-9907</p>
          </div>
        </div>
      </div>
    </section>
  );
}
