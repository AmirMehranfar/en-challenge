import { LayoutProps } from 'types/application.type'
import React from 'react'

const EmptyLayout = ({ children }: LayoutProps): React.ReactElement => {
  return <div>{children}</div>
}

export default EmptyLayout
