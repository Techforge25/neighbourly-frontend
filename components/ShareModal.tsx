"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { closeShare } from "@/store/shareSlice";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiLink } from "react-icons/fi";
import { toast } from "react-toastify";

const ShareModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.share.isOpen);

  if (!isOpen) return null;

  const shareOptions = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-green-500" />,
      action: () =>
        window.open(
          `https://wa.me/?text=${encodeURIComponent(window.location.href)}`
        ),
    },
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-blue-500" />,
      action: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
        ),
    },
    {
      name: "Email",
      icon: <MdEmail className="text-orange-400" />,
      action: () =>
        (window.location.href = `mailto:?body=${window.location.href}`),
    },
    {
      name: "Copy link",
      icon: <FiLink />,
      action: () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!")
      },
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-2xl p-5 relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">Share Neighbourly</h2>
          <button className="cursor-pointer" onClick={() => dispatch(closeShare())}>
            <IoClose size={22} />
          </button>
        </div>

        {/* Icon */}
        <div className="flex justify-center my-6">
          <div className="bg-red-100 p-4 rounded-full">👥</div>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {shareOptions.map((item, i) => (
            <button
              key={i}
              onClick={item.action}
              className="flex items-center justify-between border rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  {item.icon}
                </div>
                <span>{item.name}</span>
              </div>
              <span>{">"}</span>
            </button>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Neighbourly helps communities grow together
        </p>
      </div>
    </div>
  );
};

export default ShareModal;