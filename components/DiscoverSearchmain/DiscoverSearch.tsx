"use client";
import React, { Suspense, useEffect } from "react";
import Banner from "../Banner";
import TabBar from "../TabBar";
import Card from "../Card";
import LocalRecommendation from "../Discover/LocalRecommendation";
import UseFull from "../UseFull";
import Across from "../Across";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useSearchParams } from "next/navigation";
import { sponsors } from "@/utils/dumydata";
import SponsoredCard from "../Card/SponsoredCard";

const DiscoverSearch = () => {
  const cardLength = useSelector(
    (state: RootState) => state.cardLength.cardLength,
  );
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const filter = searchParams.get("filter");

  console.log("Search Params:", { search, filter });

  return (
    <div>
      <Banner
        banner="/images/discover.png"
        text="Discover the trades and services Northern Beaches locals recommend most."
        bgPosition="center 20%"
      />

      <div className="md:my-10 my-4 md:max-w-[1118px] text-center w-[90%] mx-auto rounded-[12px] p-4">
        <span className="text-center md:text-[32px] text-[20px] md:leading-[40px] leading-[24px] font-bold font-manrope text-para">
          These aren’t paid listings — they’re the local services your
          neighbours recommend most in the Northern Beaches
        </span>
      </div>
      <TabBar cardLength={cardLength} />

      <div className="flex flex-wrap justify-center gap-6 py-10">
        {sponsors.map((sponsor, i) => (
          <SponsoredCard key={i} {...sponsor} />
        ))}
      </div>

      <div className="text-center mt-6 md:mt-8 lg:mt-10 mb-10 md:mb-14 lg:mb-16 px-4">
        <p className="font-bold font-manrope text-tabText md:text-[42px] sm:text-[32px] text-[28px]">
          <span className="capitalize">{`Most recommended ${filter ? filter : "tradies"}`}</span>
          {" "}
          <span className="text-primary"> {" "} in the</span>
          {" "}
          <br />
          <span className="text-primary capitalize ">{`${search ? search : "Northern Beaches"}`}</span>
        </p>
      </div>

      <Card />
      {/* <LocalRecommendation /> */}
      <UseFull color="#718496" />
    </div>
  );
};

export default DiscoverSearch;
