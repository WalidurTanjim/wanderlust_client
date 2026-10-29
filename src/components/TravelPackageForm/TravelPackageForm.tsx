"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Save, Trash2 } from "lucide-react"
import toast from "react-hot-toast"

const categories = [
     "Beach",
     "Mountain",
     "Historical",
     "Cultural",
     "Adventure",
     "City",
]

const categoryItems = categories.map((category) => ({
     label: category,
     value: category,
}))

const initialForm = {
     destinationName: "",
     country: "",
     category: "",
     price: "",
     duration: "",
     departureDate: "",
     imageUrl: "",
     description: "",
}

const TravelPackageForm = () => {
     const [form, setForm] = React.useState(initialForm);

     const handleChange = (
          event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
     ) => {
          const { name, value } = event.target
          setForm((prev) => ({ ...prev, [name]: value }))
     }

     const handleSubmit = async(event: React.SubmitEvent<HTMLFormElement>) => {
          event.preventDefault();
          // TODO: submit to the backend once the API is wired up
          // console.log(form);
          setForm(initialForm)

          try{
               const res = await fetch(`http://localhost:5000/add-travel-package`, {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    body: JSON.stringify(form)
               });
               
               if(!res?.ok) {
                    throw new Error("Failed to add travel package")
               }

               const data = await res?.json();

               if(data?.insertedId) {
                    toast.success("Travel package added successfully")
               }
          }catch(err: any) {
               console.error("Add travel package error:", err);
               toast.error(err?.message || "Something went wrong. Please try again.")
          }
     }

     return (
          <form className="space-y-5" onSubmit={handleSubmit}>
               {/* Destination Name */}
               <div className="space-y-2">
                    <Label htmlFor="destination-name">Destination Name</Label>
                    <Input id="destination-name" name="destinationName" placeholder="Bali Paradise" value={form.destinationName} onChange={handleChange} className="bg-muted/60" required />
               </div>

               {/* Country + Category */}
               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                         <Label htmlFor="country">Country</Label>
                         <Input
                              id="country"
                              name="country"
                              placeholder="Indonesia"
                              value={form.country}
                              onChange={handleChange}
                              className="bg-muted/60"
                              required
                         />
                    </div>

                    <div className="space-y-2">
                         <Label htmlFor="category">Category</Label>

                         <Select items={categoryItems} value={form.category} onValueChange={(value: string | null) => setForm((prev) => ({ ...prev, category: value ?? "" }))}>
                              <SelectTrigger id="category" className="w-full bg-muted/60" aria-label="Category">
                                   <SelectValue placeholder="Select category" />
                              </SelectTrigger>

                              <SelectContent>
                                   {categories.map((category) => <SelectItem key={category} value={category}>{category}</SelectItem> )}
                              </SelectContent>
                         </Select>
                    </div>
               </div>

               {/* Price + Duration */}
               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                         <Label htmlFor="price">Price (USD)</Label>
                         <Input
                              id="price"
                              name="price"
                              type="number"
                              min="0"
                              placeholder="e.g., 1299"
                              value={form.price}
                              onChange={handleChange}
                              className="bg-muted/60"
                              required
                         />
                    </div>
                    <div className="space-y-2">
                         <Label htmlFor="duration">Duration</Label>
                         <Input
                              id="duration"
                              name="duration"
                              placeholder="e.g., 7 Days/6 Nights"
                              value={form.duration}
                              onChange={handleChange}
                              className="bg-muted/60"
                              required
                         />
                    </div>
               </div>

               {/* Departure Date */}
               <div className="space-y-2">
                    <Label htmlFor="departure-date">Departure Date</Label>
                    <Input
                         id="departure-date"
                         name="departureDate"
                         type="date"
                         value={form.departureDate}
                         onChange={handleChange}
                         className="bg-muted/60"
                         required
                    />
               </div>

               {/* Image URL */}
               <div className="space-y-2">
                    <Label htmlFor="image-url">Image URL</Label>
                    <Input
                         id="image-url"
                         name="imageUrl"
                         type="url"
                         placeholder="https://example.com/image.jpg"
                         value={form.imageUrl}
                         onChange={handleChange}
                         className="bg-muted/60"
                         required
                    />
               </div>

               {/* Description */}
               <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                         id="description"
                         name="description"
                         rows={4}
                         placeholder="Describe the travel experience..."
                         value={form.description}
                         onChange={handleChange}
                         className="bg-muted/60"
                         required
                    />
               </div>

               {/* Actions */}
               <div className="flex flex-col-reverse justify-end gap-3 pt-2 sm:flex-row">
                    <Button
                         type="button"
                         variant="outline"
                         size="lg"
                         className="border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive"
                         onClick={() => setForm(initialForm)}
                    >
                         <Trash2 /> Cancel
                    </Button>
                    <Button type="submit" size="lg" className="bg-cyan-600 text-white hover:bg-cyan-700">
                         <Save /> Add Travel Package
                    </Button>
               </div>
          </form>
     )
}

export default TravelPackageForm
