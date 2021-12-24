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
import BoardCard from '../../../components/BoardCard/BoardCard'

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
      <div className={styles.page}>
        <FlexWrapper className={styles.header}>
          <h1>Boards</h1>
        </FlexWrapper>
        <SearchBar addItem='New Item' />
        <FlexWrapper className={styles.boardContainer}>
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </FlexWrapper>
      </div>
    </main>
  )
}

export default Boards
