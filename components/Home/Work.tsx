"use client";

import { motion } from "framer-motion";
import { work_Data } from "@/utils/dumydata";

const Work = () => {
  return (
    <section className="max-w-[1296px] mx-auto md:my-10 p-4">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 lg:gap-[30px] mt-4"
      >
        {work_Data.map((item, ind) => (
          <div
            key={ind}
            className={`${item.bg} w-full sm:w-[410px] mx-auto rounded-xl flex flex-col items-center md:items-start gap-3 sm:gap-4
              px-4 py-6 sm:px-6 sm:py-8 md:px-7 md:py-10 lg:px-8 lg:py-12`}
          >
            <div className="text-white text-lg sm:text-xl p-2 sm:p-2.5">
              {item.icon}
            </div>
            <p className="text-white font-manrope font-semibold leading-snug
              text-xl sm:text-[22px] md:text-2xl
              sm:leading-7 md:leading-[30px]
              lg:max-w-[300px]">
              {item.title}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;
