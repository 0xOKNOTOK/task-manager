import React, { useEffect, useState } from 'react'
import nookies from 'nookies'
import styles from '../../styles/Test.module.css'

import { Navbar } from '../../../../components/Navbar/Navbar'
import { ProjectHeader } from '../../../../components/ProjectHeader/ProjectHeader'
import { SearchBar } from '../../../../components/SearchBar/SearchBar'
import { FlexWrapper } from '../../../../components/FlexWrapper/FlexWrapper'
import { TasksManager } from '../../../../components/TasksManager/TasksManager'
import { firebaseAdmin } from '../../../../utils/firebaseAdmin'
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx)
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    const { uid, email } = token

    if (ctx?.params?.tasks_id === 'task') {
      console.log('error 404')
    }
    // Fetch data and return as props.
    return {
      props: { user: [uid] }
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
  const [user, setUser] = useState(props)

  return (
    <main>
      <Navbar />
      <FlexWrapper className={styles.flexWrapper}>
        <ProjectHeader user={user} />
        <SearchBar />
        <TasksManager />
      </FlexWrapper>
    </main>
  )
}

export default Tasks
