"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoEarthSharp, IoShareSocial } from "react-icons/io5";
import { LuGlobe } from "react-icons/lu";
import { MdOutlineCall, MdOutlineChat, MdVerified } from "react-icons/md";
import ShareModal from "../ShareModal";
import { useDispatch } from "react-redux";
import { openShare } from "@/store/shareSlice";

type Props = {
  recomendedDetail: any;
};

const Banner = ({ recomendedDetail }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoading = !recomendedDetail;

  return (
    <main className="shadow-md ">
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
            {isLoading ? (
              <span className="block w-[120px] h-[16px] bg-lightbg rounded animate-pulse"></span>
            ) : (
              recomendedDetail?.personName
            )}
          </p>
        </div>

        <div className="absolute md:top-6 top-4 left-6 md:left-20">
          <div className="flex items-center md:gap-[10px] gap-[6px] ">
            <button
              onClick={() => router.back()}
              className="md:px-4 md:py-4 px-2 py-2 rounded-full bg-primary cursor-pointer"
            >
              <IoMdArrowBack size={24} color="#ffff" />
            </button>

            <button className="border-[0.8px] border-[#D5E8FC] flex items-center md:gap-[6.41px] gap-[3.21px] md:w-[210.61px] w-[160px] md:px-[13px] px-[6px] md:py-[8px] py-[4px] rounded-full bg-white">
              <span>
                <MdVerified size={24} color="#1D69E1" />
              </span>
              <div className="text-start">
                <p className="capitalize text-[16px] text-verified">verified</p>
                <p className="capitalize text-[11px] text-secondary">
                  by Neighbourly
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center gap-6 sm:gap-[24px] mt-10">
        <p className="text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[30px] font-semibold font-manrope text-center">
          {isLoading ? (
            <span className="block mx-auto w-[200px] h-[20px] bg-lightbg rounded animate-pulse"></span>
          ) : (
            recomendedDetail?.businessName
          )}
        </p>

        <div className="flex md:flex-row flex-col  gap-2 mt-4">
          <div className="flex items-center gap-[8px] ">
            <p>
              <IoEarthSharp size={24} />
            </p>
            <p className="text-[18px] leading-[30px] font-manrope text-tabText font-semibold ">
              Trusted across
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="text-[14px] font-manrope text-tabText font-medium px-2 rounded-full bg-[#F4F8FF] capitalize">
              {isLoading ? (
                <span className="block w-[80px] h-[14px] bg-lightbg rounded animate-pulse"></span>
              ) : (
                recomendedDetail?.location
              )}
            </button>
          </div>
        </div>

        <div className="w-full max-w-[792px]">
          <div className="my-2 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-[13px]">
            {/* <button className="w-full sm:flex-1 cursor-pointer sm:w-[256px] flex items-center justify-center gap-2 sm:gap-8 text-[#3A5670] border-[#D5E8FC] text-[14px] sm:text-[16px] leading-[16px] font-medium font-outfit px-4 py-3 sm:py-4 border rounded-full">
              <p className="font-outfit">Website</p>
              <LuGlobe size={20} />
            </button> */}

            <Link href={`tel:${recomendedDetail?.contact}`}>
              <button className="w-full sm:flex-1 sm:w-[256px] cursor-pointer flex items-center justify-center gap-2 sm:gap-8 text-white bg-primary text-[14px] sm:text-[16px] leading-[16px] font-medium font-outfit px-4 py-3 sm:py-4 rounded-full">
                <p className="font-outfit">Call</p>
                <MdOutlineCall size={20} />
              </button>
            </Link>

            <Link href={`sms:${recomendedDetail?.contact}?body=Hello%20there!`}>
              <button className="w-full sm:flex-1 sm:w-[256px] cursor-pointer flex items-center justify-center gap-2 sm:gap-8 text-white bg-secondary text-[14px] sm:text-[16px] leading-[16px] font-medium font-outfit px-4 py-3 sm:py-4 rounded-full">
                <p className="font-outfit">Chat</p>
                <MdOutlineChat size={20} />
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full max-w-[792px] mx-auto mt-1 sm:mt-6">
          <button
            onClick={(e) => {
              dispatch(openShare(), e.stopPropagation());
            }}
            className="bg-secondary text-white rounded-full flex items-center justify-center gap-2 sm:gap-[6.41px] w-full py-3 text-[12px] leading-[13.57px] font-outfit capitalize"
          >
            <p>share with friend</p>
            <IoShareSocial size={20} />
          </button>
        </div>
      </div>

      <ShareModal />
    </main>
  );
};

export default Banner;
