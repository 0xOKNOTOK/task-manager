import React from 'react'
import { FlexWrapper } from '../FlexWrapper/FlexWrapper'
import styles from './Task.module.css'

interface Props {
  task: Task
  className: string
}

interface Task {
  // TODO change to required once data can be provided.
  title?: string
  image?: string
  comments?: Array<object> // TODO format of comments depends on the implementation on the backend.
}

export const Task = ({ task, className }: Props) => {
  return (
    <div className={className}>
      <h4>Task</h4>
      <p>
        blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblX
      </p>
      <span></span>
    </div>
  )
}
