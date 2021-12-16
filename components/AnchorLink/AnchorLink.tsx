import React, { Component } from 'react'
import Link from 'next/link'
import styles from './AnchorLink.module.css'

interface Props {
  reference: string
  linkLabel: string
  icon?: any
  onClick?: any
  className?: string
}

export const AnchorLink = ({
  reference,
  linkLabel,
  icon,
  onClick,
  className
}: Props) => {
  return (
    <Link href={reference}>
      <a onClick={onClick} className={className ? className : styles.base}>
        {icon ? icon : null}
        <p>{linkLabel}</p>
      </a>
    </Link>
  )
}
