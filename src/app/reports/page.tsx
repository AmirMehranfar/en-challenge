"use client";
import HelpCard from "@/components/HelpCard";
import reportApi from "@/store/slices/reports/report.api";
import { TReport } from "@/types/entity/report";
import { Button, Space, Table, Typography } from "antd";
import moment from "jalali-moment";
import { ColumnType } from "antd/es/table";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Reports() {
  const router = useRouter();
  const {
    data,
    isLoading: isGetLoading,
    refetch,
  } = reportApi.useGetAllQuery({});
  const [deleteReport] = reportApi.useDeleteReportMutation();
  const onReportDeleteActionClick = async (report: TReport) => {
    await deleteReport({
      id: report?.id ?? "",
    });
    refetch();
  };

  const onTableStateChange = () => {
    refetch();
  };

  React.useEffect(() => {
    onTableStateChange();
  }, []);
  
  const ReportsColumns: ColumnType<TReport>[] = [
    {
      title: "عنوان",
      dataIndex: "title",
      align: "center",
    },
    {
      title: "توضیحات",
      dataIndex: "description",
      align: "center",
    },
    {
      title: "تاریخ",
      dataIndex: "description",
      align: "center",
      render: (_, record) => (
        <Typography className="text-[#1890FF] text-sm">
          {moment(record.date).locale("fa").format("YYYY-MM-DD")}
        </Typography>
      ),
    },
    {
      title: "زمان",
      dataIndex: "time",
      align: "center",
    },
    {
      title: "عملیات",
      dataIndex: "action",
      align: "center",
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <Link
            href={`/reports/update/${record.id}`}
            className="ml-4 text-blue-400"
          >
            ویرایش
          </Link>
          <Space
            className={"text-red-500 cursor-pointer"}
            onClick={() => onReportDeleteActionClick(record)}
          >
            حذف
          </Space>
        </div>
      ),
    },
  ];

  return (
    <div>
      <HelpCard
        title="لیست گزارشات"
        actions={
          <Button
            className="mt-4 text-xs"
            type="primary"
            size="large"
            onClick={() => router.push("/reports/add")}
          >
            + افزودن گزارش
          </Button>
        }
      />
      <Table
        loading={isGetLoading}
        dataSource={data?.data ?? []}
        columns={ReportsColumns}
        onChange={onTableStateChange}
      />
    </div>
  );
}

export default Reports;
