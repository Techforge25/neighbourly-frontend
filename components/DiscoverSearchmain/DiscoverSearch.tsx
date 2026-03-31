import React from "react";
import Banner from "../Banner";
import TabBar from "../TabBar";
import Card from "../Card";
import LocalRecommendation from "../Discover/LocalRecommendation";
import UseFull from "../UseFull";

const DiscoverSearch = () => {
  return (
    <div>
      <Banner
        banner="/images/discover.png"
        text="The services your neighbours actually recommend"
        para="Not paid listings. Not anonymous reviews. Just trusted recommendations from people nearby."
      />

      <div className="md:my-10 my-6 md:max-w-[1297px] text-center w-[90%] mx-auto p-4 rounded-[12px] p-4">
        <span className="text-center md:text-[32px] text-[20px] md:leading-[40px] leading-[24px] font-medium font-manrope">
          These aren’t paid listings they’re the most recommended local services
          based on submissions from nearby residents.
        </span>
      </div>

      <TabBar />
      <Card />
      <LocalRecommendation />
      <UseFull color="#718496" />
    </div>
  );
};

export default DiscoverSearch;
