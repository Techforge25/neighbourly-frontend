"use client";
import { work_Data } from "@/utils/dumydata";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="max-w-[1296px] mx-auto md:my-10 p-4">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row flex-1 justify-center gap-[8px] md:gap-[16px] lg:gap-[30px] mx-auto mt-4"
      >
        {work_Data.map((item, ind) => (
          <div
            key={ind}
            className={`${item.bg} px-[16px] py-[24px] sm:px-[24px] sm:py-[32px] md:px-[28px] md:py-[40px] lg:px-[32px] lg:py-[48px] rounded-[12px] flex flex-col md:items-start items-center gap-3 sm:gap-4 sm:w-[410.67px] w-full mx-auto`}
          >
            <div
              className={`w-fit text-white text-[18px] sm:text-[20px] p-2 sm:p-2.5`}
            >
              {item.icon}
            </div>
            <p className="text-[20px] sm:text-[22px] text-white md:text-[24px]  font-manrope font-semibold leading-snug sm:leading-[28px] md:leading-[30px] lg:max-w-[300px]">
              {item.title}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
