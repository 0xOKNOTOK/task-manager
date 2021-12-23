import React from 'react'
import styles from '../../../styles/Boards.module.css'
import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext
} from 'next'
import nookies from 'nookies'
import { firebaseAdmin } from '../../../utils/firebaseAdmin'
import axios from 'axios'

// Components
import { Navbar } from '../../../components/Navbar/Navbar'
import { FlexWrapper } from '../../../components/FlexWrapper/FlexWrapper'
import { SearchBar } from '../../../components/SearchBar/SearchBar'

const fetchBoards = async () => {
  const boards = await axios.get('/').catch(err => {
    console.log(err)
  })
  return boards
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx)
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    const { uid, email } = token
    const boards = fetchBoards()
    return {
      props: { user: [email, uid], data: [boards.toString()] }
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
        <SearchBar addItem='New Item' />
      </FlexWrapper>
    </main>
  )
}

export default Boards
