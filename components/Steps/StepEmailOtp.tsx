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
}: {
  onVerified: () => void;
  nextStepThree: () => void;
  onClose: () => void;
}) {
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  // ✅ Formik setup
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
          setLoading(false);
        } else if (data?.data?.isProfileCompleted) {
          setOtpSent(false);
          setLoading(false);
        } else {
          onVerified();
        }
      } catch (err: any) {
        console.log("Otp is Not Send", err?.response?.data);
        // console.error(err?.message,);
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
        // console.log("User data after OTP verification:", data?.data);
      }

      if (data?.success && !data?.data?.isProfileCompleted) {
        toast.success(data?.message);
        onVerified();
      }
    } catch (error: any) {
      // console.log(error?.response?.data);
      toast.error(error?.response?.data?.message);
    }
  };

  // console.log("User data after OTP request:", userData);

  // if (success) {
  //   onVerified();
  // } else {
  //   alert("Invalid OTP");
  // }

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
          <div className="flex flex-col gap-[24px]">
            <label className="font-medium font-manrope text-[14px] leading-[20px] capitalize">
              Your email <sup className="text-red-500">*</sup>
            </label>

            <input
              name="email"
              placeholder="olivia@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border-[1px] px-[12px] py-[13px] border-border rounded-[12px] text-para"
            />

            {/* ✅ Error message */}
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-sm">
                {formik.errors.email}
              </span>
            )}
            {!userData?.isProfileCompleted && (
              <button
                disabled={!formik.values.email}
                type="submit"
                className={`bg-primary disabled:opacity-50 disabled:cursor-not-allowed w-full mx-auto cursor-pointer md:mt-6 text-[14px] md:text-[16px] font-poppins px-[1px] py-[8px] rounded-full text-white flex items-center justify-center gap-4`}
              >
                {!loading ? (
                  <>
                    <span>Next</span>
                    <IoArrowForward size={24} className="size-[20px]" />
                  </>
                ) : (
                  <p className="">Loading...</p>
                )}
              </button>
            )}

            {/* Is Profile Is Completed  */}
            {userData?.isProfileCompleted && (
              <>
                <div className="bg-[#F4FAFF] rounded-[18px] md:p-[32px] p-[16px] flex items-start gap-[12px] ">
                  <AiOutlineExclamationCircle size={40} className="text-para" />

                  <p className="text-para font-poppins md:text-[16px] text-[12px] leading-[23px]">
                    It seems you have already submitted atleast 1 recommendation
                    you can either watch the full recommendations list or submit
                    another recommendation.
                  </p>
                </div>

                <div className="flex items-center md:flex-row flex-col flex-col-reverse justify-center md:gap-6 sm:gap-4 gap-2">
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
                    className="bg-primary cursor-pointer w-[320px] md:h-[56px] py-3 md:text-[16px] text-[11px] font-medium rounded-full text-white flex items-center justify-center"
                  >
                    View Full Recommendations
                  </button>

                  {/* Right Button */}
                  <button
                    onClick={nextStepThree}
                    type="button"
                    className="bg-secondary cursor-pointer w-[320px] md:h-[56px] py-3 md:text-[16px] text-[12px] font-medium rounded-full text-white flex items-center justify-center gap-3"
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
          <div className="flex  items-center justify-center bg-background px-4">
            <div className="w-full max-w-lg text-center">
              <h1 className="md:text-[24px] text-[20px] font-bold font-manrope tracking-tight text-textdark">
                Verify OTP
              </h1>
              <p className="mt-2 text-textdark md:text-[16px] text-[14px] ">
                Enter The 6 Digit Code Sent To Your Email
              </p>

              <div className="md:mt-10 mt-4 text-left">
                <label className="text-sm font-medium text-textdark ml-9">
                  Enter Verification Code
                </label>
                <div className="mt-3 ">
                  <OtpInput value={otp} onChange={setOtp} />
                </div>
              </div>

              <button
                type="button"
                onClick={verifyOtp}
                disabled={otp.length < 6}
                className={`md:mt-8 mt-4 flex w-full ${otp.length < 6 ? "" : "bg-primary text-white"}  items-center justify-center gap-2 rounded-xl bg-verify-btn md:py-4 py-2 text-base font-medium text-verify-btn-foreground transition-opacity hover:opacity-80 disabled:opacity-40`}
              >
                Verify OTP <FaArrowRight className="h-5 w-5" />
              </button>

              <div className="md:mt-5 mt-2 space-y-1">
                {!canResend && (
                  <p className="text-sm text-muted-foreground">
                    Resend OTP in{" "}
                    <span className="font-medium text-resend">
                      {formatTime(timer)}
                    </span>
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={!canResend}
                  className="text-sm cursor-pointer font-medium text-muted-foreground underline transition-colors hover:text-resend disabled:opacity-40 disabled:no-underline"
                >
                  Resend OTP{" "}
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
