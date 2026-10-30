import React, { Suspense } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DestinationsList from "@/components/(destinations)/DestinationsList/DestinationsList";

const Destinations = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 tracking-tight mb-2">
            Explore All Destinations
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-normal">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        {/* Filter Bar with Dropdowns */}
        <div className="border border-gray-200 rounded-sm divide-y sm:divide-y-0 sm:divide-x divide-gray-200 grid grid-cols-1 sm:grid-cols-3 mb-6">
          {/* Category Select */}
          <Select>
            <SelectTrigger className="w-full h-12 rounded-none border-none focus:ring-0 focus:ring-offset-0 text-xs sm:text-sm font-medium tracking-wider uppercase text-gray-600 px-5">
              <SelectValue placeholder="CATEGORY" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beach">Beach</SelectItem>
              <SelectItem value="mountain">Mountain</SelectItem>
              <SelectItem value="historical">Historical</SelectItem>
              <SelectItem value="cultural">Cultural</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="city">City</SelectItem>
            </SelectContent>
          </Select>

          {/* Price Range Select */}
          <Select>
            <SelectTrigger className="w-full h-12 rounded-none border-none focus:ring-0 focus:ring-offset-0 text-xs sm:text-sm font-medium tracking-wider uppercase text-gray-600 px-5">
              <SelectValue placeholder="PRICE RANGE" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-1000">Under $1,000</SelectItem>
              <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
              <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
              <SelectItem value="5000-plus">$5,000+</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort By Select */}
          <Select>
            <SelectTrigger className="w-full h-12 rounded-none border-none focus:ring-0 focus:ring-offset-0 text-xs sm:text-sm font-medium tracking-wider uppercase text-gray-600 px-5">
              <SelectValue placeholder="SORT BY" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Count Text */}
        <p className="text-gray-500 text-xs sm:text-sm mb-8">
          Showing 4 destinations
        </p>

        {/* Destination Cards Container */}
        <Suspense fallback={<p>Destinations are loading...</p>}>
          <DestinationsList />
        </Suspense>
      </div>
    </section>
  );
};

export default Destinations;