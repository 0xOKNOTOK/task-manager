import React from 'react'
import styles from './ProjectCard.module.css'

interface Props {
  project?: Project
}

interface Project {
  title?: string
  author?: string
  members?: Array<object>
  description?: string
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.base}>
      <h3>{project?.title}</h3>
      <p>{project?.description}</p>
    </div>
  )
}

export default ProjectCard
