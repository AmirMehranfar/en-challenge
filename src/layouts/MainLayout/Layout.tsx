import React from 'react'
import { Layout } from "antd";
import styles from './styles.module.scss'
import Header from './Header'
import Sidebar from './Sidebar'
import TLayout from './Layout.type'


const MainLayout = ({ children }: TLayout): React.ReactElement => {
  return (
    <>
      <Layout className={styles['layout']}>
        <Header />
        <Layout className={styles['layout__inner']}>
          <Sidebar />
          <Layout.Content className={styles['layout__inner--page']}>
            <div className={styles['layout__inner--page--content']}>{children}</div>
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  )
}

export default MainLayout;
