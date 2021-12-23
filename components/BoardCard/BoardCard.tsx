import React from 'react'
import styles from './BoardCard.module.css'

interface Props {
  board?: Board
}

interface Board {
  title?: string
  taskNumber: number | string
}

const BoardCard = (props: Props) => {
  return <div className={styles.base}></div>
}
