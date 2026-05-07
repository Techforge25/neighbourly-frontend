"use client";

import { useCallback, useState } from "react";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { accordianData } from "@/utils/dumydata";

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="max-w-[844px] mx-auto my-20 p-2 md:p-4">
      <div className="text-center">
        <h2 className="font-manrope font-bold text-tabText text-[28px] sm:text-[32px] md:text-[42px]">
          Frequently{" "}
          <span className="text-share-modal-icon">asked questions</span>
        </h2>
      </div>

      <div className="mt-10 sm:mt-20 flex flex-col gap-4">
        {accordianData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="w-full border border-modal-line rounded-xl p-6"
            >
              <button
                className="flex items-center justify-between w-full text-left cursor-pointer"
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
              >
                <h3 className="font-manrope font-semibold text-tabText text-base sm:text-[20px] pr-4">
                  {faq.question}
                </h3>
                {isOpen ? (
                  <IoMdRemoveCircleOutline
                    size={24}
                    className="shrink-0 transition-all duration-500 ease-in-out"
                  />
                ) : (
                  <IoMdAddCircleOutline
                    size={24}
                    className="shrink-0 transition-all duration-500 ease-in-out"
                  />
                )}
              </button>

              <p
                className={`font-poppins text-para leading-6 text-sm sm:text-base transition-all duration-500 ease-in-out
                ${isOpen ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2 overflow-hidden"}`}
              >
                {faq.answer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQS;
