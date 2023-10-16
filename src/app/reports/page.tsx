"use client";
import reportApi from "@/store/slices/reports/report.api";
import { TReport } from "@/types/entity/report";
import { Table } from "antd";
import { ColumnGroupType, ColumnType } from "antd/es/table";
import React from "react";

function Reports() {
  const { data, isLoading: isGetLoading } = reportApi.useGetAllQuery({});
  console.log({data})
  const ReportsColumns: ColumnType<TReport>[] = [
    {
      title: "عنوان",
      dataIndex: "title",
      align: "center",
    },
  ];

  return (
    <div>
      <Table
        loading={isGetLoading}
        dataSource={data?.data ?? []}
        columns={ReportsColumns}
      />
    </div>
  );
}

export default Reports;
