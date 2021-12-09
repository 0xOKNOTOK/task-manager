import React from 'react'
import styles from './UserIdentity.module.css'


export const UserIdentity = () => {
    return (<div className={styles.user}>
        <span></span>
        <div>
            <h3>Username</h3>
            <p>Senior Dev</p>
        </div>
    </div>)
}