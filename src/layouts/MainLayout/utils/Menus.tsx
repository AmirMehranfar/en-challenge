import React from 'react'
import Link from 'next/link'
import { MenuProps } from 'antd'
import { OrderedListOutlined } from '@ant-design/icons'

export const menu: MenuProps["items"] = [
  {
    key: 1,
    icon: <OrderedListOutlined />,
    label: "گزارش ها",
    children: [
      {
        key: "submenu_1_1",
        label: <Link href={"/reports"}>لیست گزارش ها </Link>,
      },
    ],
  },
];
