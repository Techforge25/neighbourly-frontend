"use client"; // ✅ must be a client component

import { Provider } from "react-redux";
import { store } from "@/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      {children}

      <ToastContainer />
    </Provider>
  );
};

export default ClientProvider;
