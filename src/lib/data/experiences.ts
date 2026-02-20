export interface Experience {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  relatedSafariSlugs: string[];
}

export const experiences: Experience[] = [
  {
    slug: "wildlife-safaris",
    title: "Wildlife Safaris",
    tagline: "Witness the Big Five and beyond",
    description:
      "Our wildlife safaris take you to the heart of Africa's most iconic ecosystems. From the Great Migration in the Serengeti and Masai Mara to the elephant herds of Amboseli and the predators of the Okavango Delta, every game drive is a front-row seat to nature's greatest show. Our expert guides know every trail, every waterhole, and every secret spot.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
    highlights: [
      "Big Five game drives",
      "Great Migration spectacle",
      "Night and walking safaris",
      "Expert naturalist guides",
      "Luxury lodge and tented camp stays",
      "Private and group options",
    ],
    relatedSafariSlugs: ["masai-mara-great-migration", "serengeti-luxury-escape", "okavango-delta-expedition"],
  },
  {
    slug: "beach-holidays",
    title: "Beach Holidays",
    tagline: "Safari meets paradise",
    description:
      "Combine the thrill of safari with the serenity of Africa's most stunning coastlines. From the spice island of Zanzibar with its turquoise waters and historic Stone Town, to the pristine beaches of the East African coast, our beach holiday packages offer the perfect post-safari wind-down. Relax, snorkel, dive, or simply soak in the sun.",
    image: "https://images.unsplash.com/photo-1534177616064-886b3308811e?w=1200&q=80",
    highlights: [
      "Zanzibar white sand beaches",
      "Stone Town UNESCO heritage tours",
      "Sunset dhow cruises",
      "Snorkeling and diving",
      "Spice farm visits",
      "Boutique beach resort stays",
    ],
    relatedSafariSlugs: ["zanzibar-cultural-safari-beach"],
  },
  {
    slug: "mountain-climbing",
    title: "Mountain Climbing",
    tagline: "Conquer Africa's highest peaks",
    description:
      "Standing on the roof of Africa is a life-changing experience. Our mountain climbing expeditions take you to the summit of Mount Kilimanjaro — Africa's highest peak at 5,895m — via the most scenic routes with professional guides and porters. We also offer treks through the Rwenzori Mountains and volcanic peaks of Rwanda.",
    image: "https://images.unsplash.com/photo-1521150932951-303a95503ed3?w=1200&q=80",
    highlights: [
      "Kilimanjaro summit via Lemosho Route",
      "Professional mountain guides",
      "All equipment provided",
      "Acclimatization-focused itineraries",
      "Post-summit safari celebration",
      "Multiple difficulty levels",
    ],
    relatedSafariSlugs: ["kilimanjaro-trek-safari"],
  },
  {
    slug: "cultural-tours",
    title: "Cultural Tours",
    tagline: "Connect with Africa's people and traditions",
    description:
      "Africa's greatest treasure isn't just its wildlife — it's the people and cultures that have thrived here for millennia. Our cultural tours immerse you in authentic experiences: visiting Maasai villages, exploring Zanzibar's Stone Town, cooking traditional dishes, and engaging with local communities. These encounters create the deepest, most lasting memories.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80",
    highlights: [
      "Maasai village visits",
      "Traditional cooking classes",
      "Local community engagement",
      "Historical heritage sites",
      "Artisan craft workshops",
      "Music and dance experiences",
    ],
    relatedSafariSlugs: ["zanzibar-cultural-safari-beach", "kenya-youth-athletes-charity"],
  },
  {
    slug: "honeymoon",
    title: "Honeymoon Safaris",
    tagline: "Begin your forever in the wild",
    description:
      "There's nothing more romantic than watching a sunset over the African savanna with the person you love. Our honeymoon safaris blend luxury, adventure, and intimacy — from private game drives and candlelit bush dinners to overwater suites in Zanzibar and hot air balloon rides over the Serengeti. Let Africa be the backdrop to your love story.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&q=80",
    highlights: [
      "Private luxury lodges",
      "Candlelit bush dinners",
      "Hot air balloon safaris",
      "Zanzibar beach extension",
      "Champagne sundowners",
      "Fully customizable itineraries",
    ],
    relatedSafariSlugs: ["serengeti-luxury-escape", "zanzibar-cultural-safari-beach"],
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
