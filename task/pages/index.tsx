import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Components
import { Navbar } from '../components/Navbar/Navbar'
import { ButtonStandard } from '../components/Button/Button'
import { AnchorLink } from '../components/AnchorLink/AnchorLink'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`> task`}</title>
        <meta name="description" content="Task management system for developers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Navbar />
      <ButtonStandard buttonLabel='Hi'/>
      <AnchorLink reference='/settings' linkLabel='Hello'/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by rossgr
        </a>
      </footer>
    </div>
  )
}

export default Home
