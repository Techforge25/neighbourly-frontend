import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./tabSlice";
import shareReducer from "./shareSlice";
import authReducer from './authSlice';
import errorReducer from './errorSlice';

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    share: shareReducer,
    auth: authReducer,
    error: errorReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;