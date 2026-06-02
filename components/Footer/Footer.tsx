import Link from "next/link";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-4 py-6 text-center md:text-left">
        {/* Left */}
        <div className="flex items-center gap-3 ">
          {/* Follow Us text */}
          <h3 className="text-lg font-semibold text-textdark">Follow Us</h3>

          {/* Facebook icon */}
          <Link
            href={"https://www.facebook.com/suburbsaysnorthernbeaches"}
            className="w-11 h-11 bg-secondary/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FaFacebookF size={18} className="text-tabText" />
          </Link>

          {/* Instagram icon */}
          <Link
            href={"https://www.instagram.com/suburbsays/"}
            className="w-11 h-11 bg-secondary/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          >
            <SiInstagram size={18} className="text-tabText" />
          </Link>
        </div>

        {/* Right */}
        <div className="flex flex-col sm:flex-row md:items-center gap-4 sm:gap-6">
          {/* Email */}
          <p className="flex items-center gap-3 text-sm md:text-base break-all sm:break-normal">
            <span className="w-11 h-11 bg-secondary/20 rounded-full flex items-center justify-center">
              <FaRegEnvelope size={18} className="text-tabText" />
            </span>
            <Link href={"mailto:andrew@suburbsays.com.au"}>
              andrew@suburbsays.com.au
            </Link>
          </p>

          {/* Phone */}
          <p className="flex items-center gap-3 text-sm md:text-base">
            <span className="w-11 h-11 bg-secondary/20 rounded-full flex items-center justify-center">
              <MdLocalPhone size={18} className="text-tabText" />
            </span>
            <Link href={"tel:85982765005"}>85 982 765 005</Link>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-2 bg-border w-full h-[1px]" />

      {/* Bottom */}
      <div className="mt-4 md:mt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        {/* Left Side: Copyright Text */}
        <p className="text-tabText text-xs sm:text-sm md:text-base text-center sm:text-left">
          © 2026 Suburb Says. All rights reserved.
          <span className="text-tabtext"> | </span>
          <span className="font-bold">ABN 85 982 765 005</span>
        </p>

        {/* Right Side: Terms of Use Link */}
        <Link
          href="/terms-of-use"
          className="flex items-center gap-3 text-tabText hover:text-black transition-colors"
        >
          <p className="text-xs sm:text-sm md:text-base hover:underline">
            Terms of use
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
