import { api } from "./service/axios";

export const getSuburbs = async () => {
     try {
          const { data } = await api.get(`/suburb`);
          return data;
     } catch (err) {
          console.error("Error fetching Suburb:", err);
          throw err;
     }
}

