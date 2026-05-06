import Banner from "@/components/Banner";
import Ourstory from "@/components/OurStory/Ourstory";
import UseFull from "@/components/UseFull";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suburb says - Our Story",
  description:"Learn the story behind Suburb says and how we connect you with trusted local services recommended by your neighbors.",
   alternates: {
    canonical: "https://www.suburbsays.com.au/our-story",
  },
  openGraph: {
    title: "Suburb says - Our Story",
    description:"Discover how Suburb says helps you find reliable local services through real neighbor recommendations.",
    url: "https://www.suburbsays.com.au/our-story",
    siteName: "Suburb says",
    
    images: [
      {
        url: "https://www.suburbsays.com.au/images/ourstory.png",
        width: 1200,
        height: 630,
        alt: "Suburb says - Our Story",
      },
    ],
    type: "website",
  },

  keywords: [
    "local services",
    "neighbor recommendations",
    "trusted services",
    "community platform",
    "Suburb says",
  ],
};

const page = () => {
  return (
    <div className="">
      <Banner
        text="Built on genuine recommendations from Northern Beaches locals."
        banner="/images/ourstory.png"
        textSize="md:text-[62px] text-[32px] mt-32 md:leading-[62px] leading-[30px]"
      />
      <Ourstory />
      <UseFull color="#718496"/>
    </div>
  );
};

export default page;
