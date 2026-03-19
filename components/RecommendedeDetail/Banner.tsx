import Image from "next/image";
import React from "react";
import { IoShareSocial } from "react-icons/io5";
import { LuGlobe } from "react-icons/lu";
import { MdOutlineCall, MdOutlineChat } from "react-icons/md";

const Banner = () => {
  return (
    <main>
      <div
        className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 h-[208px] bg-no-repeat bg-center bg-cover relative"
        style={{ backgroundImage: "url('/images/detailbg.png')" }}
      >
        <div className="absolute top-4 right-6 bg-white rounded-full p-2 shadow-lg cursor-pointer">
          <Image
            src="/images/location-pin.png"
            alt="Location Pin"
            width={100}
            height={100}
            className="w-[40px] h-[41px]"
          />
        </div>

        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-[80px] h-[80px] rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
            <Image
              src="/images/suburb1.png"
              alt="Avatar"
              width={100}
              height={100}
              className="w-[60px] h-[60px] object-contain"
            />
          </div>
          <p className="text-center text-base font-semibold text-gray-900 mt-2">
            {"fdfdfdffdf"}
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center gap-6 sm:gap-[24px] mt-10">
        <p className="text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[30px] font-semibold font-manrope text-center">
          A to Z Plumbing
        </p>

        <div className="w-full max-w-[792px]">
          <div className="my-2 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-[13px]">
            <button className="w-full sm:flex-1 sm:w-[256px] flex items-center justify-center gap-2 sm:gap-8 text-[#3A5670] border-[#D5E8FC] text-[14px] sm:text-[16px] leading-[16px] font-medium font-outfit px-4 py-3 sm:py-4 border rounded-full">
              <p className="font-outfit">Website</p>
              <LuGlobe size={20} />
            </button>

            <button className="w-full sm:flex-1 sm:w-[256px] flex items-center justify-center gap-2 sm:gap-8 text-white bg-primary text-[14px] sm:text-[16px] leading-[16px] font-medium font-outfit px-4 py-3 sm:py-4 rounded-full">
              <p className="font-outfit">Call</p>
              <MdOutlineCall size={20} />
            </button>

            <button className="w-full sm:flex-1 sm:w-[256px] flex items-center justify-center gap-2 sm:gap-8 text-white bg-secondary text-[14px] sm:text-[16px] leading-[16px] font-medium font-outfit px-4 py-3 sm:py-4 rounded-full">
              <p className="font-outfit">Chat</p>
              <MdOutlineChat size={20} />
            </button>
          </div>
        </div>

        <div className="w-full max-w-[792px] mx-auto mt-1 sm:mt-6">
          <button className="bg-secondary text-white rounded-full flex items-center justify-center gap-2 sm:gap-[6.41px] w-full py-3 text-[12px] leading-[13.57px] font-outfit capitalize">
            <p>share with friend</p>
            <IoShareSocial size={20} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Banner;
