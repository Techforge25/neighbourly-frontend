import DiscoverSearch from "@/components/DiscoverSearchmain/DiscoverSearch";
import { getMataData } from "@/utils/dumydata";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata = getMataData("Discover Places - Suburb says");

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
