import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Components
import { Button } from '../components/Button/Button'
import { TiGroup } from 'react-icons/ti'
import { GoMarkdown } from 'react-icons/go'
import { MdMarkChatUnread } from 'react-icons/md'
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
          <div className={styles.landing}>
            <h1>{`Task management for your projects.`}</h1>
            <h4>{`Card based management system designed to speed up development within small teams.`}</h4>
            <AnchorLink linkLabel='> Login' reference='/login' />
          </div>
          <FlexWrapper className={styles.features}>
            <div className={styles.feature}>
              <TiGroup />
              <h5>Work Together</h5>
              <p>
                Create teams with members to begin working on a new project
                together.
              </p>
            </div>
            {'>_'}
            <div className={styles.feature}>
              <GoMarkdown />
              <h5>Markdown Styling</h5>
              <p>
                Built in markdown stying for increased organisation on
                individual tasks.
              </p>
            </div>
            {'>_'}
            <div className={styles.feature}>
              <MdMarkChatUnread />
              <h5>Communcation built in</h5>
              <p>Built in discord support, live chat and comment system.</p>
            </div>
          </FlexWrapper>
        </FlexWrapper>
      </main>
    </div>
  )
}

export default Home
