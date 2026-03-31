"use client";
import { feel_Diff } from "@/utils/dumydata";
import Image from "next/image";
import { motion } from "framer-motion";

const FeelsDiffrent = () => {
  return (
    <div className="md:max-w-[1296px] mx-auto md:my-20 my-10 p-4 ">
      <div className="md:max-w-[1080px] mx-auto flex md:flex-row flex-col md:gap-0 gap-4 items-center ">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "linear" }}
          viewport={{ once: true }}
          className="md:max-w-[515px] mx-auto flex flex-col gap-[52px]"
        >
          <h5 className="text-[42px] leading-[49px] font-bold font-manrope">
            <span className="text-[#303231]">Why Neighbourly</span>{" "}
            <span className="text-[#F3B39D]">feels different</span>
          </h5>

          <div className="flex flex-col gap-[42px]">
            {feel_Diff.map((item, ind) => (
              <div key={ind}>
                <div className="flex items-center gap-[18px] md:max-w-[427px] ">
                  <p
                    className={`border p-2 rounded-full ${item.ib} ${item.iconBorder}`}
                  >
                    {item.icon}
                  </p>

                  <p className="text-[#303231] font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
                  <div className="bg-border1  h-[1px] md:mt-4 mt-2 md:w-[427px]"/>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/images/feels.png"
            alt="Description of the image"
            width={500}
            height={500}
            className="w-[485px] h-[580px] object-cover"
          />

          <div className="absolute max-w-[460px] mx-auto lg:left-0 left-1.5 lg:right-0 right-1.5 lg:p-4 p-2 bottom-2  bg-secondary text-white">
            <p className="lg:text-[22px] text-[22px] font-semibold font-manrope">
              Find trusted local services in your area
            </p>
            <p className="lg:text-[16px] text-[12px] lg:leading-[28px] leading-[20px] font-poppins">
              Discover{" "}
              <span className="font-bold">
                plumbers, electricians, cleaners
              </span>{" "}
              and more recommended by people nearby — making it easier to choose
              with confidence, while helping great local businesses build their
              local profile through genuine community support.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeelsDiffrent;
