import Banner from "@/components/Banner";
import Community from "@/components/OurStory/Community";
import Ourstory from "@/components/OurStory/Ourstory";
import RecommendationLed from "@/components/OurStory/RecommendationLed";
import Trusted from "@/components/Trusted";
import UseFull from "@/components/UseFull";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Neighbourly - Our Story",
  description: "Discover trusted local services recommended by your neighbors.",
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
      <Trusted />
      <RecommendationLed />
      <Community />
      <UseFull color="#718496"/>
    </div>
  );
};

export default page;
