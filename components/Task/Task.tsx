import React from 'react'
import styles from './Task.module.css'
import {
  MdAddReaction,
  MdThumbUp,
  MdComment,
  MdArrowForward
} from 'react-icons/md'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'

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
      <div className={styles.reactions}>
        <div>
          <ButtonIcon cssClass={styles.reaction} onClick={() => []}>
            <MdAddReaction />
          </ButtonIcon>
          <ButtonIcon cssClass={styles.reaction} onClick={() => []}>
            <MdThumbUp />
          </ButtonIcon>
          <ButtonIcon cssClass={styles.reaction} onClick={() => {}}>
            <MdComment />
          </ButtonIcon>
        </div>
        <div className={styles.open}>
          <ButtonIcon onClick={() => {}} cssClass={styles.reaction}>
            <MdArrowForward />
          </ButtonIcon>
        </div>
      </div>
    </div>
  )
}
