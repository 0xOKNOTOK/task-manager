import React, { MouseEventHandler } from 'react'
import styles from './ButtonIcon.module.css'

interface Props {
  children: any
  onClick: MouseEventHandler<HTMLButtonElement>
  cssClass?: string
}

export const ButtonIcon = ({ children, onClick, cssClass }: Props) => {
  return (
    <button onClick={onClick} className={cssClass}>
      {children}
    </button>
  )
}
