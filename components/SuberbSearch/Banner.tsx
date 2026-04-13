"use client";
import { api } from "@/src/service/axios";
import { RootState } from "@/store";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoArrowBack, IoLocationOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Banner = () => {
  const router = useRouter();

  const [suburb, setSuburb] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState<string | null>(null);
  const params = useSearchParams();

  const cardLength = useSelector(
    (state: RootState) => state.cardLength.cardLength,
  );

  const [state, setState] = useState<any>([]);
  const getStats = async () => {
    try {
      const res = await api.get("stats");
      setState(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getStats();
  }, []);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search);
    const suburbValue = param.get("search");
    const suburbValueFilter = param.get("filter");
    setSearchParams(suburbValueFilter);
    setSuburb(suburbValue || suburbValueFilter);
  }, [params]);

  return (
    <div className="bg-gradient-to-r from-primary to-secondary h-[400px] w-full rounded-lg flex items-center justify-center relative">
      <div className="h-[164px] mx-auto">
        <div className="flex items-center justify-center md:mb-0 mb-3 ">
          <button className="flex items-center bg-primary-dark-bg px-4  py-1 text-white rounded-full font-manrope font-bold sm:text-[18px] text-[14px] leading-[16px] ">
            <span>
              <IoLocationOutline size={24} />
            </span>
            <span className="capitalize">{suburb}</span>
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

        <div className="flex items-center flex-col md:gap-4 gap-2 md:mt-4 mt-2 p-2">
          <button className="bg-white md:px-[41px] sm:px-[21px] px-[4px] md:py-[5px] py-[2.5px]  rounded-[100px] text-share-modal-icon md:text-[42px] sm:text-[32px] text-[24px] font-extrabold font-manrope flex items-center gap-1">
            <span></span>
            <span>{`${cardLength ? cardLength : "0"} recommendations ${searchParams ? "of" : "in"} ${suburb}`}</span>
          </button>
          <h1 className="font-bold font-manrope lg:text-[42px] md:text-[32px] text-[28px] text-white lg:leading-[68px] leading-[32px] text-center whitespace-pre-wrap ">
            {`from our total ${state?.businesses ? state?.businesses : "0"} recommendations`}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
