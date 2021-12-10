import React, { MouseEventHandler } from 'react'
import styles from './ButtonIcon.module.css'

interface Props {
  children: any
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const ButtonIcon = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  )
}
