import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  triggerRecommendations: false,
  link:""
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
    },
    setLink: (state, action) => {
      state.link = action.payload;
    }
  },
});

export const { openShare, closeShare, setTriggerRecommendations , setLink } = shareSlice.actions;
export default shareSlice.reducer;