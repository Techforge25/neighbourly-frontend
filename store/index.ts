import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./tabSlice";
import shareReducer from "./shareSlice";
import authReducer from './authSlice';
import errorReducer from './errorSlice';
import paginationReducer from "./paginationSlice";
import cardLengthReducer from "@/store/searchCountSlice"
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    share: shareReducer,
    auth: authReducer,
    error: errorReducer,
    pagination: paginationReducer,
    cardLength: cardLengthReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;