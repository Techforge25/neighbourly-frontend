import { otpProps } from "@/types";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { OtpInput } from "reactjs-otp-input";

const OtpStep = ({
  otp,
  setOtp,
  verifyOtp,
  canResend,
  timer,
  handleResend,
  formatTime,
}: otpProps) => {
  return (
    <div className="">
      <div className="">
        {/* Header */}
        <p className="text-[16px] font-medium font-manrope text-gray-500">
          Enter the code we sent to your email. It helps us keep the weird stuff
          out.
        </p>

        {/* OTP */}
        <div className="py-[32px]">
          <OtpInput
            value={otp}
            onChange={setOtp}
            placeholder="------"
            numInputs={6}
            isInputNum={true}
            focusStyle="otp-input:focus"
            inputStyle="otp-input"
            disabledStyle={{
              background: "var(--color-flash_white)",
              cursor: "not-allowed",
              opacity: "50%",
            }}
            containerStyle={{
              gap: "clamp(6px, 2vw, 20px)",
              justifyContent: "center",
            }}
          />
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={verifyOtp}
          disabled={otp.length < 6}
          className={`flex items-center cursor-pointer justify-center gap-[8px] w-full  mt-4 md:py-[17px] sm:py-[14px] py-[12px] rounded-full
                  ${
                    otp.length < 6
                      ? "bg-secondary-OTP-btn-bg text-para cursor-not-allowed"
                      : "bg-share-modal-icon text-white"
                  }`}
        >
          Continue
          <IoArrowForward size={24} className="size-[20px] text-white" />
        </button>

        {/* Resend */}
        <div className="md:py-[32px] sm:py-[28px] py-[22px] flex items-center justify-start">
          <div className="flex items-center gap-2">
            <p className="font-poppins text-[16px] text-resnd-OTP-btn-txt">
              Didn’t get it?
            </p>
            {!canResend ? (
              <span className="text-green font-poppins font-medium text-[16px] ">
                {formatTime(timer)}
              </span>
            ) : (
              <button
                onClick={handleResend}
                className="underline font-poppins font-medium text-[16px] text-green cursor-pointer"
              >
                Resend code
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpStep;
