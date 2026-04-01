import Card from "@/components/Card";
import LocalRecommendation from "@/components/Discover/LocalRecommendation";
import Banner from "@/components/SuberbSearch/Banner";
import TabBar from "@/components/TabBar";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Neighbourly - Suburb Search",
  description: "Discover trusted local services recommended by your neighbors.",
};

const page = () => {
  return (
    <div>
      <Banner />
      <div>
        <Image
          src="/images/suburbmap.png"
          alt="Description of the image"
          width={1200}
          height={1200}
          className="w-full"
        />
      </div>
      <div className="md:my-10 md:max-w-[1297px] text-center w-[90%] mx-auto p-4 rounded-[12px] p-4">
        <span className="text-center md:text-[32px] text-[20px] md:leading-[40px] leading-[24px] font-medium font-poppins text-textdark">
          These aren’t paid listings they’re the most recommended local services
          based on submissions from nearby residents.
        </span>
      </div>
      <TabBar />
      <Card />
      <LocalRecommendation />
    </div>
  );
};

export default page;
