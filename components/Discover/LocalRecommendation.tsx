"use client";
import Card from "../Card";
import ButtonModal from "../ButtomModal";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Across from "../Across";
import { cardData, colorFunctions } from "@/utils/dumydata";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdOutlineCall, MdOutlineChat } from "react-icons/md";

const LocalRecommendation = () => {
  const cardLength = useSelector(
    (state: RootState) => state.cardLength.isShowFullList,
  );
  return (
    <>
      {!cardLength && (
        <>
          <div className="max-w-[1396px] mx-auto">
            <div className="flex flex-col py-10 items-center justify-center">
              <p className="md:text-[42px] text-[32px] text-center font-manrope font-bold md:leading-[49px] leading-[40px] p-4">
                <span className="text-textdark">Want to see more </span>
                <br />
                <span className="text-primary">local recommendations?</span>
              </p>

              <ButtonModal bg={"text-secondary"} />
            </div>

            {/* <div className="mt-20 relative w-full overflow-hidden flex items-center flex-wrap justify-center ">
              {cardData.map((item, ind) => (
                <motion.div
                  key={ind}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-between hover:border border cursor-pointer border-modal-line hover:border-secondary transition duration-300 ease-linear p-4 shadow-lg rounded-[24px] sm:h-[540px] sm:w-[410px] w-[350px] bg-white"
                >
                  CONTENT WRAPPER
                  <div className="flex flex-col h-full justify-between">
                    TOP CONTENT
                    <div className="flex flex-col gap-[18px]">
                      HEADER
                      <div className="flex flex-col gap-[6px]">
                        <p className="text-center md:text-[42px] sm:text-[32px] text-[24px] font-manrope font-extrabold text-textdark line-clamp-1">
                          {item.personName}
                        </p>

                        <p className="text-para font-poppins sm:text-[16px] text-[14px] text-center line-clamp-2">
                          at {item?.businessName}
                        </p>

                        <p
                          className={`text-${colorFunctions(
                            item?.serviceType,
                          )} sm:text-[16px] text-[14px] font-manrope font-bold text-center`}
                        >
                          {item?.serviceType}
                        </p>
                      </div>

                      RECOMMENDATION BOX
                      <div className="w-full flex flex-col">
                        <div
                          className={`border text-white ${
                            item?.serviceType === "Plumber"
                              ? "bg-primary"
                              : item?.serviceType === "Electrician"
                                ? "bg-green"
                                : "bg-secondary"
                          } border-modal-line p-[12px] rounded-t-[12px] flex flex-col gap-[10px]`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="md:text-[42px] sm:text-[32px] text-[24px] font-manrope font-extrabold">
                              {10}
                            </span>
                            <span className="font-poppins md:text-[22px] sm:text-[18px] text-[16px]">
                              Local recommendations
                            </span>
                          </div>
                        </div>
                      </div>

                      ADDRESSES
                      <div className="flex flex-col gap-1">
                        <p className="font-manrope font-semibold md:text-[18px] sm:text-[16px] text-[14px] text-tabText">
                          Also trusted in
                        </p>

                        <div className="flex flex-wrap gap-1 line-clamp-2">
                          {item?.addresses?.map((addr: any, i: number) => (
                            <p
                              key={i}
                              className="font-poppins md:text-[16px] text-[14px] text-para"
                            >
                              {addr} -
                            </p>
                          ))}
                        </div>
                      </div>

                      REASONS
                      <div className="flex flex-col gap-1">
                        <p className="font-manrope font-semibold md:text-[18px] sm:text-[16px] text-[14px] text-tabText">
                          Locals mention
                        </p>

                        <div className="flex flex-wrap line-clamp-2">
                          {[...new Set(item.reasonsOfRecommendation?.flat())]
                            ?.slice(0, 3)
                            ?.map((resItem: any, index: number) => (
                              <p
                                key={index}
                                className="font-poppins md:text-[16px] text-[14px] text-para"
                              >
                                {resItem} -
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>

                    BUTTONS (ALWAYS BOTTOM)
                    <div className="mt-4 flex items-center gap-2 w-full">
                      <Link
                        href={`tel:${item?.businessContact}`}
                        className="w-full"
                      >
                        <button
                          className={`w-full flex items-center cursor-pointer justify-center gap-2 text-white sm:text-[18px] text-[14px] font-medium font-outfit px-4 py-3 rounded-full ${
                            item?.serviceType === "Electrician"
                              ? "bg-green"
                              : item?.serviceType === "Handyman"
                                ? "bg-secondary"
                                : "bg-primary"
                          }`}
                        >
                          Call
                          <MdOutlineCall size={20} />
                        </button>
                      </Link>

                      <Link
                        href={`sms:${item?.businessContact}?body=Hi`}
                        target="_blank"
                        className="w-full"
                      >
                        <button className="w-full cursor-pointer flex items-center justify-center gap-2 text-black bg-white sm:text-[18px] text-[14px] border border-modal-line font-medium font-outfit px-4 py-3 rounded-full">
                          Text
                          <MdOutlineChat size={20} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="absolute inset-0 z-50 backdrop-blur-md bg-white/0"></div>
            </div> */}
          </div>
          {/* <div className=" mt-18">
            <Across />
          </div> */}
        </>
      )}
    </>
  );
};

export default LocalRecommendation;
