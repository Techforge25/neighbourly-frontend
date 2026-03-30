"use client";
import { RootState } from "@/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { LuThumbsUp } from "react-icons/lu";
import { MdOutlineCall, MdOutlineChat, MdVerified } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import CustomIcon from "./CustomIcon";
import { useRouter } from "next/navigation";
import ShareModal from "./ShareModal";
import { openShare } from "@/store/shareSlice";
import { api } from "@/src/service/axios";
import Loader from "./Loader";
import { setPage, setPaginationData } from "@/store/paginationSlice";
import { setCardLength } from "@/store/searchCountSlice";

const Card = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.tab.activeTab);
  const { page, limit, totalPages } = useSelector(
    (state: RootState) => state.pagination,
  );
  const [categoryData, setCategoryData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const subrubValue = params.get("search")?.split(",")[0].replace(/\s+/g, "");

    const search = subrubValue ? `&location=${subrubValue}` : "";

    const filterQuery =
      activeTab === "Most Recommended" ? "" : `&filter=${activeTab}`;

    const getCategotyData = async () => {
      setIsLoading(true);
      try {
        const res = await api.get(
          `recommendation?page=${page}&limit=${limit}${search ? `${search}${filterQuery}` : filterQuery}`,
        );
        const cetData = res.data;

        dispatch(setCardLength(cetData?.data?.recommendations?.docs.length));

        setCategoryData(cetData?.data?.recommendations);
        dispatch(
          setPaginationData({
            totalPages: cetData?.data?.recommendations?.totalPages,
            totalDocs: cetData?.data?.recommendations?.totalDocs,
            hasNextPage: cetData?.data?.recommendations?.hasNextPage,
            hasPrevPage: cetData?.data?.recommendations?.hasPrevPage,
          }),
        );
        setIsLoading(false);
      } catch (error: any) {
        console.log(error?.response?.data);
        setIsLoading(false);
      }
    };

    getCategotyData();
  }, [page, activeTab, dispatch]);

  return (
    <div className="md:my-10 max-w-[1396px] mx-auto">
      {categoryData?.docs?.length > 0 ? (
        <>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {categoryData?.docs?.map((item: any, ind: any) => (
              <div
                onClick={() => {
                  router.push(`/recomended-detial/${item.businessId}`);
                }}
                key={ind}
                className="hover:border-[1px] border cursor-pointer border-transparent hover:border-secondary transition duration-300 ease-linear p-4 shadow-lg rounded-[24px] min-h-[764px] max-w-[410px]"
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

                    <div className="grid grid-cols-3 gap-3 h-[32px] mt-2 pb-10">
                      {[...new Set(item.reasonsOfRecommendation.flat())].map(
                        (resItem: any, index: number) => (
                          <div key={index}>
                            <p
                              className={`font-manrope text-[14px] leading-[18px] md:w-[129px] line-clamp-1 font-medium border border-lightbg rounded-full px-2 py-1 ${
                                index === 0
                                  ? "bg-primary_light text-primary"
                                  : index === 1
                                    ? "bg-success_light text-success"
                                    : "text-text-dark bg-light-bg"
                              }`}
                            >
                              {resItem}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="w-full max-w-[378px] flex flex-col gap-2 mt-20">
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
                        {item?.location}
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

                  <div className="my-2 flex gap-2 justify-center sm:gap-[8px]">
                    {/* <button className="flex cursor-pointer items-center justify-center gap-2 sm:gap-4 text-[#3A5670] border-[#D5E8FC] text-[16px] leading-[16px] font-medium font-outfit px-4 py-4 border-[1px] rounded-full">
                      <p className="text-[16px] font-outfit">Website</p>
                      <LuGlobe size={20} />
                    </button> */}

                    <Link href={`tel:${item?.phone}`}>
                      <button className="flex items-center cursor-pointer justify-center gap-2 sm:gap-4 text-white bg-primary text-[16px] leading-[16px] font-medium font-outfit px-4 py-4 rounded-full">
                        <p className="text-[16px] font-outfit">Call</p>
                        <MdOutlineCall size={20} />
                      </button>
                    </Link>

                    <Link
                      href={`sms:${item?.phone}?body=Hi ${item?.contactPerson}`}
                      target="_blank"
                    >
                      <button className=" cursor-pointer flex items-center justify-center gap-2 sm:gap-4 text-white bg-secondary text-[16px] leading-[16px] font-medium font-outfit px-4 py-4 rounded-full">
                        <p className="text-[16px] font-outfit">Chat</p>
                        <MdOutlineChat size={20} />
                      </button>
                    </Link>
                  </div>

                  <div className="w-full max-w-[378px] mx-auto mt-6">
                    <button
                      onClick={(e) => {
                        dispatch(openShare(), e.stopPropagation());
                      }}
                      className="bg-secondary cursor-pointer text-white rounded-full flex items-center justify-center gap-2 sm:gap-[6.41px] w-full py-3 text-[12px] leading-[13.57px] font-outfit capitalize"
                    >
                      <p>share with friend</p>
                      <IoShareSocial size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <ShareModal />
          </div>

          {/* --- Reuse PaginatedList buttons here --- */}
          <div className="mt-6 flex gap-2 justify-center items-center">
            <button
              disabled={!categoryData?.hasPrevPage}
              onClick={() => dispatch(setPage(page - 1))}
              className="px-3 py-1 border rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Prev
            </button>

            <span>
              Page {page} of {totalPages}
            </span>

            <button
              disabled={!categoryData?.hasNextPage}
              onClick={() => dispatch(setPage(page + 1))}
              className="px-3 py-1 border rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="text-[32px] font-manrope font-semibold text-center text-para">
          {isLoading ? <Loader /> : "No recommendations found in this suburb"}
        </div>
      )}
    </div>
  );
};

export default Card;
