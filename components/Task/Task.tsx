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
      <div className={styles.functions}>
        <div>
          <ButtonIcon cssClass={styles.fn} onClick={() => []}>
            <MdAddReaction />
          </ButtonIcon>
          <ButtonIcon cssClass={styles.fn} onClick={() => []}>
            <MdThumbUp />
          </ButtonIcon>
          <ButtonIcon cssClass={styles.fn} onClick={() => {}}>
            <MdComment />
          </ButtonIcon>
        </div>
        <div className={styles.open}>
          <ButtonIcon onClick={() => {}} cssClass={styles.fn}>
            <MdArrowForward />
          </ButtonIcon>
        </div>
      </div>
      <div className={styles.reactions}>
        <span>✨</span>
        <span>🤦</span>
        <span>😃</span>
      </div>
    </div>
  )
}
