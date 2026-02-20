import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "RoundTrip Safaris | Luxury African Safari Experiences Since 2003",
    template: "%s | RoundTrip Safaris",
  },
  description:
    "Experience the magic of Africa with RoundTrip Safaris. Premium wildlife safaris, luxury accommodations, and expert guides across Kenya, Tanzania, Botswana, Uganda, and Rwanda. Based in Plano, TX. Established 2003.",
  keywords: [
    "African safari",
    "Kenya safari",
    "Tanzania safari",
    "Botswana safari",
    "Uganda safari",
    "Rwanda safari",
    "luxury safari",
    "wildlife safari",
    "safari tours",
    "honeymoon safari",
    "gorilla trekking",
    "Plano TX travel agent",
    "Dallas safari",
    "charity safari",
    "beach holidays Africa",
    "Kilimanjaro trek",
  ],
  openGraph: {
    title: "RoundTrip Safaris | Luxury African Safari Experiences Since 2003",
    description:
      "Premium wildlife safaris, luxury accommodations, and expert guides across East and Southern Africa.",
    type: "website",
    locale: "en_US",
    siteName: "RoundTrip Safaris",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <style>{`[style*="opacity"]{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function() {
                  document.querySelectorAll('[style]').forEach(function(el) {
                    if (getComputedStyle(el).opacity === '0') {
                      el.style.opacity = '1';
                      el.style.transform = 'none';
                    }
                  });
                }, 3000);
              });
            `,
          }}
        />
      </head>
      <body className="antialiased bg-earth-900 text-earth-50">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1C1512",
              color: "#F5F0EB",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.06)",
            },
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
