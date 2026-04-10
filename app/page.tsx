import Banner from "@/components/Home/Banner";
import FAQS from "@/components/Home/FAQS";
import FeelsDiffrent from "@/components/Home/FeelsDiffrent";
import Find from "@/components/Home/Find";
import LocalsTrustMost from "@/components/Home/LocalsTrustMost";
import Service from "@/components/Home/Service";
import Trusted from "@/components/Home/Trusted";
import TrustSection from "@/components/Home/TrustSection";
import Work from "@/components/Home/Work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neighbourly - Home",
  description: "Discover trusted local services recommended by your neighbors.",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <TrustSection />
      <Work />
      <LocalsTrustMost />
      <Service />
      <Trusted />
      <FeelsDiffrent />
      <FAQS />
      <Find />
    </div>
  );
}
