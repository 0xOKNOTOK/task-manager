import React from 'react';
import styles from './GridWrapper.module.css'

export const GridWrapper: React.FC = (props) => {
    return <div className={styles.base}>
        {props.children} 
    </div>
}