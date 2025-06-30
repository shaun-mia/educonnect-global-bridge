
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import TrendingPrograms from "@/components/TrendingPrograms";
import UserProfiles from "@/components/UserProfiles";
import ConnectFeature from "@/components/ConnectFeature";
import MentorshipSection from "@/components/MentorshipSection";
import ForumsSection from "@/components/ForumsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <TrendingPrograms />
      <UserProfiles />
      <ConnectFeature />
      <MentorshipSection />
      <ForumsSection />
      <Footer />
    </div>
  );
};

export default Index;
