import React from 'react'
import styles from './Link.module.css'


interface Props {
    reference: string,
    linkLabel: string,
}

export const Link: React.FC<Props> = (props) => {
    return <a href={props.reference}>{props.linkLabel}</a>
}