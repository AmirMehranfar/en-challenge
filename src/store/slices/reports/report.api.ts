import { TReport } from "@/types/entity/report";
import { baseApi } from "../baseApi";
import {
  GetAllReportRequestDto,
  GetAllReportResponseDto,
  CreateReportRequestDto,
  deleteReportRequestDto,
} from "./report.type";

export default baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query<GetAllReportResponseDto, GetAllReportRequestDto>({
      query: (arg) => ({
        url: "/reports",
        method: "GET",
        params: arg,
      }),
    }),
    create: builder.mutation<TReport, CreateReportRequestDto>({
      query: (arg) => ({
        url: "/reports",
        method: "POST",
        body: arg,
      }),
    }),
    deleteReport: builder.mutation<TReport, deleteReportRequestDto>({
      query: ({ id }) => ({
        url: `/reports/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
