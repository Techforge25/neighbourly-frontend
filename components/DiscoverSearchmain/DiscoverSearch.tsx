"use client";
import React, { Suspense, useEffect } from "react";
import Banner from "../Banner";
import TabBar from "../TabBar";
import Card from "../Card";
import LocalRecommendation from "../Discover/LocalRecommendation";
import UseFull from "../UseFull";
import Across from "../Across";

const DiscoverSearch = () => {
   useEffect(() => {
    const url = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, url);
  }, []);
  return (
    <div>
      <Banner
        banner="/images/discover.png"
        text="The services your neighbours actually recommend"
        bgPosition="center 20%"
        // para="These aren’t paid listings. They’re the most trusted local services, based on recommendations from
        // your neighbours."
      />

      <div className="md:my-10 my-6 md:max-w-[880px] text-center w-[90%] mx-auto rounded-[12px] p-4">
        <span className="text-center md:text-[32px] text-[20px] md:leading-[40px] leading-[24px] font-medium font-manrope text-para">
          These aren’t paid listings — they’re the local services your neighbours recommend most.
        </span>
      </div>
      {/* <TabBar /> */}

      <div className="max-w-[1260px] md:pb-4 sm:pb-2 pb-1 mx-auto p-2 sm:text-start text-center ">
        <p className="font-bold font-manrope text-tabText md:text-[42px] sm:text-[32px] text-[28px]">
          See who locals <span className="text-primary" >trust most</span>
        </p>
      </div>

      <Card />
      <LocalRecommendation />
      <UseFull color="#718496" />
    </div>
  );
};

export default DiscoverSearch;
