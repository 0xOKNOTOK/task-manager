import React from 'react'
import styles from './FlexWrapper.module.css'

interface Props {
    children: React.ReactNode
}


export const FlexWrapper = (props: Props) => {
    return <div className={styles.base}>
        {props.children}
    </div>
}