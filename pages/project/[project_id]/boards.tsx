import React from 'react'
import styles from '../../../styles/Boards.module.css'
import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext
} from 'next'
import nookies from 'nookies'
import { firebaseAdmin } from '../../../utils/firebaseAdmin'

// Components
import { Navbar } from '../../../components/Navbar/Navbar'
import { FlexWrapper } from '../../../components/FlexWrapper/FlexWrapper'
import { ProjectHeader } from '../../../components/ProjectHeader/ProjectHeader'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx)
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    const { uid, email } = token

    // Fetch data and return as props.
    return {
      props: { user: [email, uid] }
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

const Boards = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <main>
      <Navbar />
      <FlexWrapper className={styles.flexWrapper}>
        <h1>a</h1>
      </FlexWrapper>
    </main>
  )
}

export default Boards
