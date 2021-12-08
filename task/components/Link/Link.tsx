import React from 'react'
import styles from './Link.module.css'


interface Props {
    reference: string,
    linkLabel: string,
    icon?: string,
}

export const Link = (props: Props) => {


    return <a href={props.reference}>{props.icon ? props.icon : null}{props.linkLabel}</a>
}