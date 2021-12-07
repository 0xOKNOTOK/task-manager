import React from 'react'
import styles from './FlexWrapper.module.css'

export const FlexWrapper: React.FC = (props) => {
    return <div className={styles.base}>
        {props.children}
    </div>
}