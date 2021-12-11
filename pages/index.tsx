import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Components
import { Navbar } from '../components/Navbar/Navbar'
import { Button } from '../components/Button/Button'
import { AnchorLink } from '../components/AnchorLink/AnchorLink'
import { Footer } from '../components/Footer/Footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`> task`}</title>
        <meta
          name='description'
          content='Task management system for developers.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Button onClick={() => console.log('hi')} buttonLabel='Hi' />
        <AnchorLink reference='/settings' linkLabel='Hello' />
      </main>

      <Footer />
    </div>
  )
}

export default Home
