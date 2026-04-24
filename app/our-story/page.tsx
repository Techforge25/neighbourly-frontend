import Banner from "@/components/Banner";
import Ourstory from "@/components/OurStory/Ourstory";
import UseFull from "@/components/UseFull";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BeNeighbourly - Our Story",
  description:"Learn the story behind BeNeighbourly and how we connect you with trusted local services recommended by your neighbors.",
   alternates: {
    canonical: "https://www.beneighbourly.com.au/our-story",
  },
  openGraph: {
    title: "BeNeighbourly - Our Story",
    description:"Discover how BeNeighbourly helps you find reliable local services through real neighbor recommendations.",
    url: "https://www.beneighbourly.com.au/our-story",
    siteName: "BeNeighbourly",
    
    images: [
      {
        url: "https://www.beneighbourly.com.au/images/ourstory.png",
        width: 1200,
        height: 630,
        alt: "BeNeighbourly - Our Story",
      },
    ],
    type: "website",
  },

  keywords: [
    "local services",
    "neighbor recommendations",
    "trusted services",
    "community platform",
    "BeNeighbourly",
  ],
};

const page = () => {
  return (
    <div className="">
      <Banner
        text="Building stronger communities through trusted hyper-local recommendations."
        banner="/images/ourstory.png"
        textSize="md:text-[62px] text-[32px] mt-32 md:leading-[62px] leading-[30px]"
      />
      <Ourstory />
      {/* <Trusted /> */}
      {/* <RecommendationLed /> */}
      {/* <Community /> */}
      <UseFull color="#718496"/>
    </div>
  );
};

export default page;
