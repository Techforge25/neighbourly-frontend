"use client";
import Image from "next/image";
import { navItems } from "@/utils/dumydata";
import Link from "next/link";
import { IoMdAdd, IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import ButtonModal from "../ButtomModal";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathName = usePathname();

  return (
    <section className="w-[90%] py-[30px]   mx-auto">
      <div className="flex items-center justify-between ">
        {/* Logo */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={1000}
            height={1000}
            className="lg:w-[196px] w-[160px] object-contain"
          />
        </div>
        {/* Logo */}

        {/* nav item */}
        <div className="flex items-center  ">
          <div className="md:flex hidden items-center lg:gap-x-14 gap-x-6.5">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`${pathName === item.href ? "text-[#F3B39D] border-b-2 border-[#F3B39D]" : "text-[#171717]"} font-medium text-[16px] font-manrope`}
              >
                <Link href={item.href}>{item.label}</Link>
              </button>
            ))}
          </div>
        </div>
        {/* nav item */}

        {/* Button */}
        {/* <div>
          <button className="md:flex hidden items-center gap-2 lg:px-4 px-2 lg:py-3 py-2 rounded-full bg-[#F3B39D] text-white lg:text-[16px] font-outfit text-sm">
            <span>Share your recommendation</span>
            <span>
              <IoMdAdd size={20} />
            </span>
          </button>
        </div> */}
        <div className="md:flex hidden">
          <ButtonModal />
        </div>

        {/* Button */}

        {/* Button */}
        <div className="md:hidden flex">
          <button
            className=" flex items-center gap-2 border lg:px-4 px-2 lg:py-3 py-2 rounded-full bg-[#F3B39D] text-white lg:text-[16px] text-sm"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            {!isOpenMenu ? <IoMdMenu size={24} /> : <FaXmark size={24} />}
          </button>
        </div>
        {/* Button */}

        {/* Mobile Responsive */}
        <div
          className={`absolute top-20 right-0 bg-[#f0eae9f8] w-full h-screen flex flex-col items-center gap-10 py-10 transition-all duration-500 ease-in-out
          ${isOpenMenu ? "translate-y-0 opacity-100 z-1000" : "-translate-y-full opacity-0 pointer-events-none z-1000"}`}
        >
          {navItems.map((item, index) => (
            <ul key={index}>
              <Link href={item.href}>{item.label}</Link>
            </ul>
          ))}
          {/* Button */}
          <div className="">
            <ButtonModal />
          </div>
          {/* Button */}
        </div>
        {/* Mobile Responsive */}
      </div>
    </section>
  );
};

export default Header;
