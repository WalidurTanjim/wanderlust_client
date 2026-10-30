import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Calendar, 
  Edit3, 
  Trash2, 
  Check, 
  ArrowRight 
} from 'lucide-react';

// Destination Interface
export interface Destination {
  _id: string;
  destinationName: string;
  country: string;
  category: string;
  price: string;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
}

// Fetching single destination data
const fetchData = async (id: string): Promise<{ success: boolean; data: Destination }> => {
  const res = await fetch(`${process.env.BASE_URL}/travel-package/${id}`, {
    cache: 'no-store',
  });

  if (!res?.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const DynamicDestinationDetails = async ({ params }: { params: Promise<{ destinationId: string }> }) => {
  const { destinationId } = await params;
  const response = await fetchData(destinationId);
  const destination: Destination = response.data;

  return (
    <main className="bg-white min-h-screen py-10 px-4 md:px-12 lg:px-20 w-full text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Navigation & Action Buttons Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-slate-900 text-sm font-normal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Destinations
          </Link>

          {/* Edit / Cancel Buttons */}
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 border border-gray-300 hover:bg-gray-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-800 transition-colors">
              <Edit3 className="w-3.5 h-3.5" />
              Edit
            </button>
            <button className="inline-flex items-center gap-2 border border-red-200 hover:bg-red-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-red-600 transition-colors">
              <Trash2 className="w-3.5 h-3.5" />
              Cancel
            </button>
          </div>
        </div>

        {/* Hero Image Banner */}
        <div className="relative w-full h-80 sm:h-112.5 lg:h-125 mb-10 overflow-hidden rounded-sm">
          <Image
            src={destination.imageUrl}
            alt={destination.destinationName}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Main Content & Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Left Column (Details) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Location & Title */}
            <div>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-2">
                <MapPin className="w-4 h-4" />
                <span>{destination.country}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 tracking-tight mb-4">
                {destination.destinationName}
              </h1>

              {/* Rating & Duration Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700">
                <div className="flex items-center gap-1.5 font-medium">
                  <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  <span>4.9</span>
                  <span className="text-gray-400 font-normal">(234 reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-600">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>{destination.duration} Nights</span>
                </div>
              </div>
            </div>

            {/* Overview Section */}
            <div>
              <h2 className="text-2xl font-serif text-slate-900 mb-3">Overview</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {destination.description}
              </p>
            </div>

            {/* Highlights Section */}
            <div>
              <h2 className="text-2xl font-serif text-slate-900 mb-3">Highlights</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light mb-6">
                Discover the magic of {destination.destinationName} with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.
              </p>

              {/* Highlights Checkmark Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 text-sm text-gray-700">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Luxury beachfront accommodation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Visit Uluwatu Temple at sunset</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Traditional Balinese spa treatment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Private beach dinner experience</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sunrise trek to Mount Batur</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Booking Card Sidebar) */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200/80 p-6 sm:p-8 rounded-sm shadow-sm sticky top-8">
              {/* Pricing Header */}
              <div className="mb-6">
                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Starting from</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-semibold text-[#00A3C4]">${destination.price}</span>
                </div>
                <span className="text-xs text-gray-400">per person</span>
              </div>

              {/* Date Input Box */}
              <div className="mb-6 border border-gray-200 px-4 py-3 rounded-sm flex items-center justify-between text-sm text-gray-700 bg-gray-50/50">
                <span>{destination.departureDate || "05/15/2026"}</span>
                <Calendar className="w-4 h-4 text-gray-400" />
              </div>

              {/* Book Now Button */}
              <button className="w-full bg-[#00A3C4] hover:bg-[#008da9] text-white font-medium py-3.5 px-4 text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-200 mb-6">
                Book Now
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Features List */}
              <div className="space-y-3 text-xs sm:text-sm text-gray-600 border-t border-gray-100 pt-6">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free cancellation up to 7 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Travel insurance included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>24/7 customer support</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default DynamicDestinationDetails;