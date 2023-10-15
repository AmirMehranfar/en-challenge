import { baseApi } from "../baseApi";
import { GetAllReportRequestDto, GetAllReportResponseDto } from "./report.type";


export default baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query<GetAllReportResponseDto, GetAllReportRequestDto>({
      query: (arg) => ({
        url: "/reports",
        method: "GET",
        params: arg,
      }),
    }),
  }),
});
