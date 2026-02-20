import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "RoundTrip Safaris | Premium African Safari Experiences",
    template: "%s | RoundTrip Safaris",
  },
  description:
    "Experience the magic of Africa with RoundTrip Safaris. Premium wildlife safaris, luxury accommodations, and expert guides across Kenya, Tanzania, and Botswana. Based in Plano, TX.",
  keywords: [
    "African safari",
    "Kenya safari",
    "Tanzania safari",
    "Botswana safari",
    "luxury safari",
    "wildlife safari",
    "safari tours",
    "Plano TX travel agent",
    "Dallas safari",
    "charity safari",
  ],
  openGraph: {
    title: "RoundTrip Safaris | Premium African Safari Experiences",
    description:
      "Experience the magic of Africa with premium wildlife safaris, luxury accommodations, and expert guides.",
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
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#2C1810",
              color: "#FDF8F0",
              borderRadius: "12px",
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
