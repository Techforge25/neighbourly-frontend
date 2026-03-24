import { comment } from "@/utils/dumydata";
import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import MapEmbed from "./MapEmbed";

const NeighburSay = () => {
  return (
    <section className="w-[1440px] mx-auto my-22">


<div className="grid grid-cols-2 mx-auto gap-[32px]">

      <div className="max-w-[838px] max-h-[786px] border-[1px] border-[#D5E8FC] rounded-[22px] p-[32px] overflow-hidden overflow-y-scroll">
        <h2 className="text-[32px] font-bold text-textdark capitalize font-manrope">
          What Neighbors Say
        </h2>

        {comment.map((item, ind) => (
          <div
            key={ind}
            className="max-w-[774px] bg-[#F3F6F966] md:p-[16px] p-[8px] rounded-[18px] mt-[8px]"
          >
            <div className="flex items-start md:flex-row flex-col-reverse justify-between">
              <div className="flex items-start gap-[8px] ">
                <Image
                  src={item.image}
                  height={100}
                  width={100}
                  alt="image"
                  className="w-[35px] h-[35px] "
                />

                <div className=" flex flex-col gap-[4px] ">
                  <h5 className="font-manrope text-tabText text-[16px] leading-[20px] font-medium">
                    {item.name}
                  </h5>

                  <div className="flex items-center flex-wrap md:gap-[10px] gap-[6px]">
                    <p className="md:font-[14px] font-[12px] leading-[15px] font-poppins text-para">
                      {item.email}
                    </p>

                    <span className="p-[2px] bg-para rounded-full" />

                    <p className="md:font-[14px] font-[12px] leading-[15px] font-poppins text-para">
                      {item.phone}
                    </p>
                    <span className="p-[2px] bg-para rounded-full" />
                    <p className="md:font-[14px] font-[12px] leading-[15px] font-poppins text-para">
                      {item.address}
                    </p>
                  </div>

                  <div className="mt-2">
                    <div className="flex items-center flex-wrap gap-[8px]">
                      {item.rating.map((str, ind) => (
                        <button
                          key={ind}
                          className={`capitalize ${str.textColor} ${str.bg} px-[16px] py-[8px] font-manrope font-medium leading-[16px] text-[14px] rounded-full`}
                        >
                          {str.text}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-[4px]">
                <p className="capitalize font-poppins text-[12px] leading-[15px] text-para">
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>


      <div className="max-w-[426px] max-h-[786px]  border-[1px] rounded-[22px] p-[32px] border-[#D5E8FC]">

       <div className="flex items-center gap-[16px] ">
        <IoLocationOutline size={24}/>
        <h6 className="capitalize text-[32px] font-manrope font-bold leading-[50px] text-textdark ">service area</h6>
       </div>
       <div className="my-4">
        <MapEmbed/>
       </div>
      </div>



</div>



      
      





    </section>
  );
};

export default NeighburSay;
