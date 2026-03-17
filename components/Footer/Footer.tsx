import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-row items-center justify-between gap-4 py-6">
        <div>
          <p>Terms Of Use</p>
        </div>
        <div className="flex gap-4">
          <p className="flex items-center gap-4">
            <span className="border p-2 rounded-full bg-[#71849633]">
              <FaRegEnvelope size={24} />
            </span>
            <span>team@beneighbourly.com.au</span>
          </p>
          <p className="flex items-center gap-4">
            <span className="border p-2 rounded-full bg-[#71849633]">
              <MdLocalPhone size={24} />
            </span>
            <span>team@beneighbourly.com.au</span>
          </p>
        </div>
      </div>

      <div className="mt-4 bg-[#71849633] w-full p-[1px]" />

      <div className="mt-6">
        <p className="text-[#202939] text-center ">© 2026 neighbourly. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
