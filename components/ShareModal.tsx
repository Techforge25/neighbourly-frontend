"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { closeShare } from "@/store/shareSlice";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail, MdKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiLink, FiUsers } from "react-icons/fi";
import { toast } from "react-toastify";

const ShareModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.share.isOpen);
  const link = useSelector((state: RootState) => state.share.link);

  useEffect(() => {
      if (isOpen) {
        const scrollY = window.scrollY;
  
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
      } else {
        const scrollY = document.body.style.top;
  
        document.body.style.position = "";
        document.body.style.top = "";
  
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }, [isOpen]);

  if (!isOpen) return null;

  const shareOptions = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={30} className="text-green-500" />,
      action: () =>
        window.open(
          `https://wa.me/?text=${encodeURIComponent(window.location.href)}`,
        ),
      bg: "bg-green-500/5",
    },
    {
      name: "Facebook",
      icon: <CiFacebook size={30} className="text-blue-500" />,
      action: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
        ),
      bg: "bg-blue-500/5",
    },
    {
      name: "Email",
      icon: <MdOutlineEmail size={30} className="text-share-modal-icon" />,
      action: () =>
        (window.location.href = `mailto:?body=${window.location.href}`),
      bg: "bg-share-modal-icon/5",
    },
    {
      name: "Copy link",
      icon: <FiLink size={30} className="text-secondary" />,
      action: () => {
        navigator.clipboard.writeText(
          link
            ? `https://neighbourly-frontend-delta.vercel.app/${link}`
            : window.location.href,
        );
        toast.success("Link copied to clipboard!");
      },
      bg: "bg-secondary/5",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-2xl p-5 relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">Share Subrub says</h2>
          <button
            className="cursor-pointer"
            onClick={() => dispatch(closeShare())}
          >
            <IoClose size={22} />
          </button>
        </div>

        {/* Icon */}
        <div className="flex justify-center my-6">
          <div className="p-4 rounded-full text-share-modal-icon bg-share-modal-icon/10">
            <FiUsers size={20} />
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {shareOptions.map((item, i) => (
            <button
              key={i}
              onClick={item.action}
              className="flex items-center justify-between border-[1px] border-modal-line rounded-xl p-4 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`${item.bg} p-2 rounded-lg`}>{item.icon}</div>
                <span className="md:text-[16px] text-[14px] text-tabText font-medium font-manrope">
                  {item.name}
                </span>
              </div>
              <span>
                <MdKeyboardArrowRight size={24} className="text-para" />
              </span>
            </button>
          ))}
        </div>

        <p className="text-center text-para text-sm mt-6">
          Subrub says helps communities grow together
        </p>
      </div>
    </div>
  );
};

export default ShareModal;
