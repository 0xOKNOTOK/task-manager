import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Components
import { Button } from '../components/Button/Button'
import { Footer } from '../components/Footer/Footer'
import { FlexWrapper } from '../components/FlexWrapper/FlexWrapper'
import { Header } from '../components/Header/Header'
import { AnchorLink } from '../components/AnchorLink/AnchorLink'

// Assets

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
        <Header className={styles.header}>
          <h1>
            <span className={styles.arrow}>{'> '}</span> task
          </h1>
          <AnchorLink
            className={styles.headerlink}
            reference='https://github.com/rossgr/task-manager'
            linkLabel='Github'
          ></AnchorLink>
        </Header>
        <FlexWrapper className={styles.flex}>
          <h1>{`Task management for your projects.`}</h1>
          <h4>{`Card based management system designed to speed up development within small teams.`}</h4>
          <Button buttonLabel={'Login >'} onClick={() => 1}></Button>
        </FlexWrapper>
        <FlexWrapper className={styles.flex}>
          <></>
        </FlexWrapper>
        <FlexWrapper className={styles.features}>
          <div className={styles.feature}>
            <h5></h5>
          </div>
          <div className={styles.feature}></div>
          <div className={styles.feature}></div>
        </FlexWrapper>
      </main>
    </div>
  )
}

export default Home
