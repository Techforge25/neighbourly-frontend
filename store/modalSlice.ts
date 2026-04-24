import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.openModal = true;
    },
    closeModal: (state) => {
      state.openModal = false;
    },
    toggleModal: (state) => {
      state.openModal = !state.openModal;
    },
  },
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;