import Banner from "@/components/Banner";
import Community from "@/components/OurStory/Community";
import Ourstory from "@/components/OurStory/Ourstory";
import RecommendationLed from "@/components/OurStory/RecommendationLed";
import Trusted from "@/components/Trusted";
import UseFull from "@/components/UseFull";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Banner
        text="Building stronger communities through trusted hyper-Local recommendations."
        banner="/images/ourstory.png"
      />
      <Ourstory />
      <Trusted />
      <RecommendationLed />
      <Community/>
      <UseFull color="#718496"/>
    </div>
  );
};

export default page;
