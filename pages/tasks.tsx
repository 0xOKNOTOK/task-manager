import React from 'react'
import nookies from 'nookies'
import styles from '../styles/Test.module.css'

import { Navbar } from '../components/Navbar/Navbar'
import { ProjectHeader } from '../components/ProjectHeader/ProjectHeader'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { FlexWrapper } from '../components/FlexWrapper/FlexWrapper'
import { TasksManager } from '../components/TasksManager/TasksManager'
import { firebaseAdmin } from '../utils/firebaseAdmin'
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx)
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    const { uid, email } = token

    // fetch data from firebase (user details & task etc.)
    return {
      props: { message: `Your email is ${email} and your UID is ${uid}.` }
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {} as never
    }
  }
}

const Tasks = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <main>
      <Navbar />
      <FlexWrapper className={styles.flexWrapper}>
        <ProjectHeader />
        <SearchBar />
        {props.message}
        <TasksManager />
      </FlexWrapper>
    </main>
  )
}

export default Tasks
