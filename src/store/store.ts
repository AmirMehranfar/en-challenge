import { authSlice } from "./slices/auth/auth.slice";
import { baseApi } from "./slices/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import { rtkQueryErrorHandling } from "./slices/errorHandling";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat(baseApi.middleware)
      .concat(rtkQueryErrorHandling),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setInterval(() => console.log(store.getState()), 3000);
