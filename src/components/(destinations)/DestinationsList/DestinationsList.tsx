import React from 'react';
import { Destination } from '@/types/destination';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from 'lucide-react';
import FeaturedDestinationCard from '@/components/(featuredDestination)/FeaturedDestinationCard/FeaturedDestinationCard';

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

const DestinationsList = async() => {
     const destinations = await fetchDestinations();
     const { data: destinationData } = destinations;

     return (
          <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
               {
                    destinationData?.map((destination: Destination) => <FeaturedDestinationCard key={destination?._id} destination={destination} />)
               }
          </div>
     )
}

export default DestinationsList
