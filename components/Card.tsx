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
import { setCardLength, setIsShowFullList } from "@/store/searchCountSlice";
import { motion } from "framer-motion";

const Card = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.tab.activeTab);
  const { page, limit, totalPages } = useSelector(
    (state: RootState) => state.pagination,
  );
  const [categoryData, setCategoryData] = useState<any>([]);
  const [isListTrue, setIsListTrue] = useState(false);
  const { triggerRecommendations } = useSelector(
    (state: RootState) => state.share,
  );
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
        console.log(isListTrue, "is list true");
        const res = await api.get(
          `recommendation?page=${page}&limit=${!isListTrue ? limit : 9}${search ? `${search}${filterQuery}` : filterQuery}`,
        );
        const cetData = res.data;
        setIsListTrue(cetData?.data?.showFullList);
        dispatch(setCardLength(cetData?.data?.recommendations?.docs.length));
        dispatch(setIsShowFullList(cetData?.data?.showFullList));

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
  }, [page, limit, activeTab, dispatch, isListTrue, triggerRecommendations]);

  const colorClasses = [
    "bg-primary_light text-primary",
    "bg-success_light text-success",
    "text-text-dark bg-light-bg",
    "text-textdark bg-textdark/5",
    "text-verified bg-verified/5",
    "text-green bg-green/5",
    "text-share-modal-icon bg-share-modal-icon/5",
    "text-secondary bg-secondary/5",
    "text-para bg-para/5",
    "text-tabText bg-tabText/5",
    "text-tabText bg-border",
    "text-tabText bg-border",
    "text-modal-line bg-modal-line/5",
  ];

  const getColorByIndex = (index: number) => {
    return colorClasses[index % colorClasses.length];
  };

  return (
    <div className="md:my-10 max-w-[1396px] mx-auto mmd:p-0 p-4">
      {categoryData?.docs?.length > 0 ? (
        <>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {categoryData?.docs?.map((item: any, ind: any) => (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                onClick={() => {
                  router.push(`/recomended-detial/${item.businessId}`);
                }}
                key={ind}
                className="hover:border-[1px] border cursor-pointer border-transparent hover:border-secondary transition duration-300 ease-linear p-4 shadow-lg rounded-[24px] min-h-[783px] max-w-[410px]"
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
                    style={{
                      backgroundImage:
                        item.serviceType == "Plumber"
                          ? "url('/images/cardbg.png')"
                          : item.serviceType == "Electrician"
                            ? "url('/images/electricinabg.png')"
                            : item.serviceType == "Handyman"
                              ? "url('/images/handymanbg.png')"
                              : "url('/images/cardbg.png')",
                    }}
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
                          src={
                            item?.serviceType == "Plumber"
                              ? "/images/plumber.png"
                              : item?.serviceType == "Electrician"
                                ? "/images/electrician.png"
                                : item?.serviceType == "Handyman"
                                  ? "/images/handyman.png"
                                  : "/images/suburb1.png"
                          }
                          alt="Avatar"
                          width={100}
                          height={100}
                          className="w-[60px] h-[60px] object-contain"
                        />
                      </div>
                      <p className="text-center md:text-[16px] text-[14px]  font-semibold text-gray-900 mt-2">
                        {item.personName}
                      </p>
                      <div className="md:text-[14px] text-[12px] font-manrope leading-[16px] capitalize bg-lightbg whitespace-nowrap rounded-full font-medium px-2 py-1 w-fit text-para mt-4">
                        {item?.serviceType}
                      </div>
                    </div>
                  </div>

                  <div className="w-full w-[378px] flex-col gap-2 mt-20">
                    <div className="border-[1px] border-modal-line p-[12px] rounded-[12px] flex flex-col gap-[10px] ">
                      <div className="flex items-center gap-2 sm:gap-[8px]">
                        <span className="bg-secondary h-[32px] w-[32px] flex items-center justify-center rounded-[5px] ">
                          <LuThumbsUp size={24} className="text-white" />
                        </span>
                        <span className="text-tabText capitalize font-poppins font-medium md:text-[18px] text-[14px] leading-[28px]">
                          {`recommended by`}
                        </span>
                      </div>

                      <div className="">
                        <span className="text-green text-[32px] font-medium font-poppins">
                          {item?.recommendationCount}
                        </span>{" "}
                        <span className="text-[13px] text-secondary font-medium font-poppins">
                          Neighbours
                        </span>
                      </div>
                    </div>

                    <div className="text-textdark font-manrope text-[24px] leading-[30px] font-semibold capitalize mt-4">
                      {item?.businessName}
                    </div>

                    <div className="grid grid-cols-3 gap-x-2 h-[32px] mt-3">
                      {[...new Set(item.reasonsOfRecommendation.flat())]
                        ?.slice(0, 3)
                        ?.map((resItem: any, index: number) => (
                          <div key={index}>
                            <p
                              className={`font-manrope text-[14px] leading-[18px] md:w-[120px] line-clamp-1 font-medium border border-lightbg rounded-full px-2 py-1 ${getColorByIndex(index)}`}
                            >
                              {resItem}
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
                        {"Most recommend in"}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item?.addresses?.map((items: any, indx: number) => (
                        <button
                          key={indx}
                          className="text-[14px] font-manrope text-tabText font-medium px-[12px] rounded-full bg-bgLight"
                        >
                          <span>{items}</span>
                        </button>
                      ))}
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

                  <div className="my-2 flex items-center gap-2 w-full">
                    <Link href={`tel:${item?.phone}`} className="w-full">
                      <button className="w-full flex items-center cursor-pointer justify-center gap-2 sm:gap-4 text-white bg-primary text-[16px] leading-[16px] font-medium font-outfit md:px-4 px-2 md:py-4 py-2 rounded-full">
                        <p className="text-[16px] font-outfit">Call</p>
                        <MdOutlineCall size={20} />
                      </button>
                    </Link>

                    <Link
                      href={`sms:${item?.phone}?body=Hi ${item?.contactPerson}`}
                      target="_blank"
                      className="w-full"
                    >
                      <button className="w-full cursor-pointer flex items-center justify-center gap-2 sm:gap-4 text-white bg-secondary text-[16px] leading-[16px] font-medium font-outfit md:px-4 px-2 md:py-4 py-2 rounded-full">
                        <p className="text-[16px] font-outfit">Text</p>
                        <MdOutlineChat size={20} />
                      </button>
                    </Link>
                  </div>

                  <div className="w-full max-w-[378px] mx-auto mt-6">
                    <button
                      onClick={(e) => {
                        dispatch(openShare(), e.stopPropagation());
                      }}
                      className="bg-green cursor-pointer text-white rounded-full flex items-center justify-center gap-2 sm:gap-[6.41px] w-full md:py-3 py-2 text-[12px] leading-[13.57px] font-outfit capitalize"
                    >
                      <p>Share</p>
                      <IoShareSocial size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            <ShareModal />
          </div>

          {/* --- Reuse PaginatedList buttons here --- */}
          {isListTrue && (
            <div className="mt-6 flex gap-2 justify-center items-center">
              <button
                disabled={!categoryData?.hasPrevPage || isLoading}
                onClick={() => dispatch(setPage(page - 1))}
                className="px-3 py-1 border rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Prev
              </button>

              <span>
                Page {page} of {totalPages}
              </span>

              <button
                disabled={!categoryData?.hasNextPage || isLoading}
                onClick={() => dispatch(setPage(page + 1))}
                className="px-3 py-1 border rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-[32px] font-manrope font-semibold text-center text-para">
          {isLoading ? (
            <Loader />
          ) : (
            "We haven't reached your suburb yet. Be the first to start the community!"
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
