import Comparison from "./components/Comparison";
import Features from "./components/Features";
import Hero from "./components/Hero";
import InspiredBy from "./components/InspiredBy";
import Tokenomics from "./components/Tokenomics";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <InspiredBy />
      <Comparison />
      <Features />
      <Tokenomics />
    </div>
  );
}
