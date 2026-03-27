import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorState {
  message: string;
}

const initialState: ErrorState = {
  message: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (
      state,
      action: PayloadAction<{ message: string; type?: "error" | "warning" | "success" }>
    ) => {
      state.message = action.payload.message;
    },
  },
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;