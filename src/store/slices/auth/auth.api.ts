import { baseApi } from '../baseApi'
import { TLoginRequest, TLoginResponse } from './auth.type'

export default baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<TLoginResponse, TLoginRequest>({
      query: (arg) => ({
        url: `/auth/login`,
        method: "POST",
        body: arg,
      }),
    }),
  }),
});
