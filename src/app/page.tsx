import Banner from "@/components/Banner/Banner";
import ReadyToJourney from "@/components/ReadyToJourney/ReadyToJourney";
import TravelersSay from "@/components/TravelersSay/TravelersSay";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyChooseUs />
      <TravelersSay />
      <ReadyToJourney />
    </div>
  );
}
