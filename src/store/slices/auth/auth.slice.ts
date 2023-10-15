
import { TUserPrivate } from "@/types/entity/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: TUserPrivate = {
  message: "",
  data: {
    id: "",
    name: "",
    username: "",
    token: ""
  },
};

export const authSlice = createSlice({
  name: "auth",

  initialState: initialUserState,

  reducers: {
    login(state, { payload }: PayloadAction<TUserPrivate>) {
      Object.assign(state, payload);
    },
    logout(state) {
      Object.assign(state, initialUserState);
    },
  },
});
