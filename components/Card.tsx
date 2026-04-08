"use client";
import { RootState } from "@/store";
import Link from "next/link";
import { useEffect,  useState } from "react";
import { MdOutlineCall, MdOutlineChat, } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import ShareModal from "./ShareModal";
import { api } from "@/src/service/axios";
import Loader from "./Loader";
import { setPage, setPaginationData } from "@/store/paginationSlice";
import { setCardLength, setIsShowFullList } from "@/store/searchCountSlice";
import { motion } from "framer-motion";
import { colorClasses, colorFunctions } from "@/utils/dumydata";
import Across from "./Across";

const Card = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const params = useSearchParams();
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
    const subrubValue = params.get("search");
    const subrubValueFilter = params.get("filter");

    const search = subrubValue ? `&location=${subrubValue}` : "";

    const seacrhFilter = `&filter=${subrubValueFilter}&location=${subrubValue}`;

    const filterQuery =
      activeTab === "Most Recommended" ? "" : `&filter=${activeTab}`;

    const getCategotyData = async () => {
      setIsLoading(true);
      try {
        const res = await api.get(
          `recommendation?page=${page}&limit=${!isListTrue ? limit : 9}${search ? `${search}${filterQuery}` : subrubValueFilter ? `&filter=${subrubValueFilter}` : filterQuery}`,
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
  }, [page, limit, activeTab, dispatch, isListTrue, triggerRecommendations,params]);


  return (
    <div className="">
      {categoryData?.docs?.length > 0 ? (
        <>
          <div className="md:my- max-w-[1396px] mx-auto md:p-0 p-4">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {categoryData?.docs?.slice(0, 3).map((item: any, ind: any) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  key={ind}
                  className="hover:border-[1px] border cursor-pointer border-modal-line hover:border-secondary transition duration-300 ease-linear p-4 shadow-lg rounded-[24px] sm:min-h-[540px] h-[440px] w-[410px] bg-white "
                >
                  <div className=" max-w-[764px] flex flex-col gap-[22px]">
                    {/* B-T-Name */}
                    <div className="flex flex-col sm:gap-[8px] gap-[6px] ">
                      <p className="text-center md:text-[42px] sm:text-[32px] text-[24px] font-manrope  font-extrabold text-textdark">
                        {item.personName}
                      </p>

                      <p className="text-para font-poppins sm:text-[16px] text-[14px]  text-center">
                        {item?.businessName}
                      </p>

                      <p
                        className={`text-${colorFunctions(item?.serviceType)} sm:text-[16px] text-[14px] font-manrope font-bold text-center`}
                      >
                        {item?.serviceType}
                      </p>
                    </div>

                    {/* Rcommendations Count */}
                    <div className="w-full w-[378px] flex-col gap-2 ">
                      <div
                        className={`border-[1px] text-white
                        ${
                          item.serviceType === "Plumber"
                            ? "bg-primary"
                            : item.serviceType === "Electrician"
                              ? "bg-green"
                              : "bg-secondary"
                        } 
                        border-modal-line p-[12px] rounded-t-[12px] flex flex-col gap-[10px] `}
                      >
                        <div className="flex items-center gap-2 sm:gap-[8px]">
                          <span className="md:text-[42px] sm:text-[32px] text-[24px] font-manrope font-extrabold">
                            {item?.recommendationCount}
                          </span>{" "}
                          <span className="font-poppins md:text-[22px] sm:text-[18px] text-[16px]">{`local recommendations`}</span>
                        </div>
                      </div>
                    </div>

                    {/* Subrub Show */}
                    <div className="w-full max-w-[378px] flex flex-col gap-1 ">
                      <div>
                        <p className="font-manrope font-semibold md:text-[18px] sm:text-[16px] text-[14px] text-tabText  ">
                          Also trusted in
                        </p>
                      </div>
                      <div className="flex items-center flex-wrap gap-[]">
                        {item?.addresses?.map((items: any, indx: number) => (
                          <p
                            key={indx}
                            className="font-poppins md:text-[16px] text-[14px] text-para"
                          >
                            <span> {items} - </span>
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Local Recommendation */}
                    <div className="flex flex-col space-y-[4px]">
                      <p className="font-manrope font-semibold md:text-[18px] sm:text-[16px] text-[14px] text-tabText">
                        Locals mention
                      </p>

                      <div className="flex items-center flex-wrap ">
                        {[...new Set(item.reasonsOfRecommendation.flat())]
                          ?.slice(0, 3)
                          ?.map((resItem: any, index: number) => (
                            <div key={index}>
                              <p
                                className={`font-poppins md:text-[16px] text-[14px] text-para`}
                              >
                                {resItem} -{" "}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="my-2 flex items-center gap-2 w-full">
                      <Link
                        href={`tel:${item?.businessContact}`}
                        className="w-full"
                      >
                        <button className="w-full flex items-center cursor-pointer justify-center gap-2 sm:gap-4 text-white bg-primary text-[16px] leading-[16px] font-medium font-outfit md:px-4 px-2 md:py-4 py-2 rounded-full">
                          <p className="text-[16px] font-outfit">Call</p>
                          <MdOutlineCall size={20} />
                        </button>
                      </Link>

                      <Link
                        href={`sms:${item?.businessContact}?body=Hi ${item?.contactPerson}`}
                        target="_blank"
                        className="w-full"
                      >
                        <button className="w-full cursor-pointer flex items-center justify-center gap-2 sm:gap-4 text-white bg-secondary text-[16px] leading-[16px] font-medium font-outfit md:px-4 px-2 md:py-4 py-2 rounded-full">
                          <p className="text-[16px] font-outfit">Text</p>
                          <MdOutlineChat size={20} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:py-20 py-6">
            <Across />
          </div>

          <div className=" max-w-[1396px] mx-auto md:p-0 p-4">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {categoryData?.docs?.slice(3).map((item: any, ind: any) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  key={ind}
                  className="hover:border-[1px] border cursor-pointer border-modal-line hover:border-secondary transition duration-300 ease-linear p-4 shadow-lg rounded-[24px] md:min-h-[515px] max-w-[410px] bg-white "
                >
                  <div className=" max-w-[764px] flex flex-col gap-[22px]">
                    {/* B-T-Name */}
                    <div className="flex flex-col sm:gap-[8px] gap-[6px] ">
                      <p className="text-center md:text-[42px] sm:text-[32px] text-[24px] font-manrope  font-extrabold text-textdark">
                        {item.personName}
                      </p>

                      <p className="text-para font-poppins sm:text-[16px] text-[14px]  text-center">
                        {item?.businessName}
                      </p>

                      <p
                        className={`text-${colorFunctions(item?.serviceType)} sm:text-[16px] text-[14px] font-manrope font-bold text-center`}
                      >
                        {item?.serviceType}
                      </p>
                    </div>

                    {/* Rcommendations Count */}
                    <div className="w-full w-[378px] flex-col gap-2 ">
                      <div
                        className={`border-[1px] text-white
                        ${
                          item.serviceType === "Plumber"
                            ? "bg-primary"
                            : item.serviceType === "Electrician"
                              ? "bg-green"
                              : "bg-secondary"
                        } 
                        border-modal-line p-[12px] rounded-t-[12px] flex flex-col gap-[10px] `}
                      >
                        <div className="flex items-center gap-2 sm:gap-[8px]">
                          <span className="md:text-[42px] sm:text-[32px] text-[24px] font-manrope font-extrabold">
                            {item?.recommendationCount}
                          </span>{" "}
                          <span className="font-poppins md:text-[22px] sm:text-[18px] text-[16px]">{`local recommendations`}</span>
                        </div>
                      </div>
                    </div>

                    {/* Subrub Show */}
                    <div className="w-full max-w-[378px] flex flex-col gap-1 ">
                      <div>
                        <p className="font-manrope font-semibold md:text-[18px] sm:text-[16px] text-[14px] text-tabText  ">
                          Also trusted in
                        </p>
                      </div>
                      <div className="flex items-center flex-wrap gap-[]">
                        {item?.addresses?.map((items: any, indx: number) => (
                          <p
                            key={indx}
                            className="font-poppins md:text-[16px] text-[14px] text-para"
                          >
                            <span> {items} - </span>
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Local Recommendation */}
                    <div className="flex flex-col space-y-[4px]">
                      <p className="font-manrope font-semibold md:text-[18px] sm:text-[16px] text-[14px] text-tabText">
                        Locals mention
                      </p>

                      <div className="flex items-center flex-wrap ">
                        {[...new Set(item.reasonsOfRecommendation.flat())]
                          ?.slice(0, 3)
                          ?.map((resItem: any, index: number) => (
                            <div key={index}>
                              <p
                                className={`font-poppins md:text-[16px] text-[14px] text-para`}
                              >
                                {resItem} -{" "}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="my-2 flex items-center gap-2 w-full">
                      <Link
                        href={`tel:${item?.businessContact}`}
                        className="w-full"
                      >
                        <button className="w-full flex items-center cursor-pointer justify-center gap-2 sm:gap-4 text-white bg-primary text-[16px] leading-[16px] font-medium font-outfit md:px-4 px-2 md:py-4 py-2 rounded-full">
                          <p className="text-[16px] font-outfit">Call</p>
                          <MdOutlineCall size={20} />
                        </button>
                      </Link>

                      <Link
                        href={`sms:${item?.businessContact}?body=Hi ${item?.contactPerson}`}
                        target="_blank"
                        className="w-full"
                      >
                        <button className="w-full cursor-pointer flex items-center justify-center gap-2 sm:gap-4 text-white bg-secondary text-[16px] leading-[16px] font-medium font-outfit md:px-4 px-2 md:py-4 py-2 rounded-full">
                          <p className="text-[16px] font-outfit">Text</p>
                          <MdOutlineChat size={20} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <ShareModal />

          {/* --- Reuse PaginatedList buttons here --- */}
          {isListTrue && (
            <div className="mt-6 flex gap-2 justify-center items-center pb-4">
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
        <div className="w-[90%] md:max-w-[600px] mx-auto text-center py-20">
          {isLoading ? (
            <Loader />
          ) : (
            <span className="md:text-[32px] text-[16px] font-manrope font-semibold text-center text-para">
              We haven't reached your suburb yet. Be the first to start the
              community!
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
