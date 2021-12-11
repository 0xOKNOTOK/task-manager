import React, { Component } from 'react'
import Link from 'next/link'
import styles from './AnchorLink.module.css'

interface Props {
  reference: string
  linkLabel: string
  icon?: any
}

export const AnchorLink = ({ reference, linkLabel, icon }: Props) => {
  return (
    <Link href={reference}>
      <a className={styles.base}>
        {icon ? icon : null}
        <p>{linkLabel}</p>
      </a>
    </Link>
  )
}
