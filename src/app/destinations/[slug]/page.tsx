import { destinations } from "@/lib/data/destinations";
import DestinationDetailClient from "./DestinationDetailClient";

export function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export default function DestinationDetailPage() {
  return <DestinationDetailClient />;
}
