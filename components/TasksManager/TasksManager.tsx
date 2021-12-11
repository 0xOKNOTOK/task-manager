import React from 'react'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { Task } from '../Task/Task'
import styles from './TasksManager.module.css'

export const TasksManager = () => {
  return (
    <div className={styles.taskManager}>
      <div className={styles.headers}>
        <SectionHeader sectionTitle='To-do' dotColour='lightgrey' />
        <SectionHeader sectionTitle='Doing' dotColour='lightblue' />
        <SectionHeader sectionTitle='Review' dotColour='orange' />
        <SectionHeader sectionTitle='Done' dotColour='green' />
      </div>
      <div className={styles.content}>
        <div className={styles.taskWrapper}>
          <Task className={styles.task} task={{}} />
        </div>
        <div className={styles.taskWrapper}>
          <Task className={styles.task} task={{}} />
        </div>
        <div className={styles.taskWrapper}>
          <Task className={styles.task} task={{}} />
        </div>
        <div className={styles.taskWrapper}>
          <Task className={styles.task} task={{}} />
        </div>
      </div>
    </div>
  )
}
