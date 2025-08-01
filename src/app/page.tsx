import Comparison from "./components/Comparison";
import Features from "./components/Features";
import Hero from "./components/Hero";
import InspiredBy from "./components/InspiredBy";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <InspiredBy />
      <Comparison />
      <Features />
    </div>
  );
}
