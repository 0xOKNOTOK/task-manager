import { AppProps } from 'next/app'
import React from 'react'
import styles from './Button.module.css'


interface Props {
    buttonLabel: string | ImageBitmap
    onClick?: Function
}
export const ButtonStandard = (props: Props) => {
    return (<button className={styles.base}>{props.buttonLabel}</button>)
}