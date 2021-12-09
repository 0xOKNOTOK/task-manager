import React, { Component } from 'react'
import Link from 'next/link'
import styles from './Link.module.css'


interface Props {
    reference: string,
    linkLabel: string,
    icon?: any | null,
}

export const AnchorLink = (props: Props) => {
    return <Link href={props.reference} >
        <a className={styles.base}>
            {props.icon ? props.icon : null}
            {props.linkLabel}
        </a>
    </Link>
}