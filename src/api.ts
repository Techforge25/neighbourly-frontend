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

export const verifyOtpApi = (email: string, otp: string) =>
  api.post<{ data: TypeUserData; message: string; success: boolean }>(
    "auth/user/verify-otp",
    { email, accountVerificationToken: otp },
  );
