import React from 'react'
import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar/Navbar'
import { ProjectHeader } from '../components/ProjectHeader/ProjectHeader'



const Test: NextPage = () => {
    return (
        <main>
            <Navbar />
            <ProjectHeader />
        </main>
    )

}

export default Test