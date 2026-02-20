export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "booking" | "travel" | "safety" | "charity";
}

export const faqItems: FAQItem[] = [
  {
    question: "What makes RoundTrip Safaris different from other safari companies?",
    answer: "We're a boutique safari company based in Plano, TX, offering a personal touch that larger operators can't match. Every itinerary is crafted with care, our guides are the best in the business, and we're deeply committed to community impact through our charity programs. We don't just show you Africa — we help you connect with it.",
    category: "general",
  },
  {
    question: "When is the best time to go on safari?",
    answer: "It depends on your destination and interests. For the Great Migration in Kenya/Tanzania, July to October is ideal. For calving season, January to February is best. Botswana's dry season (May-October) concentrates wildlife around water. We'll help you choose the perfect timing based on your interests and schedule.",
    category: "travel",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking 6-12 months in advance, especially for peak season (July-October) and our charity group trips. Some luxury lodges and camps have limited availability and book up quickly. However, we can sometimes accommodate last-minute requests — just reach out and we'll do our best.",
    category: "booking",
  },
  {
    question: "Is it safe to go on safari in Africa?",
    answer: "Absolutely. Safari tourism in Kenya, Tanzania, and Botswana is well-established and safe. Our experienced guides are trained in wildlife safety, first aid, and emergency procedures. We include Flying Doctors evacuation cover on all trips. We also provide comprehensive pre-trip briefings and 24/7 support throughout your journey.",
    category: "safety",
  },
  {
    question: "What should I pack for a safari?",
    answer: "We provide a detailed packing list upon booking. Essentials include neutral-colored clothing (khaki, olive, tan), a warm layer for morning game drives, comfortable walking shoes, a wide-brimmed hat, sunscreen, insect repellent, binoculars, and a good camera. We'll customize the list based on your specific itinerary.",
    category: "travel",
  },
  {
    question: "Do I need vaccinations or a visa?",
    answer: "Most travelers need a visa for Kenya, Tanzania, and Botswana — these are typically available online or on arrival. Yellow fever vaccination is required if traveling from an endemic area. We recommend consulting your travel doctor about malaria prophylaxis, routine vaccinations, and any specific health requirements. We'll guide you through the process.",
    category: "travel",
  },
  {
    question: "Can I customize my safari itinerary?",
    answer: "Yes! While we offer carefully curated standard itineraries, every trip can be tailored to your preferences. Want an extra day in the Mara? A private balloon ride? A specific lodge? We'll work with you to create the perfect safari experience. Custom itineraries are our specialty.",
    category: "booking",
  },
  {
    question: "What is included in the safari price?",
    answer: "Each safari page lists specific inclusions. Generally, our prices cover accommodation, meals, game drives, park fees, and ground/air transfers within Africa. International flights, visa fees, travel insurance, and personal expenses are typically not included. We provide a complete breakdown before you commit.",
    category: "booking",
  },
  {
    question: "How does the charity trip work?",
    answer: "Our Kenya Youth Athletes Charity Trip combines volunteering with safari adventure. You'll coach youth athletes, donate sports equipment, visit schools and sports programs, and enjoy a safari in Amboseli National Park. The trip is fully organized by our team, and a portion of the trip cost goes directly to supporting local sports initiatives.",
    category: "charity",
  },
  {
    question: "Can I bring my children on safari?",
    answer: "Many of our safaris welcome families with children. Some luxury camps have age restrictions (typically 6+), but we have excellent family-friendly options. We can arrange special activities for younger travelers. The charity trip is also a wonderful option for families wanting a meaningful travel experience.",
    category: "general",
  },
  {
    question: "What's your cancellation policy?",
    answer: "Our standard cancellation policy allows for a full refund (minus deposit) if cancelled 90+ days before departure. Between 60-90 days, a 50% refund applies. Within 60 days, the trip is non-refundable. We strongly recommend purchasing travel insurance that covers trip cancellation. Specific policies may vary by safari and lodge.",
    category: "booking",
  },
  {
    question: "Do you offer travel insurance?",
    answer: "While we don't sell insurance directly, we require all travelers to have comprehensive travel insurance covering trip cancellation, medical emergencies, and evacuation. We can recommend trusted providers and will help ensure your coverage is appropriate for your specific trip.",
    category: "general",
  },
];
