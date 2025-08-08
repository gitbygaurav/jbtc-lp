import Comparison from "./components/Comparison";
import DailyRewards from "./components/DailyRewards";
import Features from "./components/Features";
import GrowthProjection from "./components/GrowthProjection";
import Hero from "./components/Hero";
import InspiredBy from "./components/InspiredBy";
import LiveClaimFeed from "./components/LiveClaimFeed";
import ReferralSystem from "./components/ReferralSystem";
import Tokenomics from "./components/Tokenomics";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <InspiredBy />
      <Comparison />
      <Features />
      <Tokenomics />
      <DailyRewards />
      <ReferralSystem />
      <LiveClaimFeed />
      <GrowthProjection />
    </div>
  );
}
