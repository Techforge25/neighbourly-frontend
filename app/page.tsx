import Banner from "@/components/Home/Banner";
import FAQS from "@/components/Home/FAQS";
import Find from "@/components/Home/Find";
import LocalsTrustMost from "@/components/Home/LocalsTrustMost";
import Trusted from "@/components/Home/Trusted";
import TrustSection from "@/components/Home/TrustSection";
import Work from "@/components/Home/Work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BeNeighbourly - Trusted Local Services Near You",
  description:
    "Discover trusted local services recommended by your neighbors. Find reliable businesses, read real community reviews, and connect with the best services near you.",

  alternates: {
    canonical: "https://www.beneighbourly.com.au/",
  },

  keywords: [
    "local services near me",
    "trusted local businesses",
    "neighbor recommendations",
    "community reviews",
    "find local services",
    "best services near me",
    "local business directory",
    "BeNeighbourly",
  ],

  openGraph: {
    title: "BeNeighbourly - Trusted Local Services Near You",
    description:
      "Find the best local services through real recommendations from your neighbors. Trusted, reliable, and community-driven.",
    url: "https://www.beneighbourly.com.au/",
    siteName: "BeNeighbourly",
    type: "website",
    images: [
      {
        url: "https://www.beneighbourly.com.au/images/video/banner.mp4",
        width: 1200,
        height: 630,
        alt: "BeNeighbourly Home",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <Banner />
      <TrustSection />
      <Work />
      <div className="p-4">
        <LocalsTrustMost />
      </div>
      {/* <Service /> */}
      <Trusted />
      {/* <FeelsDiffrent /> */}
      <FAQS />
      <Find />
    </div>
  );
}
