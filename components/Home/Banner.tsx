"use client";
import { IoMdArrowForward } from "react-icons/io";
import WordRotate from "../ui/word-rotate";
import CustomIcon from "../CustomIcon";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { video_Url } from "@/utils/dumydata";

const Banner = () => {
  const words = [
    {
      text: "Plumbers...",
      bgColor: "#D98C74",
      textColor: "#fff",
      icon: <CustomIcon variant="plumber" />,
    },
    {
      text: "Electricians...",
      bgColor: "#718496",
      textColor: "#fff",
      icon: <CustomIcon variant="electrician" />,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  return (
    <div className="relative h-[70.2vh] w-full overflow-hidden">
      {/* Video background */}

      <video
        className="absolute top-0 left-0 w-full h-[70.2vh] object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video_Url[1].secure_url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/16 "></div>

      {/* Content */}
      <div
        className={`font-manrope absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-center px-4 sm:px-6 md:px-0 w-full max-w-[900px]`}
      >
        {/* Heading */}
        <div className="font-manrope md:w-[820px] mx-auto flex flex-col items-center justify-center">

          <div className="flex items-center flex-row justify-center md:gap-3">
            <button
              onClick={() => {
                router.push("/discover");
              }}
              className="cursor-pointer font-bold font-manrope text-[24px] sm:text-[40px] md:text-[52px] lg:text-[62px] text-white md:px-4 px-2 bg-secondary hover:bg-heading1 rounded-full"
            >
              Discover
            </button>
            <p className="font-bold font-manrope text-[24px] sm:text-[40px] md:text-[52px] lg:text-[62px] text-white">
              services your
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center">
            <p className="font-bold font-manrope text-[24px] sm:text-[40px] md:text-[52px] lg:text-[62px] text-white">
              neighbours trust
            </p>
            {/* <div className="w-68">
              <WordRotate
                words={words}
                className="font-bold font-manrope md:text-[30px] text-[24px] text-white font-monrope"
                duration={1.5}
              />
            </div> */}
          </div>

          <p className="md:text-[18px] text-[14px] font-poppins font-medium md:leading-[24px] leading-[20px] text-white">
            Search your suburb to discover plumbers, electricians, cleaners and
            more — recommended by people nearby, not strangers online.
          </p>
        </div>

        {/* Search bar */}
        <div className="flex flex-row items-center gap-4 bg-white rounded-full p-2 md:w-[718px] mx-auto md:mt-5 mt-4 ">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Enter your suburb or postcode"
            className="w-full  py-2 px-3 text-[#697586] text-[14px] sm:text-[16px] outline-none rounded-full"
          />
          <button
            onClick={() => {
              router.push(
                `/suberb-search/?search=${encodeURIComponent(searchTerm)}`,
              );
            }}
            disabled={!searchTerm}
            className={`flex items-center justify-center gap-2 bg-[#718496] text-white min-w-max  px-4 py-2.5 rounded-full text-[14px] sm:text-[16px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Search
            <IoMdArrowForward size={20} className="sm:size-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
