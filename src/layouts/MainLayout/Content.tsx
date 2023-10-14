import React from 'react'
import styles from './styles.module.scss'
import { TContentProps } from "./Layout.type";

const Content = ({ children }: TContentProps) => {
  return <div className={styles['content']}>{children}</div>
}

export default Content
