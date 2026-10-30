import React from 'react';
import Image from 'next/image';
import { MapPin, Calendar, ArrowUpRight, Star } from 'lucide-react';
import { Destination } from '@/types/destination'; // Adjust path if needed
import Link from 'next/link';

interface FeaturedDestinationCardProps {
  destination: Destination;
}

const FeaturedDestinationCard: React.FC<FeaturedDestinationCardProps> = ({ destination }) => {
  return (
    <div className="bg-white flex flex-col justify-between w-full h-full select-none">
      {/* Top Image Container with Badge */}
      <div className="relative w-full h-65 sm:h-75 overflow-hidden rounded-sm">
        <Image
          src={destination.imageUrl}
          alt={destination.destinationName}
          fill
          className="object-cover object-center"
        />
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white px-2.5 py-1 text-xs font-medium flex items-center gap-1 rounded-sm">
          <span>4.5</span>
          <Star className="w-3 h-3 fill-white text-white" />
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-4 pb-2 flex flex-col justify-between flex-1">
        <div>
          {/* Country / Location */}
          <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm mb-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{destination.country}</span>
          </div>

          {/* Title and Price */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl font-serif text-slate-900 tracking-tight leading-snug">
              {destination.destinationName}
            </h3>
            <div className="text-right whitespace-nowrap">
              <span className="text-xl sm:text-2xl font-semibold text-slate-900">
                ${destination.price}
              </span>
              <span className="text-gray-400 text-xs font-normal">/Person</span>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm mb-5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{destination.duration} Nights</span>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <Link href={`/destinations/${destination?._id}`}>
            <button className="text-[#00A3C4] hover:text-[#008da9] font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center gap-1 transition-colors duration-200">
            BOOK NOW
            <ArrowUpRight className="w-4 h-4" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestinationCard;