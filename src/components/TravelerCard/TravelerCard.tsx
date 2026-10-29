import { Traveler } from '@/types/traveler'
import Image from 'next/image';

interface TravelerParams {
     traveler: Traveler
}

const TravelerCard = ({ traveler }: TravelerParams) => {
     // console.log("Traveler:", traveler);

     return (
          <div className="bg-white border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-stretch justify-between gap-6 w-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
               {/* Left Content Area */}
               <div className="flex-1 flex flex-col justify-between space-y-6">
                    {/* Quote */}
                    <p className="text-gray-900 text-lg sm:text-xl font-serif leading-snug tracking-tight">
                         "{traveler.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="pt-2">
                         <div className="flex items-center gap-2">
                              <span className="text-[#00A3C4] font-light text-lg">—</span>
                              <span className="text-[#00A3C4] text-base font-normal">
                                   {traveler.name}
                              </span>
                         </div>
                         <p className="text-gray-400 text-xs sm:text-sm font-light mt-0.5 ml-5">
                              {traveler.location}
                         </p>
                    </div>
               </div>

               {/* Right Image Area */}
               <div className="relative w-full md:w-45 h-50 md:h-auto shrink-0 overflow-hidden">
                    <Image
                         src={traveler.image}
                         alt={traveler.name}
                         fill
                         className="object-cover object-center"
                    />
               </div>
          </div>
     )
}

export default TravelerCard
