import { api } from "./service/axios";
import { setCredentials } from "@/store/authSlice";
import { store } from "@/store";

export const getAuth = async () => {
  try {
    const { data } = await api.get("/auth/user/me");
    const currentToken = store.getState().auth.accessToken;
    const accessToken = data?.data?.accessToken || currentToken;
    const user = data?.data;

    if (accessToken) {
      store.dispatch(setCredentials({ accessToken, user }));
    }

    return data;
  } catch (err) {
    console.error("Error fetching AuthMe:", err);
    throw err;
  }
};