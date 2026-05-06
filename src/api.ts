// services/contact.service.ts

import { SendFeedbackPayload } from "@/types";
import { api } from "./service/axios";




export const sendFeedback = async (payload: SendFeedbackPayload): Promise<string> => {
  const res = await api.post("getInTouch/send-feedback", payload);
  return res.data?.data;
};