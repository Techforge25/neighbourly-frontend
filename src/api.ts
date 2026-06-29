// services/contact.service.ts

import { SendFeedbackPayload, TypeUserData } from "@/types";
import { api } from "./service/axios";
import { getAuth } from "@/src/auth";
import { setCredentials } from "@/store/authSlice";
import { store } from "@/store";
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

  if (response.status === 200 || response.data?.success) {

    const accessToken = response.data?.data?.accessToken;
    const user = response.data?.data;

    if (accessToken) {

      store.dispatch(setCredentials({ accessToken, user }));
      
      try {
    
        await getAuth(); 
      } catch (authError) {
        console.error("OTP verified but AuthMe failed:", authError);
      }
    }
  }

  return response;
};