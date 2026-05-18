"use client";

import { motion } from "framer-motion";
import { trusted_Data } from "@/utils/dumydata";
import { TrustedData } from "@/types";

const Trusted = () => {
  return (
    <section className="bg-green">
      <div className="container mx-auto p-4">

        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-manrope font-bold text-white text-center md:text-start mt-6 md:mt-10
            text-[24px] sm:text-[32px] md:text-[42px] lg:text-[54px]"
        >
          Trusted by neighbours across{" "}
          <span className="block">the Northern Beaches</span>
        </motion.h2>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-10 py-8 md:py-16"
        >
          {trusted_Data.map((item: TrustedData, ind: number) => (
            <div key={ind} className="flex flex-col items-center md:items-start">
              <p className={`${item.textColor} font-manrope font-bold text-center sm:text-start text-[32px] md:text-[40px] lg:text-[56px]`}>
                {item.num}
              </p>
              <p className="font-manrope text-white text-center text-[20px] lg:text-[32px]">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Trusted;
