import { TReport } from "@/types/entity/report";
import { baseApi } from "../baseApi";
import {
  GetAllReportRequestDto,
  GetAllReportResponseDto,
  CreateReportRequestDto,
  deleteReportRequestDto,
  EditReportRequestDto,
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
    editReport: builder.mutation<TReport, EditReportRequestDto>({
      query: ({ id, ...arg }) => ({
        url: `/reports/${id}`,
        method: "PUT",
        body: arg,
      }),
    }),
  }),
});
