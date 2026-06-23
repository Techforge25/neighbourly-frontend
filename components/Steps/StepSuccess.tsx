"use client";
import { openShare } from "@/store/shareSlice";
import { Heart, Share2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import ShareModal from "../ShareModal";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface StepSuccessProps {
  onClose: () => void;
  resetAll: () => void;
}

export default function StepSuccess({ onClose, resetAll }: StepSuccessProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/Success.mp3");

    audioRef.current.play();

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  return (
    <div className="">
      {/* Share button */}
      <div className="flex sm:items-end sm:justify-end px-4">
        {/* Close button */}
        <button
          onClick={() => {
            (onClose(), window.location.reload(), setStep(1), resetAll());
          }}
          className="cursor-pointer sm:flex hidden"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col gap-[20px] ">
        {/* Heart icon */}
        <div className="mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
          <Image
            src={"/images/successModal.gif"}
            alt="svg"
            width={200}
            height={200}
          />
        </div>

        {/* Heading */}
        <h2 className="text-[28px] font-bold font-manrope leading-[42px] font-manrope text-center text-success-modal-txt-dark ">
          Nice One
        </h2>

        {/* Subtext */}
        <p className="text-[18px] font-manrope font-medium leading-[28px]  text-center  w-full lg:w-[342px] mx-auto text-para">
          Your recommendation is in and it’s going to help more local find
          someone worth trusting.
        </p>

        <p className="text-center text-text-dark-secondary font-manrope text-[20px]">
          Local gossip, put to good use.
        </p>

        {/* Action buttons */}
        <div className="flex sm:flex-row flex-col-reverse gap-3">
          <button
            onClick={() => {
              (onClose(), window.location.reload(), setStep(1), resetAll());
            }}
            className="w-full border py-[17.5px] border-border cursor-pointer rounded-full bg-primary text-white text-[16px] leading-[16px] "
          >
            Done
          </button>

          <button
            onClick={() => dispatch(openShare())}
            className="flex items-center gap-2 py-[17.5px] border border-border justify-center w-full cursor-pointer rounded-full bg-white text-[16px] leading-[16px] "
          >
            <span>
              <Share2 className="w-5 h-5 text-success-modal-txt-secondary-contrast" />
            </span>
            <span className="text-success-modal-txt-secondary-contrast">
              Spread the word
            </span>
          </button>
        </div>
      </div>
      <ShareModal />
    </div>
  );
}
