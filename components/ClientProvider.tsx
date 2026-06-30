"use client"; // ✅ must be a client component

import { Provider, useDispatch } from "react-redux";
import { store } from "@/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getAuth } from "@/src/auth";

const AuthChecker: React.FC = () => {
  useEffect(() => {
    getAuth();
  }, []);

  return null;
};

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <Provider store={store}>
      <AuthChecker />
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

      <ToastContainer />
    </Provider>
  );
};

export default ClientProvider;
