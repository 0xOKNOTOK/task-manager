import React from 'react'
import nookies from 'nookies'
import styles from '../styles/Projects.module.css'

import { Navbar } from '../components/Navbar/Navbar'
import { FlexWrapper } from '../components/FlexWrapper/FlexWrapper'
import { firebaseAdmin } from '../utils/firebaseAdmin'
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import ProjectCard from '../components/ProjectCard/ProjectCard'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx)
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    const { uid, email } = token

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

const ProjectsPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const tempData = {
    title: 'Example',
    author: props.user.toString(),
    description: 'Web application built with React and Express.',
    members: []
  }
  return (
    <main>
      <Navbar />
      <FlexWrapper className={styles.flexWrapper}>
        <h1>Projects</h1>
      </FlexWrapper>
      <FlexWrapper className={styles.projectsContainer}>
        <ProjectCard project={tempData} />
      </FlexWrapper>
    </main>
  )
}

export default ProjectsPage
