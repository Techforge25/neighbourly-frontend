"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoArrowBack, IoLocationOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Banner = () => {
  const router = useRouter();

  const [suburb, setSuburb] = useState<string | null>(null);

   const cardLength = useSelector((state) => state.cardLength.cardLength);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const suburbValue = params.get("search");
    setSuburb(suburbValue);
  }, []);

  

  return (
    <div className="bg-gradient-to-r from-primary to-secondary h-[400px] w-full rounded-lg flex items-center justify-center relative">
      <div className="h-[164px] mx-auto">
        <div className="flex items-center justify-center ">
          <button className="flex items-center bg-[#FFFFFF42] px-4  py-1 text-white rounded-full font-manrope font-bold text-[12px] leading-[16px] ">
            <span>
              <IoLocationOutline size={20} />
            </span>
            <span>{suburb}</span>
          </button>

          <div
            onClick={() => {
              router.back();
            }}
            className="absolute md:left-20 left-5 md:top-20 top-10 cursor-pointer"
          >
            <button className="h-[42px] w-[42px] bg-white rounded-[100px] flex items-center justify-center cursor-pointer">
              <IoArrowBack size={20} className="text-center" />
            </button>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <button className="bg-white md:px-[41px] px-[21px] md:py-[5px] py-[2.5px]  rounded-[100px] text-[#FE9A86] md:text-[40px] text-[20px] font-extrabold font-manrope">
            {cardLength?cardLength:"0"}
          </button>
          <h1 className="font-bold font-manrope lg:text-[62px] text-[32px] text-white lg:leading-[68px] text-center flex flex-col whitespace-pre-wrap ">
            <span>Recommendations in</span>
            <span>{suburb}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
