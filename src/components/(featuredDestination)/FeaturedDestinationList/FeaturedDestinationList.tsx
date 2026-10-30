import React from 'react';
import { Destination } from '@/types/destination';
import FeaturedDestinationCard from '../FeaturedDestinationCard/FeaturedDestinationCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from 'lucide-react';

interface DestinationsResponse {
  success: boolean;
  message: string;
  data: Destination[];
}

// Data fetching function returning Promise<Destination[]>
const fetchDestinations = async (): Promise<DestinationsResponse> => {
  const res = await fetch(`${process.env.BASE_URL}/travel-package`);

  if (!res.ok) {
    throw new Error('Failed to fetch destinations');
  }

  return res.json();
};

const FeaturedDestinationsList = async () => {
  const destinations = await fetchDestinations();
  const { data: destinationData } = destinations;

  return (
    <div className="w-full">
      {/* Shadcn Carousel Component */}
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-4 sm:-ml-6">
          {destinationData?.map((destination: Destination) => (
            <CarouselItem
              key={destination._id}
              className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/2"
            >
              <FeaturedDestinationCard destination={destination} />
            </CarouselItem>
          ))}
        </CarouselContent>


        <div className="flex items-center justify-between border-t border-gray-200 mt-10 pt-6">
          <div className="text-sm font-medium text-slate-800">
            1/{destinationData.length || 5}
          </div>


          <div className="flex items-center gap-3">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-slate-700" />
            <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-slate-700" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedDestinationsList;