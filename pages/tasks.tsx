import React from 'react'
import styles from '../styles/Test.module.css'
import { Navbar } from '../components/Navbar/Navbar'
import { ProjectHeader } from '../components/ProjectHeader/ProjectHeader'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { FlexWrapper } from '../components/FlexWrapper/FlexWrapper'
import { TasksManager } from '../components/TasksManager/TasksManager'

import nookies from 'nookies'
import { useRouter } from 'next/router'
import { firebaseAdmin } from '../utils/firebaseAdmin'

import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx)
    console.log(JSON.stringify(cookies, null, 2))
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    const { uid, email } = token

    // the user is authenticated!
    // FETCH STUFF HERE

    return {
      props: { message: `Your email is ${email} and your UID is ${uid}.` }
    }
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      // `as never` is required for correct type inference
      // by InferGetServerSidePropsType below
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
