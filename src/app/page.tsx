import HeroSection from "./components/homepage/HeroSection";
// import Destination from "./components/homepage/Destinations";
import Ad from "./components/Ad/Ad";
import Sponsors from "./components/Ad/Sponsers";
// import Trending from "./components/homepage/Trending";
// import CurrencyExchange from "./components/forex/ForexLive";
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
import CantonFairHomepage from "./components/homepage/CantonFair";
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
import USA from "./components/homepage/USA";
import SouthKorea from "./components/homepage/SouthKorea";
import Turkey from "./components/homepage/Turkey";
// import ChristmasNewYear from "./components/homepage/ChristmasNewYear";
// import TenYearSale from "./components/homepage/10YearSale";

export default function Home() {
  return (
    <main className="min-h-scree  n">
      <HeroSection />
      {/* <TenYearSale /> */}
      {/* <BannerCarousel />   */}
      <section className="mt-6">
        <CantonFairHomepage />
      </section>
      <section id="fixedDeparture" className="mt-6">
        <FixedDepartures />
      </section>
      {/* <ChristmasNewYear /> */}
      <div className="">
        {/* <ChardhamYatra /> */}
        <AustraliaBanner />
        <SingaporeBanner />
        <SriLanka />
        <BaliBanner />
        <VietnamBanner />
        <LaosCambodiaBanner />
        <AlmatyBanner />
        <USA />
        <SouthKorea />
        <Turkey />
        <NoCostEMIPage />
        {/* <AustraliaBanner /> */}
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
      {/* <CurrencyExchange /> */}

      <Gallery />

      {/* <WallOfLove /> */}
      <Sponsors />
      <ReviewsGlimpse />
      <TripPlanRequest />
    </main>
  );
}