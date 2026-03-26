"use client";
import { RootState } from "@/store";
import { recommendations } from "@/utils/dumydata";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { IoEarthSharp, IoShareSocial } from "react-icons/io5";
import { LuGlobe, LuThumbsUp } from "react-icons/lu";
import { MdOutlineCall, MdOutlineChat, MdVerified } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import CustomIcon from "./CustomIcon";
import { useRouter } from "next/navigation";
import ShareModal from "./ShareModal";
import { openShare } from "@/store/shareSlice";
import { api } from "@/src/service/axios";

const Card = () => {

  const router = useRouter()
const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.tab.activeTab);

const [categoryData, setCategoryData] = useState<any[]>([]);

  const getCategotyData = async () => {
    try {
      const res = await api.get("recommendation");
      const cetData = res.data;
      setCategoryData(cetData?.data?.docs);
    } catch (error: any) {
      console.log(error?.response?.data);
    }
  };

  useEffect(() => {
    getCategotyData();
  }, []);
  

  const filteredData =
    activeTab.toLowerCase() === "Most Recommended".toLowerCase()
      ? categoryData // "Most Recommended" hai → sab items dikhao
      : categoryData.filter(
          (item) => item?.serviceType.toLowerCase() === activeTab.toLowerCase(),
        );

        

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);


  return (
    <div className="max-w-[1296px]  mx-auto md:my-10">
      {currentData.length > 0 ? (
        <>
          <div  className="flex items-center gap-4 flex-wrap justify-center">
            {currentData?.map((item, ind) => (
              <div
              onClick={()=>{router.push(`/recomended-detial/${item._id}`)}}
                key={ind}
                className="hover:border-[1px] border cursor-pointer border-transparent hover:border-secondary transition duration-300 ease-linear p-4 shadow-lg rounded-[24px]"
              >
                <div className="flex items-center gap-2 sm:gap-[6.41px]">
                  <span>
                    <MdVerified size={26} className="text-verified" />
                  </span>
                  <div className="flex flex-col w-[210px] gap-1">
                    <span className="capitalize text-[15px] font-manrope font-medium leading-[16px] text-verified">
                      verified
                    </span>
                    <span className="text-[11px] text-secondary font-medium font-manrope">
                      {"By Neighbourly"}
                    </span>
                  </div>
                </div>

                <div className=" max-w-[764px]">
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
                        {item.personName}
                      </p>
                    </div>
                  </div>

                  <div className="w-full w-[378px] flex-col gap-2 mt-20">
                    <div className="text-[14px] font-manrope leading-[16px] capitalize bg-lightbg whitespace-nowrap rounded-full font-medium px-2 py-1 w-fit text-para mt-4">
                      {item?.serviceType}
                    </div>

                    <div className="text-textdark font-manrope font-[24px] leading-[30px] font-semibold capitalize">
                      {item?.businessName}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-[8px]">
                      <span>
                        <LuThumbsUp size={24} className="text-secondary" />
                      </span>
                      <span className="text-secondary capitalize font-poppins font-medium text-[16px] leading-[28px]">
                        {`recommended by ${item?.recommendationCount} neighbours`}
                      </span>
                    </div>

                    <div className="flex gap-[8px] mt-2">
                      {item.reasonsOfRecommendation.map((resItem:any, index : number) => (
                        <div key={index}>
                          <p
                            className={`font-manrope text-[14px] leading-[16px] font-medium border border-lightbg rounded-full px-2 py-1 ${index === 0 ? "bg-primary_light text-primary" : index === 1 ? "bg-success_light text-success" : "text-text-dark bg-light-bg"}`}
                          >
                            {resItem.slice(0, 10)}...
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full max-w-[378px] flex flex-col gap-2 mt-4">
                    <div className="flex items-center gap-2">
                      <p>
                        <CustomIcon variant="location" />
                      </p>
                      <p className="text-[18px] leading-[30px] font-manrope font-medium text-tabText">
                        {"Trusted across"}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <button className="text-[14px] font-manrope text-tabText font-medium px-2 rounded-full bg-[#F4F8FF]">
                        {item.location}
                      </button>
                    </div>
                  </div>

                  <div className="w-full max-w-[378px] h-[45px] flex items-center gap-2 sm:gap-[9.61px] mt-6">
                    <div className="flex -space-x-2 overflow-hidden">
                      <Image
                        src={"/images/sayavatar.png"}
                        alt="avatar"
                        width={100}
                        height={100}
                        className="w-[26px] h-[26px] object-contain inline-block rounded-full"
                      />
                    </div>

                    <div className="bg-secondary w-full px-2 py-2 rounded-full text-white capitalize font-manrope font-medium text-[11px] leading-[16px]">
                      {`${item.personName} + ${item?.recommendationCount}  Others `}
                    </div>
                  </div>

                  <div className="my-2 flex gap-2 sm:gap-[8px]">
                  
                      <button className="flex cursor-pointer items-center justify-center gap-2 sm:gap-4 text-[#3A5670] border-[#D5E8FC] text-[16px] leading-[16px] font-medium font-outfit px-4 py-4 border-[1px] rounded-full">
                        <p className="text-[16px] font-outfit">Website</p>
                        <LuGlobe size={20} />
                      </button>
                    

                    <Link href={`tel:${item?.phone}`}>
                      <button className="flex items-center cursor-pointer justify-center gap-2 sm:gap-4 text-white bg-primary text-[16px] leading-[16px] font-medium font-outfit px-4 py-4 rounded-full">
                        <p className="text-[16px] font-outfit">Call</p>
                        <MdOutlineCall size={20} />
                      </button>
                    </Link>

                    <Link href={`sms:${item?.phone}?body=Hi ${item?.contactPerson}`} target="_blank">
                      <button className=" cursor-pointer flex items-center justify-center gap-2 sm:gap-4 text-white bg-secondary text-[16px] leading-[16px] font-medium font-outfit px-4 py-4 rounded-full">
                        <p className="text-[16px] font-outfit">Chat</p>
                        <MdOutlineChat size={20} />
                      </button>
                    </Link>
                  </div>

                  <div className="w-full max-w-[378px] mx-auto mt-6">
                    <button onClick={(e) => {dispatch(openShare(),e.stopPropagation())}} className="bg-secondary cursor-pointer text-white rounded-full flex items-center justify-center gap-2 sm:gap-[6.41px] w-full py-3 text-[12px] leading-[13.57px] font-outfit capitalize">
                      <p>share with friend</p>
                      <IoShareSocial size={20} />
                    </button>
                  </div>



                </div>
              </div>
            ))}

            <ShareModal />
          </div>

          {filteredData.length > 9 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-1 border rounded"
              >
                Prev
              </button>

              
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1 ? "bg-secondary text-white" : "border"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="px-3 py-1 border rounded"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-[32px] font-manrope font-semibold text-center text-para">
          Not Category Data Found ...
        </div>
      )}
    </div>
  );
};

export default Card;
