import Banner from "@/components/Banner";
import Ourstory from "@/components/OurStory/Ourstory";
import UseFull from "@/components/UseFull";
import { getMataData } from "@/utils/dumydata";
import { Metadata } from "next";

export const metadata = getMataData("Suburb says - Our Story");

const page = () => {
  return (
    <div className="">
      <Banner
        text="Built on genuine recommendations from Northern Beaches locals."
        banner="/images/ourstory.webp"
        textSize="md:text-[62px] text-[32px] mt-32 md:leading-[62px] leading-[30px]"
      />
      <Ourstory />
      <UseFull color="#718496"/>
    </div>
  );
};

export default page;
