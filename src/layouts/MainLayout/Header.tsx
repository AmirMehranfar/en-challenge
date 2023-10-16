import { LogoutOutlined } from "@ant-design/icons";
import { Button, Layout, Typography } from "antd";
import React from "react";
import styles from "./styles.module.scss";
import { authSlice, useAppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { store } from "@/store/store";

const Header = () => {
  const { Header } = Layout;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(authSlice.actions.logout());
    router.push("/login");
  };
  const auth = store.getState().auth;
  return (
    <Header className={styles["header"]}>
      <div className={styles["header__brand"]}>
        <Typography.Text className={styles["header__brand--title"]}>
          گروه انتخاب
        </Typography.Text>
      </div>
      <div className={styles["header__actions"]}>
        <div className={styles["header__actions--user"]}>
          <Typography.Text>{auth?.data?.name || "وارد شوید"}</Typography.Text>
        </div>
        <div className={styles["header__actions--logout"]}>
          <Button
            type="default"
            shape="default"
            icon={<LogoutOutlined />}
            onClick={() => logout()}
          />
        </div>
      </div>
    </Header>
  );
};

export default Header;
