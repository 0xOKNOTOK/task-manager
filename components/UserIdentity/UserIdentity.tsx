import React from 'react'
import styles from './UserIdentity.module.css'
import { MdExpandMore } from 'react-icons/md'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'

export const UserIdentity = ({ user }: any) => {
  console.log('Hi', user.uid)
  return user ? (
    <div className={styles.user}>
      <span></span>
      <div>
        <h3>{user[0]}</h3>
        <p>Senior Dev</p>
      </div>
      <ButtonIcon cssClass={styles.btn} onClick={() => 1}>
        <MdExpandMore />
      </ButtonIcon>
    </div>
  ) : (
    <div> Loading </div>
  )
}
