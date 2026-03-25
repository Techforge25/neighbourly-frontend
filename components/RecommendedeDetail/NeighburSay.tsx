import { comment } from "@/utils/dumydata";
import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import MapEmbed from "./MapEmbed";

const NeighburSay = () => {
  return (
    <section className="max-w-[1440px] mx-auto my-22">
      <div className="container mx-auto px-4">
  <div className="flex flex-col md:flex-row justify-center md:gap-8 gap-6 max-w-[1280px] mx-auto">
    {/* Left Panel */}
    <div className="flex-1 max-w-full md:max-w-[838px] border border-[#D5E8FC] rounded-[22px] p-8 md:p-10 overflow-y-auto max-h-[786px]">
      <h2 className="text-2xl md:text-3xl font-bold text-textdark capitalize font-manrope mb-6">
        What Neighbors Say
      </h2>

      {comment.map((item, ind) => (
        <div
          key={ind}
          className="bg-[#F3F6F966] rounded-[18px] p-4 md:p-6 mb-4 max-w-full"
        >
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex items-start gap-3 md:gap-4">
              <Image
                src={item.image}
                height={100}
                width={100}
                alt="image"
                className="w-[35px] h-[35px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-1 md:gap-2">
                <h5 className="font-manrope text-tabText text-[16px] leading-[20px] font-medium">
                  {item.name}
                </h5>

                <div className="flex flex-wrap items-center gap-2 md:gap-3 text-para font-poppins text-[12px] md:text-[14px]">
                  <p>{item.email}</p>
                  <span className="w-1.5 h-1.5 bg-para rounded-full" />
                  <p>{item.phone}</p>
                  <span className="w-1.5 h-1.5 bg-para rounded-full" />
                  <p>{item.address}</p>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {item.rating.map((str, ind) => (
                    <button
                      key={ind}
                      className={`capitalize ${str.textColor} ${str.bg} px-4 py-2 font-manrope font-medium leading-4 text-sm rounded-full`}
                    >
                      {str.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-para font-poppins text-xs md:text-sm mt-4 md:mt-0">
              {item.date}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Panel */}
    <div className="flex-1 max-w-full md:max-w-[426px] border border-[#D5E8FC] rounded-[22px] p-8 md:p-10">
      <div className="flex items-center gap-4 mb-6">
        <IoLocationOutline size={24} />
        <h6 className="capitalize text-2xl md:text-3xl font-manrope font-bold leading-[50px] text-textdark">
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
