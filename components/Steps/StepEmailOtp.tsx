import { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { ApiErrorResponse, TypeEamilOtpProps, TypeUserData } from "@/types";
import OtpStep from "./OtpStep";
import EmailStep from "./EmailStep";
import { useMutation } from "@tanstack/react-query";
import { sendOtpApi, verifyOtpApi } from "@/src/api";
import { authEmailSchema } from "@/validations/Recommendations";

export default function StepEmailOtp({
  onVerified,
  nextStepThree,
  onClose,
  setHeaderTitle,
  setStepOtp,
}: TypeEamilOtpProps) {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [userData, setUserData] = useState<TypeUserData | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const sendOtpMutation = useMutation({
    mutationFn: (email: string) => sendOtpApi(email),
    onSuccess: ({ data: res }) => {
      const { data, message } = res;
      localStorage.setItem(
        "isProfileCompleted",
        JSON.stringify(data?.isProfileCompleted),
      );
      setUserData(data);

     if (data?.OTPRequired) {
  setTimer(60);
  setCanResend(false);
  setOtp("");

  setOtpSent(true);
  setHeaderTitle("Verify It’s Really You");
  setStepOtp(true);

  toast.success(message);
} else if (!data?.isProfileCompleted) {
        onVerified();
      }
      
    },
    onError: (err: AxiosError<ApiErrorResponse>) => {
      toast.error(err?.response?.data?.message || "An error occurred");
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: (email: string) => verifyOtpApi(email, otp),
    onSuccess: ({ data: res }) => {
      const { data, message, success } = res;

      setUserData(data);

      if (success && !data?.isProfileCompleted) {
        toast.success(message);
        onVerified();
        setStepOtp(false);
      } else if (data?.isProfileCompleted || success) {
        setOtpSent(false);
      }
    },
    onError: (err: AxiosError<ApiErrorResponse>) => {
      toast.error(err?.response?.data?.message || "An error occurred");
    },
  });
  // --------------------------------

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: authEmailSchema,
    onSubmit: ({ email }) => sendOtpMutation.mutate(email.trim()),
  });

  const verifyOtp = () => verifyOtpMutation.mutate(formik.values.email.trim());

  useEffect(() => {
  if (otpSent) {
    setTimer(60);
    setCanResend(false);
  }
}, [otpSent]);

  // ---------- Timer ----------
 useEffect(() => {
  if (!otpSent) return;

  if (timer <= 0) {
    setCanResend(true);
    return;
  }

  const id = setTimeout(() => {
    setTimer((prev) => prev - 1);
  }, 1000);

  return () => clearTimeout(id);
}, [timer, otpSent]);

  const handleResend = useCallback(() => {
    setTimer(60);
    setCanResend(false);
    setOtp("");
    sendOtpMutation.mutate(formik.values.email.trim());
  }, [formik.values.email]);
  // ---------------------------

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {!otpSent && (
          <EmailStep
            userData={userData!}
            formik={formik}
            pathname={pathname}
            onClose={onClose}
            router={router}
            nextStepThree={nextStepThree}
            loading={sendOtpMutation.isPending}
          />
        )}

        {otpSent && (
          <OtpStep
            otp={otp}
            setOtp={setOtp}
            verifyOtp={verifyOtp}
            canResend={canResend}
            timer={timer}
            handleResend={handleResend}
            formatTime={formatTime}
          />
        )}
      </form>
    </div>
  );
}
