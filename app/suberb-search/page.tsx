import SuburbSearchMain from "@/components/SuberbSearch/SuburbSearchMain";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Neighbourly - Suburb Search",
  description: "Discover trusted local services recommended by your neighbors.",
};

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuburbSearchMain path="suburb-search"/>
    </Suspense>
  );
};

export default page;
