import React from 'react'
import { GridWrapper } from '../GridWrapper/GridWrapper'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './TasksManager.module.css'

export const TasksManager = () => {
  return (
    <GridWrapper className={styles.grid}>
      <div className={styles.columnTitles}>
        <SectionHeader sectionTitle='To-do' dotColour='#C4C4C4' />
      </div>
      <div className={styles.columnTitles}>
        <SectionHeader sectionTitle='In Progress' dotColour='#11A6A6' />
      </div>
      <div className={styles.columnTitles}>
        <SectionHeader sectionTitle='In Review' dotColour='#F9896A' />
      </div>
      <div className={styles.columnTitles}>
        <SectionHeader sectionTitle='Completed' dotColour='#21DE1D' />
      </div>
    </GridWrapper>
  )
}
