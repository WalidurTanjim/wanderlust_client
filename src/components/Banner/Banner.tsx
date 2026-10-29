import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import bg_image from "@/assets/Banner.png";

export default function Banner() {
     return (
          <div className="relative w-full min-h-[calc(100vh-64px)] flex flex-col justify-between overflow-hidden bg-slate-900 text-white">
               {/* Background Image with Dark Overlay */}
               <div className="absolute inset-0 z-0">
                    <Image src={bg_image} alt="Banner background" fill priority className="object-cover object-center" />
                    <div className="absolute inset-0 bg-black/20" />
               </div>

               {/* Main Content Area */}
               <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto py-16">
                    {/* Title */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight">Discover Your <br className="hidden sm:inline" />
                         Next Adventure</h1>

                    {/* Subtitle */}
                    <p className="text-gray-200 text-base sm:text-lg max-w-2xl font-light mb-10 leading-relaxed">Explore breathtaking destinations and create unforgettable memories with <br className="hidden sm:inline" />
                         our curated travel experiences.</p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
                         {/* Cyan Button */}
                         <button className="w-full sm:w-auto bg-[#00A3C4] hover:bg-[#008da9] text-white font-medium px-8 py-3.5 text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-200">EXPLORE NOW <ArrowRight className="w-4 h-4" /></button>

                         {/* Glassmorphism Button */}
                         <button className="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-medium px-8 py-3.5 text-sm uppercase tracking-wider transition-colors duration-200 border border-white/20">VIEW DESTINATION</button>
                    </div>
               </div>

               {/* Bottom Filter/Search Bar Bar */}
               <div className="relative z-10 w-full bg-black/20 backdrop-blur-md border-t border-white/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 divide-y sm:divide-y-0 md:divide-x divide-white/10">
                         {/* Location */}
                         <div className="p-4 md:p-6 flex flex-col justify-center">
                              <span className="text-white text-base md:text-lg font-medium leading-none mb-1">Location</span>
                              <span className="text-gray-300 text-xs md:text-sm font-light">Address, City Or Zip</span>
                         </div>

                         {/* Date/Duration */}
                         <div className="p-4 md:p-6 flex flex-col justify-center">
                              <span className="text-white text-base md:text-lg font-medium leading-none mb-1">Date/Duration</span>
                              <span className="text-gray-300 text-xs md:text-sm font-light">Anytime/3 Days</span>
                         </div>

                         {/* Budget */}
                         <div className="p-4 md:p-6 flex flex-col justify-center">
                              <span className="text-white text-base md:text-lg font-medium leading-none mb-1">Budget</span>
                              <span className="text-gray-300 text-xs md:text-sm font-light">$0-$3000</span>
                         </div>

                         {/* People */}
                         <div className="p-4 md:p-6 flex flex-col justify-center">
                              <span className="text-white text-base md:text-lg font-medium leading-none mb-1">People</span>
                              <span className="text-gray-300 text-xs md:text-sm font-light">5-10</span>
                         </div>

                         {/* Search Button */}
                         <button className="w-full h-full bg-[#00A3C4] hover:bg-[#008da9] text-white font-semibold text-base py-5 md:py-0 flex items-center justify-center transition-colors duration-200">Search</button>
                    </div>
               </div>
          </div>
     );
}