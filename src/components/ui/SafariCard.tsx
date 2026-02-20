"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Star } from "lucide-react";
import type { Safari } from "@/lib/data/safaris";

interface SafariCardProps {
  safari: Safari;
  index?: number;
}

export default function SafariCard({ safari, index = 0 }: SafariCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/safaris/${safari.slug}`} className="group block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-warm-200/50">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={safari.image}
              alt={safari.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            {/* Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                {safari.category}
              </span>
            </div>
            {/* Price */}
            <div className="absolute bottom-4 right-4">
              <span className="inline-flex items-center px-3 py-1.5 bg-white/95 backdrop-blur-sm text-earth-800 text-sm font-bold rounded-lg">
                From ${safari.price.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-1 mb-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-earth-700">
                {safari.rating}
              </span>
              <span className="text-sm text-warm-600">
                ({safari.reviewCount} reviews)
              </span>
            </div>

            <h3 className="text-xl font-bold text-earth-800 group-hover:text-amber-700 transition-colors">
              {safari.title}
            </h3>
            <p className="text-warm-600 text-sm mt-1">{safari.tagline}</p>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-warm-700">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-terra-500" />
                {safari.destination}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-terra-500" />
                {safari.duration}
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-terra-500" />
                {safari.groupSize}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
