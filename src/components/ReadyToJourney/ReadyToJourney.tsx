import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import readyToJourney_bg from "@/assets/CTA.png";

const ReadyToJourney = () => {
     return (
          <section className="relative w-full min-h-112.5 lg:min-h-137.5 flex items-center justify-center overflow-hidden py-20 px-4">
               {/* Background Image with Dark Overlay */}
               <div className="absolute inset-0 z-0">
                    <Image
                         src={readyToJourney_bg}
                         alt="Ready to start your journey background"
                         fill
                         priority
                         className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/50" />
               </div>

               {/* Content Container */}
               <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight">
                         Ready To Start Your Journey?
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-200 text-sm sm:text-base font-light mb-8 max-w-xl">
                         Join thousands of travelers who have discovered the world with us
                    </p>

                    {/* CTA Button */}
                    <button className="bg-white hover:bg-gray-100 text-slate-900 font-medium px-8 py-3.5 text-sm uppercase tracking-wider flex items-center gap-2 transition-colors duration-200 shadow-lg">
                         BOOK YOUR TRIP TODAY
                         <ArrowRight className="w-4 h-4" />
                    </button>
               </div>
          </section>
     );
};

export default ReadyToJourney;