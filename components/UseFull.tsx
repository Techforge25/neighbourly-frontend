"use client";
import { openShare } from "@/store/shareSlice";
import React from "react";
import { FiShare2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import ShareModal from "./ShareModal";
import { motion } from "framer-motion";

const UseFull = ({ color }: { color?: string }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`${color ? `bg-secondary` : "bg-share-modal-icon"} bg-[url('/images/findSectionBg.png')] bg-cover bg-center min-h-[400px] sm:min-h-[450px] lg:h-[520px] flex items-center`}
    >
      <div className="container mx-auto px-4 py-12 sm:py-14 lg:py-16">
        <div className="w-full">
          {/* Heading */}
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "linear" }}
            viewport={{ once: true }}
            className=" text-[22px] sm:text-[28px] md:text-[34px] lg:text-[42px] text-center text-[#303231] font-bold leading-snug font-manrope"
          >
            <span>Know someone who’d</span>{" "}
            <span className="text-white">find this useful?</span>
          </motion.p>

          {/* Description */}
          {/* <motion.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "linear" }}
            viewport={{ once: true }}
            className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-center text-white leading-relaxed sm:w-[80%] md:w-[60%] lg:w-[40%] font-poppins mx-auto"
          >
            Send Neighbourly to a friend, neighbour or group and help grow
            trusted recommendations in your suburb.
          </motion.p> */}

          {/* Button */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "linear" }}
            viewport={{ once: true }}
            className="mt-6 flex items-center justify-center"
          >
            <button
              onClick={() => dispatch(openShare())}
              className="flex cursor-pointer items-center gap-3 sm:gap-4 px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-white text-[14px] sm:text-[16px] font-outfit"
            >
              <span>Share BeNeighbourly</span>
              <FiShare2 size={20} className="sm:size-[24px]" />
            </button>
          </motion.div>
        </div>
      </div>
      <ShareModal />
    </div>
  );
};

export default UseFull;
