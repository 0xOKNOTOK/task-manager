import React from 'react'
import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar/Navbar'
import { ProjectHeader } from '../components/ProjectHeader/ProjectHeader'
import { GridWrapper } from '../components/GridWrapper/GridWrapper'
import { Task } from '../components/Task/Task'
import { SearchBar } from '../components/SearchBar/SearchBar'

const Test: NextPage = () => {
  return (
    <main>
      <Navbar />
      <ProjectHeader />
      <SearchBar />
    </main>
  )
}

export default Test
