"use client";
import Image from "next/image";
import { GrShareOption } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import ButtonModal from "../ButtomModal";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <main className="lg:max-w-[1296px] mx-auto md:my-22 my- p-4">
      <div className="lg:max-w-[1080px] mx-auto flex items-center md:flex-row flex-col md:gap-[40px] gap-10  ">
        {/* Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-auto flex justify-center"
        >
          <Image
            src="/images/serviceSec.png"
            alt="Service"
            width={1000}
            height={1000}
            className="w-[485px]"
            loading="lazy"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:max-w-[515px] mx-auto flex flex-col md:gap-[32px] gap-[10px] "
        >
          <h5 className="md:text-[42px] text-[21px] font-bold font-manrope md:leading-[49px] ">
            <span className="text-text-dark-secondary">Recommend a </span>
            <span className="text-primary">local service</span>
          </h5>

          <p className="md:text-[16px] text-[14px] font-medium md:leading-[28px] leading-[20px] text-secondary font-poppins">
            Tell us who’s been brilliant in your suburb — whether it’s a
            plumber, cleaner, electrician or someone else locals rate highly.
          </p>

          <div className="bg-light-bg md:p-6 p-2">
            <p className="lg:max-w-[467px] mx-auto text-[16px] font-medium md:leading-[28px] leading-[20px] font-poppins text-[#3A5670]">
              We only ask for a few details to keep recommendations genuine and
              useful for nearby neighbours.
            </p>
          </div>

          <div>
            <ButtonModal />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Service;
