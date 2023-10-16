"use client";
import { DatePicker, useJalaliLocaleListener } from "antd-jalali";
import { useExtraAntdForm } from "@/utils/antd";
import { Button, Form, Input, TimePicker } from "antd";
import React from "react";
import locale from "antd/es/date-picker/locale/fa_IR";
import dayjs from "dayjs";
import reportApi from "@/store/slices/reports/report.api";
import { TReport } from "@/types/entity/report";
import { useRouter } from "next/navigation";
import moment from "jalali-moment";

const AddReport = (): JSX.Element => {
  const router = useRouter();
  useJalaliLocaleListener();
  dayjs.calendar("jalali");
  const date = dayjs(new Date(), { jalali: true });

  const [form] = Form.useForm();
  const { hasError } = useExtraAntdForm(form);

  const [createReport, { isLoading: isCreateLoading }] =
    reportApi.useCreateMutation();

  const onFinish = async (value: TReport) => {
    if (hasError) return;
    await createReport({
      date: moment(value.date).locale("en").format("YYYY-MM-DD"),
      description: value.description,
      time: moment(new Date(value.time)).format("HH:mm"),
      title: value.title,
    });
    router.push("/reports");
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className={"antd-form"}>
        <Form
          form={form}
          className="flex flex-col gap-6"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
        >
          <div className="">
            <div className="flex items-center justify-start gap-x-4">
              <Form.Item
                name="title"
                label={"عنوان"}
                rules={[
                  { required: true, message: "عنوان گزارش را وارد کنید" ?? "" },
                ]}
              >
                <Input placeholder={"عنوان" ?? ""} />
              </Form.Item>
              <Form.Item
                name="description"
                label={"توضیحات"}
                rules={[
                  {
                    required: true,
                    message: "توضیحات گزارش را وارد کنید" ?? "",
                  },
                ]}
              >
                <Input placeholder={"توضیحات" ?? ""} />
              </Form.Item>
              <Form.Item
                name="date"
                label={"تاریخ گزارش"}
                rules={[
                  {
                    required: true,
                    message: "تاریخ گزارش را وارد کنید " ?? "",
                  },
                ]}
              >
                <DatePicker
                  defaultValue={date}
                  format={"YYYY/MM/DD"}
                  locale={locale}
                />
              </Form.Item>
              <Form.Item
                name="time"
                label={"تاریخ گزارش"}
                rules={[
                  {
                    required: true,
                    message: "تاریخ گزارش را وارد کنید " ?? "",
                  },
                ]}
              >
                <TimePicker locale={locale} format={"HH:mm"} />
              </Form.Item>
            </div>
          </div>
          <div className="flex items-center justify-end p-4 bg-white">
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  className="h-full"
                  key="submit"
                  htmlType="submit"
                  disabled={isCreateLoading}
                  loading={isCreateLoading}
                >
                  افزودن
                </Button>
              )}
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddReport;
