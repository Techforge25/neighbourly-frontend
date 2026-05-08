import Banner from "@/components/Home/Banner";
import FAQS from "@/components/Home/FAQS";
import Find from "@/components/Home/Find";
import LocalsTrustMost from "@/components/Home/LocalsTrustMost";
import Trusted from "@/components/Home/Trusted";
import TrustSection from "@/components/Home/TrustSection";
import Work from "@/components/Home/Work";
import Loader from "@/components/Loader";
import TabBar from "@/components/TabBar";
import { getMataData } from "@/utils/dumydata";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata = getMataData("Suburb Says - Trusted Local Services Near You"); 

export default function Home() {
  return (
    <>
      <Banner />
      <TrustSection />
      <Suspense fallback={<div><Loader /></div>}>
        <TabBar tabarActive={true} />
      </Suspense>
      <Work />
      <div className="p-4">
        <LocalsTrustMost />
      </div>
      <Trusted />
      <FAQS />
      <Find />
    </>
  );
}
