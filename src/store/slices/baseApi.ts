import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { env } from "@/utils/env";
import { store } from "../store";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    return fetchBaseQuery({
      baseUrl: env.API_BASE_URL(),
      credentials: "omit",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      validateStatus: (response) =>
        200 <= response.status && response.status < 300,
      prepareHeaders: (headers) => {
        const token = (store.getState()).auth.data.token;
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
    })(args, api, extraOptions);
  },
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});
