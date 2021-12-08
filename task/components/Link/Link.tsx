import React from 'react'
import Link from 'next/link'
import styles from './Link.module.css'


interface Props {
    reference: string,
    linkLabel: string,
    icon?: string,
}

export const AnchorLink = (props: Props) => {
    return <Link href={props.reference}>
        <a>
            {props.icon ? props.icon : null}
            {props.linkLabel}
        </a>
    </Link>
}