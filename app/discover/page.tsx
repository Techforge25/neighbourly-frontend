import Across from "@/components/Across";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import LocalRecommendation from "@/components/Discover/LocalRecommendation";
import DiscoverSearch from "@/components/DiscoverSearchmain/DiscoverSearch";
import TabBar from "@/components/TabBar";
import { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DiscoverSearch />
      </Suspense>
    </div>
  );
};

export default Page;
