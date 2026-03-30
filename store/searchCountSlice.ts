import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardLength: 0,
  isShowFullList : false
};

const cardLengthSlice = createSlice({
  name: "cardLength",
  initialState,
  reducers: {
    setCardLength: (state,action)  => {
      state.cardLength = action.payload;
    },

    setIsShowFullList : (state,action)=>{
      state.isShowFullList = action.payload
    }
   
  },
});

export const { setCardLength,setIsShowFullList } = cardLengthSlice.actions;
export default cardLengthSlice.reducer;