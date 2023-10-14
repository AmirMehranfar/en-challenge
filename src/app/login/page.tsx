"use client";
import { Button, Form, Input, Typography } from "antd";
import { useExtraAntdForm } from "@/utils/antd";

const Login = (): JSX.Element => {
  const [form] = Form.useForm<>();
  const { hasError } = useExtraAntdForm(form);

  const onFinish = () => {
    console.log("onFinish");
  };

  return (
    <div className="h-[100vh] bg-primary-1 flex justify-center items-center">
      <div className="flex flex-col items-center  rounded w-3/12 bg-white shadow-xl gap-y-2 p-5">
        <Typography className="font-bold text-primary-6 text-xl">
          ورود
        </Typography>
        <Typography className="text-xs">
          خوش آمدید! لطفا نام کاربری و مز عبور خود را وارد نمایید.
        </Typography>
        <div className="w-full">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Typography className="text-[16px] font-bold mb-1">
              نام کاربری
            </Typography>
            <Form.Item
              name={"username"}
              rules={[{ required: true, message: "نام کاربری الزامی است" }]}
            >
              <Input
                className="rounded"
                placeholder="نام کاربری را وارد کنید"
              />
            </Form.Item>
            <Typography className="text-[16px] font-bold mb-1">
              رمزعبور
            </Typography>
            <Form.Item
              name={"password"}
              rules={[{ required: true, message: "رمز عبور الزامی است" }]}
            >
              <Input
                type={"password"}
                className="rounded"
                placeholder="رمز عبور را وارد کنید"
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType={"submit"}
                className="rounded"
                disabled={hasError}
              >
                ورود به پنل
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
