export interface Safari {
  slug: string;
  title: string;
  tagline: string;
  destination: string;
  duration: string;
  groupSize: string;
  price: number;
  rating: number;
  reviewCount: number;
  difficulty: "Easy" | "Moderate" | "Challenging";
  image: string;
  gallery: string[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary: { day: number; title: string; description: string }[];
  description: string;
  featured: boolean;
  category: "wildlife" | "luxury" | "adventure" | "charity" | "cultural";
}

export const safaris: Safari[] = [
  {
    slug: "masai-mara-great-migration",
    title: "Masai Mara Great Migration",
    tagline: "Witness the greatest wildlife spectacle on Earth",
    destination: "Kenya",
    duration: "7 Days / 6 Nights",
    groupSize: "2-12 travelers",
    price: 4500,
    rating: 4.9,
    reviewCount: 127,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
    ],
    highlights: [
      "Witness the Great Migration river crossing",
      "Big Five game drives in the Masai Mara",
      "Visit a traditional Maasai village",
      "Hot air balloon safari at sunrise",
      "Luxury tented camp accommodation",
    ],
    included: [
      "All accommodation in luxury tented camps",
      "Full board meals and selected beverages",
      "Expert English-speaking safari guide",
      "All game drives in 4x4 safari vehicle",
      "Park entrance and conservancy fees",
      "Airport transfers and domestic flights",
      "Flying Doctors emergency evacuation cover",
    ],
    notIncluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses and tips",
      "Hot air balloon safari (optional add-on)",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Nairobi", description: "Arrive at Jomo Kenyatta International Airport. Meet our team and transfer to your luxury hotel. Welcome dinner and safari briefing." },
      { day: 2, title: "Nairobi to Masai Mara", description: "Morning flight to the Masai Mara. Afternoon game drive spotting the Big Five. Sundowner drinks overlooking the savanna." },
      { day: 3, title: "Full Day Game Drive", description: "Full day exploring the Mara ecosystem. Track wildebeest herds, predators, and birdlife. Picnic lunch in the bush." },
      { day: 4, title: "Migration River Crossing", description: "Early morning drive to the Mara River. Witness the dramatic river crossing. Afternoon visit to a Maasai village." },
      { day: 5, title: "Balloon Safari & Conservation", description: "Optional hot air balloon ride at dawn. Visit a local conservation project. Afternoon game drive." },
      { day: 6, title: "Hidden Gems of the Mara", description: "Explore lesser-visited areas of the reserve. Photography-focused game drive. Farewell bush dinner under the stars." },
      { day: 7, title: "Departure", description: "Final morning game drive. Flight back to Nairobi. Airport transfer for your onward journey." },
    ],
    description: "Experience the awe-inspiring Great Migration in Kenya's Masai Mara. Watch millions of wildebeest and zebra cross crocodile-infested rivers, spot all of the Big Five, and immerse yourself in the rich Maasai culture. This premium safari combines thrilling wildlife encounters with luxurious accommodation in the heart of Africa's most iconic savanna.",
    featured: true,
    category: "wildlife",
  },
  {
    slug: "serengeti-luxury-escape",
    title: "Serengeti Luxury Escape",
    tagline: "Unparalleled luxury in Africa's most iconic wilderness",
    destination: "Tanzania",
    duration: "8 Days / 7 Nights",
    groupSize: "2-8 travelers",
    price: 6800,
    rating: 5.0,
    reviewCount: 89,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      "https://images.unsplash.com/photo-1534177616064-886b3308811e?w=800&q=80",
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800&q=80",
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
    ],
    highlights: [
      "Private luxury lodge in the Serengeti",
      "Exclusive game drives with expert tracker",
      "Ngorongoro Crater full-day excursion",
      "Fly-in safari for maximum comfort",
      "Private chef and sommelier experience",
    ],
    included: [
      "Luxury lodge and tented camp accommodation",
      "All meals prepared by private chef",
      "Premium wines and spirits",
      "Private safari vehicle and guide",
      "All park fees and conservancy charges",
      "Domestic charter flights",
      "Laundry service",
    ],
    notIncluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Gratuities",
      "Spa treatments",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Arusha", description: "Welcome to Tanzania. Private transfer to a luxury boutique hotel at the foot of Mount Meru." },
      { day: 2, title: "Fly to the Serengeti", description: "Charter flight over the Great Rift Valley to your private lodge in the Central Serengeti." },
      { day: 3, title: "Central Serengeti Exploration", description: "Full day of game drives in the Seronera Valley, known for its year-round wildlife density." },
      { day: 4, title: "Northern Serengeti", description: "Venture north to track the migration herds. Exclusive picnic lunch on the savanna." },
      { day: 5, title: "Walking Safari & Cultural Visit", description: "Guided walking safari with a Maasai tracker. Afternoon visit to a local Maasai boma." },
      { day: 6, title: "Ngorongoro Crater", description: "Fly to the rim of the Ngorongoro Crater. Descend into this natural amphitheater for a full day of wildlife viewing." },
      { day: 7, title: "Crater Rim & Relaxation", description: "Morning at leisure. Optional crater rim walk. Afternoon spa treatments. Farewell dinner." },
      { day: 8, title: "Departure", description: "Morning game drive en route to the airstrip. Charter flight to Kilimanjaro Airport." },
    ],
    description: "Indulge in the ultimate luxury safari experience across Tanzania's Serengeti and Ngorongoro Crater. Stay in exclusive private lodges, enjoy gourmet dining under African skies, and encounter extraordinary wildlife in the most intimate settings. This is safari travel at its finest.",
    featured: true,
    category: "luxury",
  },
  {
    slug: "okavango-delta-expedition",
    title: "Okavango Delta Expedition",
    tagline: "Explore Africa's last great wilderness by water and land",
    destination: "Botswana",
    duration: "6 Days / 5 Nights",
    groupSize: "2-6 travelers",
    price: 5200,
    rating: 4.8,
    reviewCount: 64,
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    ],
    highlights: [
      "Mokoro canoe safaris through the delta",
      "Walking safaris on island trails",
      "Game drives in the Moremi Game Reserve",
      "Birdwatching with over 400 species",
      "Stargazing in zero-light-pollution skies",
    ],
    included: [
      "Island camp accommodation",
      "All meals and non-alcoholic beverages",
      "Mokoro excursions and walking safaris",
      "Game drives in Moremi",
      "Park and reserve fees",
      "Bush flights from Maun",
      "Emergency medical evacuation",
    ],
    notIncluded: [
      "International flights to Maun",
      "Visa fees",
      "Travel insurance",
      "Alcoholic beverages",
      "Personal items",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Maun", description: "Arrive in Maun, gateway to the Okavango. Bush flight to your island camp in the heart of the delta." },
      { day: 2, title: "Mokoro Safari", description: "Glide through crystal-clear channels in a traditional mokoro canoe. Afternoon walking safari on Chief's Island." },
      { day: 3, title: "Moremi Game Reserve", description: "Full day game drive in Moremi, one of Africa's finest reserves. Track wild dogs, lions, and elephants." },
      { day: 4, title: "Water & Land Safari", description: "Morning boat cruise on the delta channels. Afternoon game drive focusing on predator activity." },
      { day: 5, title: "Walking Safari & Birdwatching", description: "Guided walking safari through palm-fringed islands. Specialist birding session. Farewell dinner under the stars." },
      { day: 6, title: "Departure", description: "Final mokoro ride at sunrise. Bush flight back to Maun for onward travel." },
    ],
    description: "Discover the pristine waterways and islands of Botswana's Okavango Delta. This unique expedition combines mokoro canoe safaris, walking safaris, and game drives through one of the most biodiverse ecosystems on the planet. An unforgettable adventure for nature enthusiasts.",
    featured: true,
    category: "adventure",
  },
  {
    slug: "kenya-youth-athletes-charity",
    title: "Kenya Youth Athletes Charity Trip",
    tagline: "Empower the next generation of Kenyan athletes",
    destination: "Kenya",
    duration: "8 Days / 7 Nights",
    groupSize: "10-25 travelers",
    price: 3200,
    rating: 5.0,
    reviewCount: 42,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
      "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=800&q=80",
    ],
    highlights: [
      "Coach and mentor youth athletes",
      "Donate sports equipment to communities",
      "Visit schools and sports programs in Nairobi",
      "Safari adventure in Amboseli National Park",
      "Cultural immersion with local communities",
      "Views of Mount Kilimanjaro",
    ],
    included: [
      "All accommodation and meals",
      "Ground transportation",
      "Safari game drives in Amboseli",
      "Community visit coordination",
      "English-speaking guide throughout",
      "Park entrance fees",
      "Welcome and farewell dinners",
    ],
    notIncluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Sports equipment donations (encouraged)",
      "Personal expenses",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Nairobi", description: "Arrive at Jomo Kenyatta International Airport. Meet the RoundTrip Safaris team. Welcome dinner and trip briefing." },
      { day: 2, title: "Nairobi Sports Initiatives", description: "Tour local sports facilities and schools. Meet coaches, local leaders, and athletes. Sports clinic with hands-on coaching." },
      { day: 3, title: "Community Sports Day", description: "Full day of sports activities with local youth. Football, athletics, basketball, and netball sessions. Equipment donations." },
      { day: 4, title: "Rural Community Visit", description: "Travel to rural communities supporting youth sports. Visit village sports programs. Cultural exchange activities." },
      { day: 5, title: "Sports Education & Development", description: "Visit educational institutions with sports programs. Provide lectures on leadership, teamwork, and sportsmanship." },
      { day: 6, title: "Amboseli Safari", description: "Safari in Amboseli National Park. Wildlife viewing with Mount Kilimanjaro backdrop. Sundowner experience." },
      { day: 7, title: "Safari & Community Farewell", description: "Morning game drive. Afternoon farewell celebration with the youth athletes. Cultural performances." },
      { day: 8, title: "Departure", description: "Final reflections and group photo. Transfer to the airport for departure." },
    ],
    description: "Join RoundTrip Safaris on this life-changing charity trip to Kenya. Support youth athletes across Nairobi and rural communities through coaching, mentorship, and equipment donations. Combined with a breathtaking safari in Amboseli National Park, this journey creates lasting impact while offering an authentic African adventure.",
    featured: true,
    category: "charity",
  },
  {
    slug: "mount-kilimanjaro-trek",
    title: "Mount Kilimanjaro Trek & Safari",
    tagline: "Conquer Africa's highest peak and celebrate on safari",
    destination: "Tanzania",
    duration: "10 Days / 9 Nights",
    groupSize: "4-12 travelers",
    price: 5800,
    rating: 4.7,
    reviewCount: 53,
    difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1521150932951-303a95503ed3?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521150932951-303a95503ed3?w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800&q=80",
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
    ],
    highlights: [
      "Summit Uhuru Peak at 5,895m",
      "Trek the scenic Lemosho Route",
      "Post-summit safari in Tarangire",
      "Professional mountain guides and porters",
      "All camping equipment provided",
    ],
    included: [
      "Mountain hut and camping accommodation",
      "All meals during the trek",
      "Professional mountain guide team",
      "Porters for equipment and luggage",
      "Park fees and rescue fees",
      "Post-trek safari accommodation",
      "Celebratory dinner",
    ],
    notIncluded: [
      "International flights",
      "Visa fees",
      "Travel insurance (mandatory)",
      "Personal trekking gear",
      "Tips for guides and porters",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Moshi", description: "Arrive in Moshi at the base of Kilimanjaro. Equipment check and trek briefing." },
      { day: 2, title: "Lemosho Gate to Big Tree Camp", description: "Drive to Lemosho Gate. Begin trek through montane forest. Camp at Big Tree Camp (2,780m)." },
      { day: 3, title: "Shira Plateau", description: "Trek across the Shira Plateau with stunning views. Camp at Shira 2 (3,900m)." },
      { day: 4, title: "Acclimatization Day", description: "Hike to Lava Tower (4,630m) for acclimatization. Descend to Barranco Camp (3,960m)." },
      { day: 5, title: "Barranco Wall", description: "Climb the iconic Barranco Wall. Trek to Karanga Camp (4,035m)." },
      { day: 6, title: "Barafu Base Camp", description: "Short trek to Barafu Camp (4,640m). Rest and prepare for summit night." },
      { day: 7, title: "Summit Day", description: "Midnight start for Uhuru Peak (5,895m). Descend to Mweka Camp. Celebrate your achievement!" },
      { day: 8, title: "Descend to Mweka Gate", description: "Final descent through the rainforest. Receive summit certificate. Transfer to lodge." },
      { day: 9, title: "Tarangire Safari", description: "Full day safari in Tarangire National Park. Celebrate with a bush dinner." },
      { day: 10, title: "Departure", description: "Transfer to Kilimanjaro Airport for departure." },
    ],
    description: "Combine the ultimate trekking challenge with an incredible safari experience. Summit Africa's highest peak via the scenic Lemosho Route, then celebrate your achievement with a safari in Tarangire National Park. Expert guides ensure your safety and success every step of the way.",
    featured: false,
    category: "adventure",
  },
  {
    slug: "zanzibar-cultural-safari",
    title: "Zanzibar Cultural Safari & Beach",
    tagline: "Where African wildlife meets island paradise",
    destination: "Tanzania",
    duration: "9 Days / 8 Nights",
    groupSize: "2-10 travelers",
    price: 4100,
    rating: 4.8,
    reviewCount: 71,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1534177616064-886b3308811e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1534177616064-886b3308811e?w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
    ],
    highlights: [
      "Stone Town UNESCO World Heritage walking tour",
      "Spice farm visit and cooking class",
      "Serengeti game drives",
      "Beach relaxation on pristine white sand",
      "Sunset dhow cruise",
    ],
    included: [
      "Boutique hotel and beach resort accommodation",
      "Breakfast daily, select lunches and dinners",
      "All guided tours and activities",
      "Safari game drives",
      "Domestic flights",
      "Airport transfers",
      "English-speaking cultural guide",
    ],
    notIncluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Some meals",
      "Optional water sports",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Dar es Salaam", description: "Welcome to Tanzania. Transfer to boutique hotel. Evening at leisure." },
      { day: 2, title: "Fly to the Serengeti", description: "Morning flight to the Serengeti. Afternoon game drive." },
      { day: 3, title: "Full Day Serengeti Safari", description: "Sunrise to sunset game drives across the endless plains." },
      { day: 4, title: "Serengeti to Zanzibar", description: "Morning game drive. Afternoon flight to Zanzibar Island." },
      { day: 5, title: "Stone Town Exploration", description: "Walking tour of Stone Town's winding streets, markets, and historic sites." },
      { day: 6, title: "Spice Tour & Cooking Class", description: "Visit a spice farm. Hands-on Swahili cooking class. Afternoon at the beach." },
      { day: 7, title: "Beach Day & Water Sports", description: "Full day on pristine beaches. Optional snorkeling, diving, or kayaking." },
      { day: 8, title: "Sunset Dhow Cruise", description: "Day at leisure. Evening sunset cruise on a traditional dhow." },
      { day: 9, title: "Departure", description: "Morning at leisure. Transfer to Zanzibar Airport." },
    ],
    description: "Experience the best of Tanzania on this unique journey combining thrilling Serengeti safaris with the exotic culture and beaches of Zanzibar. From spotting the Big Five to exploring Stone Town's ancient streets and relaxing on turquoise waters, this trip offers the perfect blend of adventure and relaxation.",
    featured: false,
    category: "cultural",
  },
];

export function getSafariBySlug(slug: string): Safari | undefined {
  return safaris.find((s) => s.slug === slug);
}

export function getFeaturedSafaris(): Safari[] {
  return safaris.filter((s) => s.featured);
}

export function getSafarisByCategory(category: Safari["category"]): Safari[] {
  return safaris.filter((s) => s.category === category);
}

export function getSafarisByDestination(destination: string): Safari[] {
  return safaris.filter((s) => s.destination.toLowerCase() === destination.toLowerCase());
}
