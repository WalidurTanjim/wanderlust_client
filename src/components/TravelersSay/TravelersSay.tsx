import { Suspense } from 'react'
import { Carousel, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import TravelersList from '../TravelersList/TravelersList'

const TravelersSay = async() => {
     return (
          <div className="bg-white px-6 md:px-12 lg:px-24 xl:px-40 py-10 md:py-16">
               <Carousel opts={{ align: "start" }} className="w-full max-w-7xl mx-auto">
                    <div className='flex items-center justify-between gap-6 mb-8'>
                         {/* Header Left: Title + Description */}
                         <div>
                              <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-gray-900">
                                   What Travelers Say
                              </h2>
                              <p className="text-sm text-gray-500 mt-2">
                                   Real experiences from our happy travelers
                              </p>
                         </div>

                         {/* Header Right: Carousel Nav Buttons */}
                         <div className='hidden md:flex items-center gap-3 shrink-0'>
                              <CarouselPrevious className="static size-10 text-gray-500" />
                              <CarouselNext className="static size-10 text-gray-500" />
                         </div>
                    </div>

                    {/* Carousel Slides */}
                    <div>
                         <Suspense fallback={<p>Travelers loading...</p>}>
                              <TravelersList />
                         </Suspense>
                    </div>
               </Carousel>
          </div>
     )
}

export default TravelersSay
