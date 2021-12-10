import React from 'react'
import styles from './UserIdentity.module.css'
import { MdExpandMore } from 'react-icons/md'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'

export const UserIdentity = () => {
  return (
    <div className={styles.user}>
      <span></span>
      <div>
        <h3>Username</h3>
        <p>Senior Dev</p>
      </div>
      <ButtonIcon cssClass={styles.btn} onClick={() => 1}>
        <MdExpandMore />
      </ButtonIcon>
    </div>
  )
}
