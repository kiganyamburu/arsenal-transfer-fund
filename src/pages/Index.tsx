
import Hero from "@/components/Hero";
import PlayerProfiles from "@/components/PlayerProfiles";
import FundraisingProgress from "@/components/FundraisingProgress";
import SupporterWall from "@/components/SupporterWall";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PlayerProfiles />
      <FundraisingProgress />
      <SupporterWall />
      <CallToAction />
    </div>
  );
};

export default Index;
