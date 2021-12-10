import { AppProps } from 'next/app'
import React, { MouseEventHandler } from 'react'
import styles from './Button.module.css'

interface Props {
  buttonLabel: any
  onClick: MouseEventHandler<HTMLButtonElement>
}
export const Button = ({ buttonLabel, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.base}>
      {buttonLabel}
    </button>
  )
}
