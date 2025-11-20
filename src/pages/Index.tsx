import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import SuccessStories from "@/components/SuccessStories";
import Offer from "@/components/Offer";
import Comparison from "@/components/Comparison";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <SuccessStories />
      <Offer />
      <Comparison />
      <FinalCTA />
    </div>
  );
};

export default Index;
