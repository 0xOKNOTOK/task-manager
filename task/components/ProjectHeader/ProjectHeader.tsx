import React from 'react'
import styles from './ProjectHeader.module.css'
import { FlexWrapper } from '../FlexWrapper/FlexWrapper'

interface Props {
    title?: string,
    author?: string,
    user?: Object,
    date?: string,
    links?: Array<object>
}

export const ProjectHeader = ({}: Props) => {
    return (
        <div className={styles.base}>
                <div>
                    <h1>Project Name</h1>
                    <div>
                        <p>0/1/1/ created by @user</p>
                    </div>
                </div>
                <div>
                    <span></span>
                    <div>
                        <h3>Username</h3>
                        <p>Senior Dev</p>
                    </div>
                </div>
        </div>
    )
}