import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardLength: 0,
};

const cardLengthSlice = createSlice({
  name: "cardLength",
  initialState,
  reducers: {
    setCardLength: (state,action)  => {
      state.cardLength = action.payload;
    },
   
  },
});

export const { setCardLength } = cardLengthSlice.actions;
export default cardLengthSlice.reducer;