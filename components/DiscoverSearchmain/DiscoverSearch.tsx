import React from "react";
import Banner from "../Banner";
import TabBar from "../TabBar";
import Card from "../Card";
import LocalRecommendation from "../Discover/LocalRecommendation";

const DiscoverSearch = () => {

    


  return (
    <div>
      <Banner
        banner="/images/discover.png"
        textColor="text-heading1"
        text="The services your neighbours trust and recommend."
      />

      <TabBar />
      <Card />
      <LocalRecommendation />
    </div>
  );
};

export default DiscoverSearch;
