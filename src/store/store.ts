import { authSlice } from "./slices/auth/auth.slice";
import { baseApi } from "./slices/baseApi";
import { Slice, combineReducers, configureStore } from "@reduxjs/toolkit";
import { rtkQueryErrorHandling } from "./slices/errorHandling";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const haveToPersistInLocalStorageSlice: Slice[] = [authSlice];

const reducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  whitelist: haveToPersistInLocalStorageSlice.map((c) => c.name),
  storage: storage,
  debug : false,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat(baseApi.middleware)
      .concat(rtkQueryErrorHandling),
});

export const storePersist = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// setInterval(() => console.log(store.getState()), 3000);
