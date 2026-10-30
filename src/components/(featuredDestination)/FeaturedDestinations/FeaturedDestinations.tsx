import React, { Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import FeaturedDestinationsList from '../FeaturedDestinationList/FeaturedDestinationList';
import Link from 'next/link';

const FeaturedDestinations = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Row matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 tracking-tight mb-2">
              Featured Destinations
            </h2>
            <p className="text-gray-500 text-sm sm:text-base font-normal">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>

          {/* All Destinations Button Link */}
          <div>
            <Link href="/destinations" className="inline-flex items-center gap-2 border border-[#00A3C4] text-[#00A3C4] hover:bg-[#00A3C4] hover:text-white px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors duration-200">ALL DESTINATIONS<ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Suspense wrapper with fallback requirement */}
        <Suspense fallback={<p className="text-gray-500 text-center py-10">Destination is loading...</p>}>
          <FeaturedDestinationsList />
        </Suspense>
      </div>
    </section>
  );
};

export default FeaturedDestinations;