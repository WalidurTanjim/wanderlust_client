import TravelPackageForm from "@/components/TravelPackageForm/TravelPackageForm"

const AddTravelPackage = () => {

     return (
          <div className="min-h-screen px-6 md:px-12 lg:px-24 xl:px-40 py-10 md:py-16">
               <div className="w-full max-w-7xl mx-auto">
                    <h1 className="mb-10 text-3xl font-light tracking-tight sm:mb-14 sm:text-4xl md:text-5xl">Add New Travel Package</h1>

                    <div className="mx-auto w-full max-w-2xl rounded-lg border bg-card p-5 shadow-sm sm:p-8">
                         <TravelPackageForm />
                    </div>
               </div>
          </div>
     )
}

export default AddTravelPackage
