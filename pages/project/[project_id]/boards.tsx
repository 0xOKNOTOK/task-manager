import React from 'react'
import styles from '../../../styles/Boards.module.css'
import Head from 'next/head'
import type { NextPage } from 'next'

// Components
import { Footer } from '../../../components/Footer/Footer'

const Boards: NextPage = () => {
  return (
    <div className={styles.container}>
      <main></main>

      <Footer />
    </div>
  )
}
