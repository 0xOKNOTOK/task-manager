import React from 'react'
import { MdAddReaction, MdThumbUp, MdComment } from 'react-icons/md'

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
      <h4>Fix bugs agh!</h4>
      <p>Someone ate my lunch today!</p>
      <MdAddReaction /> <MdThumbUp /> <MdComment />
    </div>
  )
}
