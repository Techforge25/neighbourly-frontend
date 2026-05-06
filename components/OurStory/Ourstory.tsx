"use client";
import { our_story_data } from "@/utils/dumydata";
import Image from "next/image";
import { motion } from "framer-motion";

const Ourstory = () => {
  return (
    <section className="w-[90%] max-w-[1158px] mx-auto my-10 md:my-20 px-4">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-16">
        
        {/* Left: Text Content */}
        <motion.div
          className="w-full xl:max-w-[487px]"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "linear" }}
          viewport={{ once: true }}
        >
          <h2 className="text-[32px] md:text-[42px] font-bold font-manrope text-tabText">
            Our <span className="text-primary">story</span>
          </h2>

          <div className="mt-4 sm:mt-8 flex flex-col gap-4">
            {our_story_data.map((item, ind) => (
              <p
                key={ind}
                className="text-[16px] text-para font-poppins leading-[26px]"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="border-l-4 border-primary mt-6 md:mt-10 pl-3">
            <span className="block text-tabText text-[16px] lg:text-[22px] font-semibold font-poppins">
              Kate and Andrew Gordon
            </span>
            {" "}
            <span className="block text-para text-[14px] font-poppins mt-0.5">
              Founders
            </span>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="w-full xl:w-auto flex justify-center xl:justify-end"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "linear" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/our-story.png"
            alt="Kate and Andrew Gordon"
            width={586}
            height={520}
            className="w-full max-w-[586px] xl:min-w-[460px] h-auto object-cover rounded-lg"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Ourstory;