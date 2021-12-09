import React from 'react'
import styles from './GridWrapper.module.css'

interface Props {
    children: React.ReactChildren
}

export const GridWrapper = ({children}: Props) => {
    return <div className={styles.base}>
        {children} 
    </div>
}