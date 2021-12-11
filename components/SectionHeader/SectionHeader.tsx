import React from 'react'
import styles from './SectionHeader.module.css'

interface Props {
  sectionTitle: string
  dotColour: string
}

export const SectionHeader = ({ sectionTitle, dotColour }: Props) => {
  return (
    <div className={styles.singleHeader}>
      <h3>{sectionTitle}</h3>
      <div
        className={styles.progressDot}
        style={{ backgroundColor: dotColour }}
      />
    </div>
  )
}
