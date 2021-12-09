import React from 'react'
import styles from './FlexWrapper.module.css'

interface Props {
    children: React.ReactNode
}


export const FlexWrapper = ({children}: Props) => {
    return <div className={styles.base}>
        {children}
    </div>
}