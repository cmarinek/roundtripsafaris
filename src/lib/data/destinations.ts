export interface Destination {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  bestTime: string;
  climate: string;
  safariCount: number;
}

export const destinations: Destination[] = [
  {
    slug: "kenya",
    name: "Kenya",
    country: "Kenya",
    tagline: "The birthplace of safari",
    description: "Kenya is the quintessential safari destination, home to the Great Migration, the Big Five, and the iconic Maasai Mara. From the snow-capped peak of Mount Kenya to the flamingo-lined shores of Lake Nakuru, this East African gem offers unparalleled diversity in landscapes and wildlife. Experience the warm hospitality of the Maasai people and create memories that last a lifetime.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
    highlights: [
      "Masai Mara National Reserve",
      "Amboseli National Park",
      "Great Migration river crossings",
      "Mount Kenya",
      "Lake Nakuru flamingos",
      "Maasai cultural experiences",
    ],
    bestTime: "July to October (Great Migration), January to February (calving season)",
    climate: "Tropical, with dry seasons ideal for safari viewing",
    safariCount: 2,
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    country: "Tanzania",
    tagline: "Where the Serengeti meets Kilimanjaro",
    description: "Tanzania is a land of superlatives — home to Africa's highest mountain, its largest game reserve, and the world-famous Serengeti. The Ngorongoro Crater, a UNESCO World Heritage Site, shelters an incredible concentration of wildlife in a natural amphitheater. Add in the exotic spice island of Zanzibar and you have the perfect African adventure.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
    highlights: [
      "Serengeti National Park",
      "Ngorongoro Crater",
      "Mount Kilimanjaro",
      "Zanzibar Island",
      "Tarangire National Park",
      "Stone Town heritage site",
    ],
    bestTime: "June to October (dry season), January to February (calving in Serengeti)",
    climate: "Tropical with cooler highlands; dry season offers best wildlife viewing",
    safariCount: 3,
  },
  {
    slug: "botswana",
    name: "Botswana",
    country: "Botswana",
    tagline: "Africa's last great wilderness",
    description: "Botswana offers some of the most exclusive and pristine safari experiences on the continent. The Okavango Delta, a UNESCO World Heritage Site, is the world's largest inland delta — a labyrinth of lagoons, channels, and islands teeming with wildlife. With a commitment to low-impact, high-quality tourism, Botswana provides intimate encounters with nature in truly wild settings.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&q=80",
    highlights: [
      "Okavango Delta",
      "Chobe National Park",
      "Moremi Game Reserve",
      "Makgadikgadi Salt Pans",
      "Mokoro canoe safaris",
      "Wild dog tracking",
    ],
    bestTime: "May to October (dry season, best wildlife concentration)",
    climate: "Semi-arid with a distinct wet and dry season",
    safariCount: 1,
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
