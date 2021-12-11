import React, { MouseEventHandler } from 'react'
import styles from './ButtonIcon.module.css'

interface Props {
  children: any
  onClick: MouseEventHandler<HTMLButtonElement>
  cssClass?: string
  icon?: any
}

export const ButtonIcon = ({ children, onClick, cssClass, icon }: Props) => {
  return (
    <button onClick={onClick} className={cssClass}>
      {icon}
      {children}
    </button>
  )
}
