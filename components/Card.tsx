"use client";
import { RootState } from "@/store";
import { Suburb_Data } from "@/utils/dumydata";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { IoEarthSharp, IoShareSocial } from "react-icons/io5";
import { LuGlobe, LuThumbsUp } from "react-icons/lu";
import { MdOutlineCall, MdOutlineChat, MdVerified } from "react-icons/md";
import { useSelector } from "react-redux";

const Card = () => {
  const activeTab = useSelector((state: RootState) => state.tab.activeTab);

  const filteredData =
    activeTab.toLowerCase() === "Most Recommended".toLowerCase()
      ? Suburb_Data // "Most Recommended" hai → sab items dikhao
      : Suburb_Data.filter(
          (item) => item.category.toLowerCase() === activeTab.toLowerCase(),
        );

  console.log(filteredData, "filteredDatafilteredData");

  return (
    <div className="max-w-[1296px]  mx-auto md:my-10 my-4">
      {filteredData.length > 0 ? (
        <Link href={'/recomended-detial'}>
          <div className="min-w-[410.67px] mx-auto flex items-center  gap-[32px] px-4">
            {filteredData?.map((item, ind) => (
              <div
                key={ind}
                className="border-[1px] border-secondary p-[16px] rounded-[18px] min-w-[410px]"
              >
                {item.isVerified && (
                  <div>
                    <div className="flex items-center gap-2 sm:gap-[6.41px]">
                      <span>
                        <MdVerified size={26} className="text-verified" />
                      </span>
                      <div className="flex flex-col w-[210px] gap-1">
                        <span className="capitalize text-[15px] font-manrope font-medium leading-[16px] text-verified">
                          verified
                        </span>
                        <span className="text-[11px] text-secondary font-medium font-manrope">
                          {item.verifiedBy}
                        </span>
                      </div>
                    </div>

                    <div
                      className="relative w-full max-w-[378px] h-[135px] mx-auto rounded-[18px] bg-contain bg-center bg-no-repeat mt-4"
                      style={{ backgroundImage: "url('/images/cardbg.png')" }}
                     >
                      <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg cursor-pointer">
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
                          {item.name}
                        </p>
                      </div>
                    </div>

                    <div className="w-full max-w-[378px] flex flex-col gap-2 mt-20">
                      <div className="text-[14px] font-manrope leading-[16px] capitalize bg-[#E0E7ED80] rounded-full font-medium h-[24px] w-[79px] flex items-center justify-center text-para mt-4">
                        {item.category}
                      </div>

                      <div className="text-textdark font-manrope font-[24px] leading-[30px] font-semibold capitalize">
                        {item.slug}
                      </div>

                      <div className="flex items-center gap-2 sm:gap-[8px]">
                        <span>
                          <LuThumbsUp size={24} className="text-secondary" />
                        </span>
                        <span className="text-secondary capitalize font-poppins font-medium text-[16px] leading-[28px]">
                          {item.recommendation}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 sm:gap-[8px]">
                        {item.res.map((resItem, index) => (
                          <div key={index}>
                            <p
                              className={`font-manrope text-[14px] leading-[16px] font-medium w-[120px] h-[32px] flex items-center justify-center rounded-full capitalize ${resItem.bg} ${resItem.textColor}`}
                            >
                              {resItem.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full max-w-[378px] flex flex-col gap-2 mt-4">
                      <div className="flex items-center gap-2 sm:gap-8">
                        <p>
                          <IoEarthSharp size={24} />
                        </p>
                        <p className="text-[18px] leading-[30px] font-manrope text-tabText">
                          {item.trusted.title}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.trusted.tag.map((tagItem, index) => (
                          <button
                            key={index}
                            className="text-[14px] font-manrope text-tabText font-medium px-2 rounded-full bg-[#F4F8FF] h-[32px] w-[106px]"
                          >
                            {tagItem}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="w-full max-w-[378px] h-[45px] flex items-center gap-2 sm:gap-[9.61px] mt-6">
                      <div className="flex -space-x-2 overflow-hidden">
                        {item.mine.image.map((imgItem, index) => (
                          <Image
                            key={index}
                            src={imgItem}
                            alt="avatar"
                            width={100}
                            height={100}
                            className="w-[26px] h-[26px] inline-block rounded-full ring-2 outline -outline-offset-1 outline-white/10"
                          />
                        ))}
                      </div>

                      <div className="bg-secondary w-full px-2 py-1 rounded-full text-white capitalize font-manrope font-medium text-[11px] leading-[16px]">
                        {item.mine.data}
                      </div>
                    </div>

                    <div className="my-2 flex flex-wrap gap-2 sm:gap-[13px]">
                      <button className="flex-1 min-w-[117px] flex items-center justify-center gap-2 sm:gap-8 text-[#3A5670] border-[#D5E8FC] text-[16px] leading-[16px] font-medium font-outfit px-4 py-4 border-[1px] rounded-full">
                        <p className="text-[16px] font-outfit">Website</p>
                        <LuGlobe size={20} />
                      </button>
                      <button className="flex-1 min-w-[117px] flex items-center justify-center gap-2 sm:gap-8 text-white bg-primary text-[16px] leading-[16px] font-medium font-outfit px-4 py-4 rounded-full">
                        <p className="text-[16px] font-outfit">Call</p>
                        <MdOutlineCall size={20} />
                      </button>
                      <button className="flex-1 min-w-[117px] flex items-center justify-center gap-2 sm:gap-8 text-white bg-secondary text-[16px] leading-[16px] font-medium font-outfit px-4 py-4 rounded-full">
                        <p className="text-[16px] font-outfit">Chat</p>
                        <MdOutlineChat size={20} />
                      </button>
                    </div>

                    <div className="w-full max-w-[378px] mx-auto mt-6">
                      <button className="bg-secondary text-white rounded-full flex items-center justify-center gap-2 sm:gap-[6.41px] w-full py-3 text-[12px] leading-[13.57px] font-outfit capitalize">
                        <p>share with friend</p>
                        <IoShareSocial size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Link>
      ) : (
        <div className="text-[32px] font-manrope font-semibold">
          Not Category Data Found ...
        </div>
      )}
    </div>
  );
};

export default Card;
