import { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoArrowForward } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import OtpInput from "../OtpInput";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { api } from "../../src/service/axios";
import { usePathname, useRouter } from "next/navigation";
import { setTriggerRecommendations } from "@/store/shareSlice";
import { useDispatch } from "react-redux";
import { setPage } from "@/store/paginationSlice";

interface UserData {
  isProfileCompleted?: boolean;
  [key: string]: any;
  nextStepThree: () => void;
}

export default function StepEmailOtp({
  onVerified,
  nextStepThree,
  onClose,
  setHeaderTitle,
  setStepOtp,
}: {
  onVerified: () => void;
  nextStepThree: () => void;
  onClose: () => void;
  setHeaderTitle: (title: string) => void;
  setStepOtp: (value: boolean) => void;
}) {
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [errors, setErrors] = useState();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await api.post(`auth/user`, { email: values.email });
        const data = res.data;
        localStorage.setItem(
          "isProfileCompleted",
          JSON.stringify(data?.data?.isProfileCompleted),
        );
        setUserData(data.data);
        if (data?.data?.OTPRequired) {
          setOtpSent(true);
          toast.success("OTP sent successfully!");
          setHeaderTitle("Verify it’s really you");
          setStepOtp(true);
          setLoading(false);
        } else if (data?.data?.isProfileCompleted) {
          setOtpSent(false);
          setLoading(false);
        } else {
          onVerified();
        }
      } catch (err: any) {
        console.log("Otp is Not Send", err?.response?.data?.message);
        setErrors(err?.response?.data?.message);
        setLoading(false);
      }
    },
  });

  const verifyOtp = async () => {
    const email = formik.values.email.trim();

    try {
      const res = await api.post(`auth/user/verify-otp`, {
        email,
        accountVerificationToken: String(otp),
      });

      const data = res.data;

      if (data?.data?.isProfileCompleted || data?.success) {
        setUserData(data?.data);
        setOtpSent(false);
      }

      if (data?.success && !data?.data?.isProfileCompleted) {
        toast.success(data?.message);
        onVerified();
        setStepOtp(false)
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer <= 0) {
      setCanResend(true);
      return;
    }
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  useEffect(() => {
    if (timer <= 0) {
      setCanResend(true);
    }
  }, [timer]);

  const handleResend = useCallback(() => {
    setTimer(60);
    setCanResend(false);
    formik.submitForm();
    setOtp("");
  }, [setOtp]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {!otpSent && (
          <div className="">
            <p className="text-red-500 text-sm">{errors}</p>

            <div className="md:pb-[32px] sm:pb-[28px] pb-[22px]">
              <p className="font-manrope font-medium text-[1rem] text-secondary">
                Start with your email so we can verify it’s really you
              </p>
            </div>

            <div className="flex flex-col space-y-[32px]">
              {/* <label className="font-medium font-manrope text-[14px] leading-[20px] capitalize">
                Your email <sup className="text-red-500">*</sup>
              </label> */}

              <input
                name="email"
                disabled={userData?.isProfileCompleted}
                placeholder="olivia@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-[1px] px-[12px] outline-none disabled:opacity-50 disabled:cursor-not-allowed py-[13px] border-border rounded-[62px] text-para text-[16px]"
              />
              {/* ✅ Error message */}
            </div>
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-sm">
                {formik.errors.email}
              </span>
            )}

            {!userData?.isProfileCompleted && (
              <button
                disabled={!formik.values.email}
                type="submit"
                className={`flex items-center disabled:opacity-50 disabled:cursor-not-allowed justify-center gap-[8px] w-full bg-primary mt-4 md:py-[17px] sm:py-[14px] py-[12px] rounded-full cursor-pointer`}
              >
                {!loading ? (
                  <>
                    <span className="text-white text-[16px] font-poppins ">
                      Continue
                    </span>
                    <IoArrowForward
                      size={24}
                      className="size-[20px] text-white"
                    />
                  </>
                ) : (
                  <p className="text-white text-[16px] font-poppins ">Loading...</p>
                )}
              </button>
            )}

            {/* Is Profile Is Completed  */}
            {userData?.isProfileCompleted && (
              <>
                <div className="md:py-[32px] sm:py-[28px] py-[18px]">
                  <p className="text-para px-[18px] py-[18px] bg-profile-bg-txt   font-poppins md:text-[16px] text-[12px] leading-[23px]">
                    You’ve already shared someone you trust. Now discover a legend or share another recommendation
                  </p>
                </div>

                <div className="flex items-center flex-col sm:gap-[12px] gap-[8px] flex-col-reverse justify-center">
                  {/* Left Button */}
                  <button
                    onClick={() => {
                      if (pathname === "/discover") {
                        dispatch(setTriggerRecommendations(true));
                        setPage(9);
                        onClose();
                        window.location.reload();
                      } else {
                        (router.push("/discover"), onClose());
                      }
                    }}
                    type="button"
                    className="bg-primary cursor-pointer w-full md:h-[56px] py-3 md:text-[16px] text-[11px] font-medium rounded-full text-white flex items-center justify-center"
                  >
                    View Full Recommendations
                  </button>

                  {/* Right Button */}
                  <button
                    onClick={nextStepThree}
                    type="button"
                    className="bg-secondary cursor-pointer w-full md:h-[56px] py-3 md:text-[16px] text-[12px] font-medium rounded-full text-white flex items-center justify-center gap-3"
                  >
                    Share Another Recommendation
                    <IoArrowForward size={20} className="" />
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {otpSent && (
          <div className="">
            <div className="">
              {/* Header */}
              <p className="text-[16px] font-medium font-manrope text-gray-500">
                Enter the code we sent to your email. It helps us keep the weird
                stuff out.
              </p>

              {/* OTP */}
              <div className="py-[32px]">
                <div className="flex items-center justify-center gap-[20px]">
                  <OtpInput value={otp} onChange={setOtp} />
                </div>
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
                      : "bg-primary text-white"
                  }`}
              >
                <span>Continue</span>
                <span>
                  {" "}
                  <IoArrowForward size={24} className="size-[20px] text-white" />
                </span>
              </button>

              {/* Resend */}
              <div className="md:py-[32px] sm:py-[28px] py-[22px] flex items-center justify-start">
                  <div className="flex items-center gap-2">
                    <p className="font-poppins text-[16px] text-resnd-OTP-btn-txt">
                      Didn’t get it?
                    </p>
                    {!canResend ? (
                      <span className="text-green font-poppins font-medium text-[16px] ">{formatTime(timer)}</span>
                    ) : (
                      <button
                        onClick={handleResend}
                        className="underline font-poppins font-medium text-[16px] text-green"
                      >
                        Resend code
                      </button>
                    )}
                  </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
