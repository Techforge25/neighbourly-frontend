import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  triggerRecommendations: false,
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
    setTriggerRecommendations: (state, action) => {
      state.triggerRecommendations = action.payload;
    }
  },
});

export const { openShare, closeShare, setTriggerRecommendations } = shareSlice.actions;
export default shareSlice.reducer;