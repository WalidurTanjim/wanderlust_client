import DynamicDestinationDetails from '@/components/DynamicDestinationDetails/DynamicDestinationDetails'
import React, { Suspense } from 'react'

const DestinationDetails = ({ params }: { params: Promise<{destinationId: string}> }) => {
     return (
          <div>
               <Suspense fallback={<p>Destination details is loading...</p>}>
                    <DynamicDestinationDetails params={params} />
               </Suspense>  
          </div>
     )
}

export default DestinationDetails
