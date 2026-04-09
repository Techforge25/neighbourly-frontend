"use client";
import { work_Data } from "@/utils/dumydata";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="container mx-auto md:my-20 p-4">
      <motion.h5
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:text-[42px] text-[32px] text-center font-bold text-text-dark-secondary font-manrope md:py-10"
      >
        How Neighbourly <span className="text-primary">Works</span>{" "}
      </motion.h5>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row flex-1 justify-center gap-[8px] md:gap-[16px] lg:gap-[30px] w-[] mx-auto"
      >
        {work_Data.map((item, ind) => (
          <div
            key={ind}
            className={`${item.bg} p-4 sm:p-6 flex flex-col md:items-start items-center gap-3 sm:gap-4`}
          >
            <div
              className={`w-fit text-white text-[18px] sm:text-[20px] p-2 sm:p-2.5 rounded-2xl`}
            >
              {item.icon}
            </div>
            <p className="text-[20px] sm:text-[22px] text-white md:text-[24px]  font-manrope font-semibold leading-snug sm:leading-[28px] md:leading-[30px] lg:max-w-[300px]">
              {item.title}
            </p>
            <p className="text-[14px] sm:text-[15px] text-white md:text-[16px] font-poppins font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] lg:max-w-[328px]">
              {item.text}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
