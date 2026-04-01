"use client"; // ✅ must be a client component

import { Provider, useDispatch } from "react-redux";
import { store } from "@/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { checkAuth } from "@/store/authSlice";
import { GoogleAnalytics } from "@next/third-parties/google";

const AuthChecker: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
};

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <AuthChecker />
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}

      {children}

      <ToastContainer />
    </Provider>
  );
};

export default ClientProvider;
