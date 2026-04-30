import SuburbSearchMain from "@/components/SuberbSearch/SuburbSearchMain";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "subrub says - Suburb Search",
  description:
    "Search and discover trusted local services in your suburb recommended by neighbors. Find reliable businesses and community-approved services near you.",
 alternates: {
    canonical: "https://www.beneighbourly.com.au/suburb-search?search=Curl%20Curl",
  },
  openGraph: {
    title: "subrub says - Suburb Search",
    description:
      "Search your suburb for trusted local services and discover community-recommended businesses near you.",
    url: "https://www.beneighbourly.com.au/suburb-search?search=Curl%20Curl",
    siteName: "subrub says",
    type: "website",
    images: [
      {
        url: "https://www.beneighbourly.com.au/images/discover.png",
        width: 1200,
        height: 630,
        alt: "subrub says Suburb Search",
      },
    ],
  },

  keywords: [
    "suburb search",
    "find services in suburb",
    "local services near me",
    "neighborhood search",
    "trusted local businesses",
    "community recommendations",
    "suburb service finder",
    "subrub says search",
  ],
};

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuburbSearchMain path="suburb-search" />
    </Suspense>
  );
};

export default page;
