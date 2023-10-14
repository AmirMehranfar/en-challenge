import { LogoutOutlined } from '@ant-design/icons'
import { Button, Layout, Typography } from 'antd'
import React from 'react'
import styles from './styles.module.scss'

const Header = () => {
  const { Header } = Layout
  return (
    <Header className={styles['header']}>
      <div className={styles['header__brand']}>
        <Typography.Text className={styles['header__brand--title']}>اسنوا</Typography.Text>
      </div>
      <div className={styles['header__actions']}>
        <div className={styles['header__actions--user']}>
          <Typography.Text>کاربر</Typography.Text>
        </div>
        <div className={styles['header__actions--logout']}>
          <Button type="default" shape="default" icon={<LogoutOutlined />} />
        </div>
      </div>
    </Header>
  )
}

export default Header;
