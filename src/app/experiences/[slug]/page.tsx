import { experiences } from "@/lib/data/experiences";
import ExperienceDetailClient from "./ExperienceDetailClient";

export function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export default function ExperienceDetailPage() {
  return <ExperienceDetailClient />;
}
