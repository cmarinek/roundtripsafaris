export interface Testimonial {
  name: string;
  location: string;
  safari: string;
  text: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    location: "Dallas, TX",
    safari: "Masai Mara Great Migration",
    text: "RoundTrip Safaris made our dream come true. Watching the wildebeest cross the Mara River was the most incredible thing I've ever witnessed. The guides were phenomenal and every detail was taken care of.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "James & Patricia Chen",
    location: "Plano, TX",
    safari: "Serengeti Luxury Escape",
    text: "From the moment we landed in Tanzania, everything was flawless. The private lodge, the gourmet meals under the stars, the wildlife — it exceeded every expectation. This was our anniversary trip and it was perfect.",
    rating: 5,
    avatar: "JC",
  },
  {
    name: "Michael Rodriguez",
    location: "Irving, TX",
    safari: "Kenya Youth Athletes Charity Trip",
    text: "Being part of the charity trip changed my life. Seeing the impact we made on those young athletes and then experiencing the safari in Amboseli — I came home a different person. Can't wait to go back.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Dr. Angela Okafor",
    location: "Fort Worth, TX",
    safari: "Okavango Delta Expedition",
    text: "The Okavango Delta was unlike anything I'd experienced. Gliding through the channels in a mokoro, walking amongst elephants — it felt like stepping into a National Geographic documentary. RoundTrip Safaris delivered an extraordinary experience.",
    rating: 5,
    avatar: "AO",
  },
  {
    name: "David & Lisa Thompson",
    location: "McKinney, TX",
    safari: "Zanzibar Cultural Safari & Beach",
    text: "We wanted adventure AND relaxation, and this trip delivered both. The Serengeti was thrilling, and Zanzibar was paradise. The spice tour and cooking class were unexpected highlights. Highly recommend!",
    rating: 5,
    avatar: "DT",
  },
  {
    name: "Coach Robert Williams",
    location: "Arlington, TX",
    safari: "Kenya Youth Athletes Charity Trip",
    text: "As a high school coach, this trip spoke to my heart. Working with young Kenyan athletes, sharing knowledge and seeing their passion for sports — it was incredibly rewarding. The safari was the cherry on top.",
    rating: 5,
    avatar: "RW",
  },
];
