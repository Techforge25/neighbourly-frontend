"use client";
import { accordianData } from "@/utils/dumydata";
import React, { useState } from "react";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState<any>();

  return (
    <section className="max-w-[844px] mx-auto my-20 md:p-4 p-2">
      {/* Faqd Header start */}

      <div className="text-center">
        <h3 className="font-bold font-manrope md:text-[42px] sm:text-[32px] text-[28px] text-tabText ">
          Frequently{" "}
          <span className="text-share-modal-icon">asked questions</span>
        </h3>
        {/* <h4 className="font-bold font-manrope md:text-[42px] sm:text-[32px] text-[28px] text-tabText">
          {"(FAQ)"}
        </h4> */}
      </div>

      {/* Faqd Header end */}

      {/* Faqs */}

      {/* className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`} */}
      <div className="sm:mt-20 mt-10 flex flex-col gap-4 items-start text-left">
        {accordianData.map((faq, index) => (
          <div
            key={index}
            className="flex flex-col items-start w-full border-[1px] border-modal-line p-[24px] rounded-[12px]"
          >
            <div
              className="flex items-center justify-between w-full cursor-pointer  "
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h2 className="font-manrope font-semibold sm:text-[20px] text-[16px] text-tabText">
                {faq.question}
              </h2>
              <div
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {openIndex === index ? (
                  <IoMdRemoveCircleOutline
                    size={24}
                    className="transition-all duration-500 ease-in-out"
                  />
                ) : (
                  <IoMdAddCircleOutline
                    size={24}
                    className="transition-all duration-500 ease-in-out"
                  />
                )}
              </div>
            </div>
            <p
              className={`sm:text-[16px] text-[14px] font-poppins leading-[24px] text-para  transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQS;
