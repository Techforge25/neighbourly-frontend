import { comment } from "@/utils/dumydata";
import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import MapEmbed from "./MapEmbed";
import RelativeTimeDisplay from "../Date";
import { typeRecommendedeDetail } from "@/types";

type Props = {
  recomendedDetail: typeRecommendedeDetail;
};

const NeighburSay = ({ recomendedDetail }: Props) => {
  return (
    <section className="max-w-[1440px] mx-auto md:my-22 mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row justify-center md:gap-8 gap-6 max-w-[1280px] mx-auto">
          {/* Left Panel */}
          <div className="flex-1 max-w-full md:max-w-[838px] border border-modal-line rounded-[22px] p-8 md:p-10 overflow-y-auto md:max-h-[786px] max-h-[500px]">
            <h2 className="md:text-[32px] text-[16px] font-bold text-textdark capitalize font-manrope mb-6">
              What Neighbors Say
            </h2>

            {recomendedDetail?.recommendations?.map(
              (item: any, ind: number) => (
                <div
                  key={ind}
                  className="bg-[#F3F6F966] rounded-[18px] p-4 md:p-4 mb-4 max-w-full"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="flex items-start gap-3 md:gap-4">
                      <Image
                        src={`/images/sayavatar.png`}
                        height={100}
                        width={100}
                        alt="image"
                        className="w-[35px] h-[35px] rounded-full object-cover"
                      />
                      <div className="flex flex-col gap-1 md:gap-2">
                        <h5 className="font-manrope text-tabText text-[16px] leading-[20px] font-medium">
                          {item.name}
                        </h5>

                        <div className="flex  items-center md:flex-nowrap flex-wrap gap-2 md:gap-3 text-para font-poppins text-[12px] md:text-[14px]">
                          <p>{item.user.email}</p>
                          <span className="w-1.5 h-1.5 bg-para rounded-full" />
                          <p>
                            {recomendedDetail?.contact
                              ? recomendedDetail?.contact
                              : "N/A"}
                          </p>
                          <span className="w-1.5 h-1.5 bg-para rounded-full" />
                          <p>{item?.user?.address}</p>
                        </div>

                        <div className="mt-2 md:flex flex-wrap gap-2 hidden">
                          {item.reasonsOfRecommendation.map(
                            (str: string, ind: number) => (
                              <button
                                key={ind}
                                className={`capitalize px-4 py-2 font-manrope font-medium leading-4 text-sm rounded-full ${ind === 0 ? "bg-primary_light text-primary" : ind === 1 ? "bg-success_light text-success" : "text-text-dark bg-light-bg"}`}
                              >
                                {str}
                              </button>
                            ),
                          )}
                        </div>

                        <p className="text-para font-poppins md:text-[14px] text-[12px] text-justify mt-4 md:flex hidden ">
                          {item.comment ? item.comment : ""}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2 md:hidden">
                          {item.reasonsOfRecommendation.map(
                            (str: string, ind: number) => (
                              <button
                                key={ind}
                                className={`capitalize px-4 py-2 font-manrope font-medium leading-4 text-sm rounded-full ${ind === 0 ? "bg-primary_light text-primary" : ind === 1 ? "bg-success_light text-success" : "text-text-dark bg-light-bg"}`}
                              >
                                {str}
                              </button>
                            ),
                          )}
                        </div>
                    <p className="text-para font-poppins md:text-[14px] text-[12px] text-justify mt-4 md:hidden flex ">
                      {item.comment ? item.comment : ""}
                    </p>
                    <p className="text-para font-poppins text-xs md:text-sm mt-4 md:mt-0 text-nowrap">
                      <RelativeTimeDisplay dateISO={item?.createdAt} />
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Right Panel */}
          <div className="flex-1 max-w-full md:max-w-[426px] border border-[#D5E8FC] rounded-[22px] md:p-4 px-2 py-2  md:p-10">
            <div className="flex items-center md:gap-4 gap-2 md:mb-6 mb-4">
              <IoLocationOutline size={24} />
              <h6 className="capitalize text-[22px] md:text-[32px] font-manrope font-bold leading-[50px] text-textdark">
                service area
              </h6>
            </div>
            <div className="h-[400px] md:h-[650px]">
              <MapEmbed />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighburSay;
