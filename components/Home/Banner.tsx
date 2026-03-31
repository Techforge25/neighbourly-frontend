"use client";
import { IoMdArrowForward } from "react-icons/io";
import WordRotate from "../ui/word-rotate";
import CustomIcon from "../CustomIcon";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

  const video_Url = [
    {
      url: "http://res.cloudinary.com/dh5msgx99/video/upload/v1774414879/wiqkeqds10d2xa1lcpik.mp4",
    },
    {
      secure_url:
        "https://res.cloudinary.com/dh5msgx99/video/upload/v1774414879/wiqkeqds10d2xa1lcpik.mp4",
    },
    {
      playback_url:
        "https://res.cloudinary.com/dh5msgx99/video/upload/sp_auto/v1774414879/wiqkeqds10d2xa1lcpik.m3u8",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  return (
    <div className="relative h-[67.2vh] w-full overflow-hidden">
      {/* Video background */}

      <video
        className="absolute top-0 left-0 w-full h-[67.2vh] object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video_Url[1].secure_url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#000]/16 "></div>

      {/* Content */}
      <div
        className={`font-manrope absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-center px-4 sm:px-6 md:px-0 w-full max-w-5xl`}
      >
        {/* Heading */}
        <div className=" mb-6 font-manrope md:w-[820px] mx-auto flex flex-col items-center justify-center gap-[12px]">
          <div className="flex items-center justify-center md:gap-4 gap-2">
            <button onClick={()=>{router.push('/discover')}} className="cursor-pointer font-bold font-manrope md:text-[30px] text-[24px] text-white font-monrope text-white bg-secondary md:px-4 px-2 py-1  rounded-full">Discover</button>
            <p className="font-bold text-[24px] sm:text-[40px] md:text-[52px] lg:text-[62px] text-white">
              services your
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:mt-2">
            <p className="font-bold text-[24px] sm:text-[40px] md:text-[52px] lg:text-[62px] text-white">
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

          <p className="mt-2 text-[18px] font-poppins font-medium md:leading-[24px] leading-[20px] text-white">
            Search your suburb to discover plumbers, electricians, cleaners and
            more — recommended by people nearby, not strangers online.
          </p>
        </div>

        {/* Search bar */}
        <div className="flex flex-row items-center gap-4 bg-white rounded-full p-2 md:w-[718px] mx-auto">
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
