"use client";
import React, { useEffect, useRef } from "react";
import TabBar from "../TabBar";
import Card from "../Card";
import LocalRecommendation from "../Discover/LocalRecommendation";
import Image from "next/image";
import Banner from "@/components/SuberbSearch/Banner";

interface SuburbSearchMainProps {
  path: string;
}

const SuburbSearchMain = ({ path }: SuburbSearchMainProps) => {
  return (
    <div>
      <Banner />
      <div>
        {/* <Image
          src="/images/suburbmap.png"
          alt="Description of the image"
          width={1200}
          height={1200}
          className="w-full"
        /> */}
      </div>
      <div className="md:my-10 my-6 md:max-w-[880px] text-center w-[90%] mx-auto rounded-[12px] p-4">
        <span className="text-center md:text-[32px] text-[20px] md:leading-[40px] leading-[24px] font-bold font-manrope text-para">
          These aren’t paid listings — they’re the local services your neighbours recommend most.
        </span>
      </div>

      <TabBar />
      <Card />
      <LocalRecommendation />
    </div>
  );
};

export default SuburbSearchMain;
