import React from 'react'
import styles from './FlexWrapper.module.css'

interface Props {
  children: React.ReactNode
  className: string
}

export const FlexWrapper = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>
}
