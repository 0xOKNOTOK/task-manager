import React from 'react'
import styles from './GridWrapper.module.css'

interface Props {
  children: any
  className: string
}

export const GridWrapper = ({ className, children }: Props) => {
  return <div className={className}>{children}</div>
}
