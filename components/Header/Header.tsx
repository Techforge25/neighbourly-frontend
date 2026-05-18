"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { closeModal } from "@/store/modalSlice";
import { navItems } from "@/utils/dumydata";
import ButtonModal from "../ButtomModal";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const pathName = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpenMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenMenu]);

  const toggleMenu = useCallback(() => {
    setIsOpenMenu((prev) => !prev);
    dispatch(closeModal());
  }, [dispatch]);

  const closeMenu = useCallback(() => {
    setIsOpenMenu(false);
  }, []);

  const navLinkClass = (href: string) =>
    pathName === href
      ? "text-primary border-b-2 border-heading"
      : "text-heading1";

  return (
    <header className="w-[90%] max-h-[72px] py-2 mx-auto">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={196}
            height={72}
            className="lg:max-w-[196px] max-w-[160px] object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="md:flex hidden items-center gap-4 md:gap-4 lg:gap-10 xl:gap-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${navLinkClass(item.href)} font-medium lg:text-base md:text-sm text-xs font-manrope`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="md:flex hidden">
          <ButtonModal />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center cursor-pointer gap-2 border px-2 lg:px-4 py-2 lg:py-3 rounded-full bg-primary text-white text-sm lg:text-base"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpenMenu}
        >
          {isOpenMenu ? <FaXmark size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`fixed top-14 left-0 right-0 bg-[#f0eae9f8] h-screen flex flex-col items-center gap-10 py-10 transition-all duration-500 ease-in-out z-[1000]
          ${isOpenMenu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`${navLinkClass(item.href)} font-medium text-base font-manrope`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonModal />
      </div>
    </header>
  );
};

export default Header;
