import React from 'react'
import styles from './Footer.module.css';

export const Footer = () => {
    return (
    <footer className={styles.base}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by rossgr
        </a>
      </footer>
    )
}