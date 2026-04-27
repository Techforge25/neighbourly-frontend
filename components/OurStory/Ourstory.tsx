"use client";
import { our_story_data } from "@/utils/dumydata";
import Image from "next/image";
import { motion } from "framer-motion";
const Ourstory = () => {
  return (
    <div className="md:w-[1158px] w-[90%] mx-auto md:my-20 my-10 p-4">
      <div className="flex items-center justify-between flex-col xl:flex-row md:gap-20 gap-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "linear" }}
          viewport={{ once: true }}
        >
          <div className="">
            <p className="md:text-[42px] text-[32px] text-tabText font-bold font-manrope">
              <span>Our </span>
              <span className="text-primary">story</span>
            </p>
          </div>

          {
            <div className="sm:mt-10 mt-4 flex flex-col md:gap-5 gap-2.5 max-w-[487px]">
              {our_story_data.map((item, ind) => (
                <div key={ind}>
                  <p className="text-[16px] text-para font-poppins leading-[24px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          }

          <div className="border-l-4 border-primary md:mt-10 mt-4 pl-2">
            <p className="flex flex-col">
              <span className="text-tabText lg:text-[23px] text-[16px] font-semibold font-poppins">
                Kate and Andrew Gordon
              </span>
              <span className="text-para text-[16px] font-poppins">
                Founders
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
         initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "linear" }}
          viewport={{ once: true }}
        >
          <Image
            src={"/images/our-story.png"}
            alt="image"
            width={1000}
            height={1000}
            className="w-full h-auto max-w-[586px] lg:min-w-[500px] object-contain"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Ourstory;
