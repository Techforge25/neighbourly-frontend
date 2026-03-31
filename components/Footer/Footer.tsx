import Link from "next/link";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-4 py-6 text-center md:text-left">
        {/* Left */}
        <div>
          <p className="text-sm md:text-base">Terms Of Use</p>
        </div>

        {/* Right */}
        <div className="flex flex-col sm:flex-row md:items-center gap-4 sm:gap-6">
          {/* Email */}
          <p className="flex items-center gap-3 text-sm md:text-base break-all sm:break-normal">
            <span className="border p-2 rounded-full bg-[#71849633]">
              <FaRegEnvelope size={18} />
            </span>
            <Link href={"mailto:team@beNeighbourly.com.au"}>
              team@beneighbourly.com.au
            </Link>
          </p>

          {/* Phone */}
          <p className="flex items-center gap-3 text-sm md:text-base">
            <span className="border p-2 rounded-full bg-[#71849633]">
              <MdLocalPhone size={18} />
            </span>
            <Link href={"tel:0408845101"}>0408845101</Link>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-2 bg-[#71849633] w-full h-[1px]" />

      {/* Bottom */}
      <div className="mt-4 md:mt-6 text-center">
        <p className="text-[#202939] text-xs sm:text-sm md:text-base">
          © 2026 Neighbourly. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
