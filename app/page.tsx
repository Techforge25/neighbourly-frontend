import Banner from "@/components/Home/Banner";
import FeelsDiffrent from "@/components/Home/FeelsDiffrent";
import Find from "@/components/Home/Find";
import Service from "@/components/Home/Service";
import Trusted from "@/components/Home/Trusted";
import TrustSection from "@/components/Home/TrustSection";
import Work from "@/components/Home/Work";

export default function Home() {
  return (
    <div>
      <Banner />
      <TrustSection />
      <Work />
      <Service />
      <Trusted />
      <FeelsDiffrent />
      <Find />
    </div>
  );
}
