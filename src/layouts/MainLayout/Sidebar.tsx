import React from 'react'
import { Layout, Menu, theme } from 'antd'
import { menu } from './utils/Menus'

const Sidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout.Sider style={{ background: colorBgContainer }} width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        items={menu}
        className="h-full"
      />
    </Layout.Sider>
  )
}

export default Sidebar
