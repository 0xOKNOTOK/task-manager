import React from 'react'
import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar/Navbar'
import { ProjectHeader } from '../components/ProjectHeader/ProjectHeader'
import { GridWrapper } from '../components/GridWrapper/GridWrapper'
import { Task } from '../components/Task/Task'

const Test: NextPage = () => {
  return (
    <main>
      <Navbar />
      <ProjectHeader />
      <GridWrapper>
        <Task task={{}} />
      </GridWrapper>
    </main>
  )
}

export default Test
