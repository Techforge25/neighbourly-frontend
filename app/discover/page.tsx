import DiscoverSearch from "@/components/DiscoverSearchmain/DiscoverSearch";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata:Metadata = {
  title: "Discover Places - subrub says",
  description: "Find the best local recommendations near you.",
   alternates: {
    canonical: "https://www.beneighbourly.com.au/discover",
  },
  openGraph: {
    title: "Discover Places",
    description: "Explore top Place around you",
    url: "https://www.beneighbourly.com.au/discover",
    siteName: "subrub says",
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
  "subrub says discover",
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
