import React from 'react'
import styles from 'ProjectHeader.module.css'

interface Props {
    title: string,
    author: string,
    user: Object,
    date: string,
    links: Array<object>
}

export const ProjectHeader = ({}: Props) => {
    return (
        <div className={styles.base}>

        </div>
    )
}