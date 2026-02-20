import { safaris } from "@/lib/data/safaris";
import SafariDetailClient from "./SafariDetailClient";

export function generateStaticParams() {
  return safaris.map((safari) => ({
    slug: safari.slug,
  }));
}

export default function SafariDetailPage() {
  return <SafariDetailClient />;
}
