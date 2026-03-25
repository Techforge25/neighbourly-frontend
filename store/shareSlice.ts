import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const shareSlice = createSlice({
  name: "share",
  initialState,
  reducers: {
    openShare: (state) => {
      state.isOpen = true;
    },
    closeShare: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openShare, closeShare } = shareSlice.actions;
export default shareSlice.reducer;