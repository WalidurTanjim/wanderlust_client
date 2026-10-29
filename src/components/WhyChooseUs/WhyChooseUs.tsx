import React from 'react';
import Image from 'next/image';

import shield from "@/assets/ShieldCheck.png";
import map from "@/assets/MapTrifold.png";
import headset from "@/assets/Headset.png";

const WhyChooseUs = () => {
     const features = [
          {
               icon: shield,
               title: "Safe & Secure",
               description: "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
          },
          {
               icon: map,
               title: "Expert Guides",
               description: "Local experts who bring destinations to life with authentic cultural insights.",
          },
          {
               icon: headset,
               title: "24/7 Support",
               description: "Round-the-clock customer service to assist you wherever your journey takes you.",
          },
     ];

     return (
          <section className="bg-[#f0faff] py-16 px-4 md:px-8 lg:px-16 w-full">
               <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                         <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-3 tracking-tight">
                              Why Choose Wanderlust
                         </h2>
                         <p className="text-gray-500 text-sm sm:text-base font-normal">
                              Your trusted partner for exceptional travel experiences
                         </p>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                         {features.map((feature, index) => (
                              <div
                                   key={index}
                                   className="bg-white p-8 md:p-10 rounded-sm shadow-sm flex flex-col items-start justify-start text-left border border-gray-100/50"
                              >
                                   {/* Icon Image */}
                                   <div className="mb-6 relative w-10 h-10 flex items-center justify-start">
                                        <Image
                                             src={feature.icon}
                                             alt={feature.title}
                                             width={40}
                                             height={40}
                                             className="object-contain"
                                        />
                                   </div>

                                   {/* Title */}
                                   <h3 className="text-2xl font-serif text-slate-900 mb-3">
                                        {feature.title}
                                   </h3>

                                   {/* Description */}
                                   <p className="text-gray-500 text-sm leading-relaxed">
                                        {feature.description}
                                   </p>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default WhyChooseUs;