import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { ApiErrorResponse, SendFeedbackPayload } from "@/types";
import { sendFeedback } from "@/src/api";
import { toast } from "react-toastify";

export const useContactMutation = () =>
  useMutation<string, AxiosError<ApiErrorResponse>, SendFeedbackPayload>({
    mutationFn: sendFeedback,
    onSuccess: (message) => {
      toast.success(message);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message ?? "An error occurred");
    },
  });
