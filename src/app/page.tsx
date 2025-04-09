import HeroSection from "./components/homepage/HeroSection";
// import Destination from "./components/homepage/Destinations";
import Ad from "./components/Ad/Ad";
import Sponsors from "./components/Ad/Sponsers";
// import Trending from "./components/homepage/Trending";
import CurrencyExchange from "./components/forex/ForexLive";
// import Exclusive from "./components/forex/Exclusive";
// import { AnimatedListDemo } from "./components/CardsSwap";
// import HappyCustomers from "./components/Ad/HappyCustomers";
// import ExoticDestinations from "./components/homepage/Exotic"
// import Europe from "./components/homepage/Europe";
// import Domestic from "./components/homepage/Domestic";
import Gallery from "./components/homepage/Gallery";
// import WallOfLove from "./components/homepage/Ugc";
// import Indonesia from "./indonesia/page";
import ReviewsGlimpse from './components/homepage/ReviewsGlimpse'
import NoCostEMIPage from "./no-cost-emi/page";
import FixedDepartures from "./fixedDeparture/page";
// import BannerCarousel from "./components/valentine/page";
// import ChardhamYatra from './chardhamYatra/page';
import SriLanka from './sriLanka/page';
import TripPlanRequest from "../components/TripPlanRequest";
import BaliBanner from "./components/homepage/BaliBanner";
import VietnamBanner from "./components/homepage/VietnamBanner";
import LaosCambodiaBanner from "./components/homepage/LaosCambodia";
import AlmatyBanner from './components/homepage/AlmatyBanner';
import SingaporeBanner from "./components/homepage/SingaporeBanner";
import AustraliaBanner from "./components/homepage/AustraliaBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <BannerCarousel />   */}
      <section id="fixedDeparture" className="mt-6">
        <FixedDepartures />
      </section>
      <div className="">
        {/* <ChardhamYatra /> */} 
        <SriLanka />  
        <BaliBanner />
        <VietnamBanner />
        <LaosCambodiaBanner />
        <AlmatyBanner />
        <SingaporeBanner />
      <NoCostEMIPage />
        <AustraliaBanner />
      </div>
      {/* <Destination /> */}
      {/* <Domestic /> */}
      {/* <Trending /> */}
      {/* <Exclusive /> */}
      {/* <AnimatedListDemo /> */}
      {/* <ExoticDestinations /> */}
      {/* <Europe /> */}
      {/* <Indonesia /> */}
      <Ad />
      {/* <HappyCustomers /> */}
      <CurrencyExchange />

      <Gallery />
      
      {/* <WallOfLove /> */}
      <Sponsors />
      <ReviewsGlimpse />
      <TripPlanRequest />
    </main>
  );
}