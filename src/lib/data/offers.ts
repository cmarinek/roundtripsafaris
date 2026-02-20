export interface Offer {
  slug: string;
  title: string;
  description: string;
  image: string;
  discount: string;
  validUntil: string;
  destinations: string[];
  originalPrice: number;
  offerPrice: number;
  highlights: string[];
}

export const offers: Offer[] = [
  {
    slug: "early-bird-migration",
    title: "Early Bird Great Migration",
    description:
      "Book your 2026 Great Migration safari before March 31st and save. Witness the world's most spectacular wildlife event in Kenya's Masai Mara with premium accommodation and expert guides.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
    discount: "15% Off",
    validUntil: "March 31, 2026",
    destinations: ["Kenya"],
    originalPrice: 4500,
    offerPrice: 3825,
    highlights: [
      "7-day Masai Mara expedition",
      "Luxury tented camp",
      "Private game drives",
      "Flying Doctors cover included",
    ],
  },
  {
    slug: "honeymoon-escape",
    title: "Honeymoon Safari & Beach Escape",
    description:
      "Celebrate your love with a curated honeymoon package combining Serengeti luxury with Zanzibar beach paradise. Includes private dining, spa treatments, and sunset dhow cruise.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&q=80",
    discount: "Complimentary Upgrades",
    validUntil: "December 31, 2026",
    destinations: ["Tanzania"],
    originalPrice: 8500,
    offerPrice: 7650,
    highlights: [
      "Private Serengeti lodge",
      "Zanzibar beach resort",
      "Candlelit bush dinner",
      "Sunset dhow cruise",
    ],
  },
  {
    slug: "group-charity-2026",
    title: "2026 Kenya Youth Athletes Trip",
    description:
      "Join our annual charity group trip to Kenya. Coach youth athletes, donate sports equipment, and experience an Amboseli safari with views of Mount Kilimanjaro. Limited spots available.",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80",
    discount: "Group Rate",
    validUntil: "Spots filling fast",
    destinations: ["Kenya"],
    originalPrice: 3200,
    offerPrice: 2900,
    highlights: [
      "8-day immersive experience",
      "Sports clinics & mentorship",
      "Amboseli National Park safari",
      "Community cultural exchange",
    ],
  },
  {
    slug: "gorilla-trekking-special",
    title: "Gorilla Trekking Adventure",
    description:
      "A rare opportunity to trek through misty forests and come face-to-face with endangered mountain gorillas in Uganda or Rwanda. Includes permits, luxury eco-lodge stay, and expert tracking guides.",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=1200&q=80",
    discount: "10% Off",
    validUntil: "June 30, 2026",
    destinations: ["Uganda", "Rwanda"],
    originalPrice: 5500,
    offerPrice: 4950,
    highlights: [
      "Gorilla trekking permits included",
      "Luxury eco-lodge accommodation",
      "Expert tracking guides",
      "Chimpanzee tracking option",
    ],
  },
];
