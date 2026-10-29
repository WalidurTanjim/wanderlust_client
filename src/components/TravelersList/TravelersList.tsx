import { Traveler } from '@/types/traveler';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import React from 'react'
import TravelerCard from '../TravelerCard/TravelerCard';
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';

const fetchTravelers = async(): Promise<Traveler[]> => {
     try{
          const filePath = path.join(process.cwd(), 'public', 'travelers.json');
          const fileContents = await readFile(filePath, 'utf-8');
          return JSON.parse(fileContents) as Traveler[];
     }catch(err) {
          console.error("Travelers error:", err);
          throw err;
     }
}

const TravelersList = async() => {
     const travelers = await fetchTravelers();
     // console.log(travelers)

     return (
          <CarouselContent>
               {
                    travelers?.map((traveler: Traveler) => (
                         <CarouselItem key={traveler.id} className="basis-full md:basis-2/2 lg:basis-2/4">
                              <TravelerCard traveler={traveler} />
                         </CarouselItem>
                    ))
               }
          </CarouselContent>
     )
}

export default TravelersList
