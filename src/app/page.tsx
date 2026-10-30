import FeaturedDestinations from "@/components/(featuredDestination)/FeaturedDestinations/FeaturedDestinations";
import Banner from "@/components/Banner/Banner";
import ReadyToJourney from "@/components/ReadyToJourney/ReadyToJourney";
import TravelersSay from "@/components/TravelersSay/TravelersSay";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedDestinations />
      <WhyChooseUs />
      <TravelersSay />
      <ReadyToJourney />
    </div>
  );
}
