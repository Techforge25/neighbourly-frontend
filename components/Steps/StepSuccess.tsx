"use client";
import { openShare } from "@/store/shareSlice";
import { Heart, Share2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import ShareModal from "../ShareModal";

interface StepSuccessProps {
  onClose: () => void;
}

export default function StepSuccess({ onClose }: StepSuccessProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="">
      {/* Share button */}
      <div className="flex items-end justify-end px-4">
        {/* Close button */}
        <button
          onClick={() => {
            (onClose(), window.location.reload());
          }}
          className="cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col gap-[20px] ">
        {/* Heart icon */}
        <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-white flex items-center justify-center">
          <Heart className="w-7 h-7 text-primary " />
        </div>

        {/* Heading */}
        <h2 className="text-[28px] font-bold leading-[42px] font-manrope text-center text-[#0F172A] ">
          Thanks — your recommendation
          <br />
          has been received!
        </h2>

        {/* Subtext */}
        <p className="text-[18px] font-manrope font-medium leading-[28px]  text-center w-[342px] mx-auto text-[#202939]">
          your contribution helps build a stronger community.
        </p>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              (router.push("/discover"), onClose());
            }}
            className="flex-1 py-3.5 px-6 rounded-full bg-primary text-white text-[16px] leading-[16px] "
          >
            View Recommendations
          </button>

          <button
            onClick={() => {
              (router.push("/"), onClose());
            }}
            className="flex-1 py-3.5 px-6 rounded-full bg-secondary text-white text-[16px] leading-[16px] "
          >
            Search Another Suburb
          </button>
        </div>

        <div>
          <button
            onClick={() => dispatch(openShare())}
            className="px-4 py-4 rounded-full cursor-pointer bg-green w-full flex items-center justify-center gap-4"
            aria-label="Share"
          >
            <span className="text-white">Share</span>
            <span><Share2 className="w-5 h-5 text-white" /></span>
          </button>
        </div>
      </div>
      <ShareModal />
    </div>
  );
}
