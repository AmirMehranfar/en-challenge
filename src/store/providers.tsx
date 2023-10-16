"use client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, storePersist } from "./store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}><PersistGate loading={null} persistor={storePersist}>{children}</PersistGate></Provider>;
}
