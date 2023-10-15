import { TReport } from "@/types/entity/report";


export interface GetAllReportRequestDto {
}

export interface GetAllReportResponseDto {
  reportList: TReport[];
}
