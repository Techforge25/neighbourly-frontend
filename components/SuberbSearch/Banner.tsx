"use client";
import { RootState } from "@/store";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoArrowBack, IoLocationOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Banner = () => {
  const router = useRouter();

  const [suburb, setSuburb] = useState<string | null>(null);
  const [searchParams,setSearchParams] = useState<string | null>(null);
  const params = useSearchParams();
 

  const cardLength = useSelector(
    (state: RootState) => state.cardLength.cardLength,
  );

  useEffect(() => {
     const param = new URLSearchParams(window.location.search);
    const suburbValue = param.get("search");
    const suburbValueFilter = param.get("filter");
    setSearchParams(suburbValueFilter)
    setSuburb(suburbValue || suburbValueFilter);
  }, [params]);

  return (
    <div className="bg-gradient-to-r from-primary to-secondary h-[400px] w-full rounded-lg flex items-center justify-center relative">
      <div className="h-[164px] mx-auto">
        <div className="flex items-center justify-center md:mb-0 mb-3 ">
          <button className="flex items-center bg-[#FFFFFF42] px-4  py-1 text-white rounded-full font-manrope font-bold text-[12px] leading-[16px] ">
            <span>
              <IoLocationOutline size={20} />
            </span>
            <span className="capitalize" >{suburb}</span>
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

        <div className="flex md:items-start items-center md:flex-row flex-col md:gap-4">
          <button className="bg-white md:px-[41px] px-[21px] md:py-[5px] py-[2.5px]  rounded-[100px] text-share-modal-icon md:text-[40px] text-[20px] font-extrabold font-manrope">
            {cardLength ? cardLength : "0"}
          </button>
          <h1 className="font-bold font-manrope lg:text-[62px] text-[32px] text-white lg:leading-[68px] text-center flex flex-col whitespace-pre-wrap ">
            <span>Recommendations {searchParams?"of":"in"} </span>
            <span className="capitalize" >{suburb}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
