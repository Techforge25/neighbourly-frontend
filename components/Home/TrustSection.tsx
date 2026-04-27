"use client";
import Image from "next/image";
import ButtonModal from "../ButtomModal";
import { motion } from "framer-motion";

const TrustSection = () => {
  return (
    <main className="lg:max-w-[1296px] mx-auto md:my-10 p-6">
      <div className="">
        {/* Text Section */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col lg:gap-[32px] gap-[16px] "
        >
          <p className="font-manrope font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.625rem] text-center leading-[2rem] sm:leading-[2.5rem] md:leading-[3rem] lg:leading-[3.25rem]">
           <span className="text-primary" >Be</span>Neighbourly is a free way to find local trades and services based on 
           {" "}
           <span className="text-primary">genuine recommendations from people in your suburb.</span>
            We’re not a directory businesses earn their place by being trusted, not by paying to be here.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default TrustSection;
