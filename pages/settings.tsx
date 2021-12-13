import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Settings.module.css'

// Components
import { Footer } from '../components/Footer/Footer'

const Settings: NextPage = () => {
  return (
    <div className={styles.container}>
      <main></main>

      <Footer />
    </div>
  )
}

export default Settings
