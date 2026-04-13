"use client";
import Image from "next/image";
import ButtonModal from "../ButtomModal";
import { motion } from "framer-motion";

const TrustSection = () => {
  return (
    <main className="lg:max-w-[1296px] mx-auto md:my-20 p-6">
      <div className="md:max-w-[1080px] mx-auto flex items-center justify-between md:gap-10 gap-6 flex-col lg:flex-row">
        {/* Text Section */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:gap-[32px] gap-[16px] md:max-w-[460px] mx-auto"
        >
          <p className="md:text-[40px] sm:text-[32px] text-[22px] font-bold text-tabText font-manrope md:leading-[49px] sm:leading-[38px] leading-[28px] ">
            Neighbourly is a free, community led <span className="text-primary" >service built around real recommendations from people in your suburb</span> not anonymous reviews, paid listings or whoever pays to appear first.
          </p>
          <ButtonModal />
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-auto flex justify-center"
        >
          <Image
            src="/images/trust-section.png"
            alt="Trust Section Image"
            width={1000}
            height={1000}
            className="w-[495px]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default TrustSection;
