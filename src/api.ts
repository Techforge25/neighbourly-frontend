// services/contact.service.ts

import { SendFeedbackPayload, TypeUserData } from "@/types";
import { api } from "./service/axios";

export const sendFeedback = async (
  payload: SendFeedbackPayload,
): Promise<string> => {
  const res = await api.post("getInTouch/send-feedback", payload);
  return res.data?.data;
};

export const sendOtpApi = (email: string) =>
  api.post<{ data: TypeUserData; message: string; success: boolean }>(
    "auth/user",
    { email },
  );

// export const verifyOtpApi = (email: string, otp: string) =>
//   api.post<{ data: TypeUserData; message: string; success: boolean }>(
//     "auth/user/verify-otp",
//     { email, accountVerificationToken: otp },
//   );

export const verifyOtpApi = async (email: string, otp: string) => {
  const response = await api.post(
    "auth/user/verify-otp",
    {
      email,
      accountVerificationToken: otp,
    }
  );

  const accessToken = response?.data?.data?.accessToken;

  if (
    accessToken &&
    typeof window !== "undefined"
  ) {
    localStorage.setItem("token", accessToken);
  }

  return response;
};