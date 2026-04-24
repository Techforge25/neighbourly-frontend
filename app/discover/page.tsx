import DiscoverSearch from "@/components/DiscoverSearchmain/DiscoverSearch";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata:Metadata = {
  title: "Discover Places - BeNeighbourly",
  description: "Find the best local recommendations near you.",
   alternates: {
    canonical: "https://www.beneighbourly.com.au/discover",
  },
  openGraph: {
    title: "Discover Places",
    description: "Explore top الأماكن around you",
    url: "https://www.beneighbourly.com.au/discover",
    siteName: "BeNeighbourly",
    images: [
      {
        url: "https://www.beneighbourly.com.au/images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  keywords: [
  "discover local services",
  "local recommendations near me",
  "find nearby services",
  "trusted local businesses",
  "community recommendations",
  "neighbor reviews",
  "best local places",
  "service discovery platform",
  "BeNeighbourly discover",
]
};

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DiscoverSearch />
      </Suspense>
    </div>
  );
};

export default Page;
