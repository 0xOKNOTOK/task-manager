import React, { Component } from 'react'
import Link from 'next/link'
import styles from './AnchorLink.module.css'

interface Props {
  reference: string
  linkLabel: string
  icon?: any
  onClick?: any
}

export const AnchorLink = ({ reference, linkLabel, icon, onClick }: Props) => {
  return (
    <Link href={reference}>
      <a onClick={onClick} className={styles.base}>
        {icon ? icon : null}
        <p>{linkLabel}</p>
      </a>
    </Link>
  )
}
