import { TReport } from "@/types/entity/report";

export interface GetAllReportRequestDto {}

export interface GetAllReportResponseDto {
  data: TReport[];
}

export type CreateReportRequestDto = Omit<TReport, "id">;

export type deleteReportRequestDto = {
  id: string;
};
