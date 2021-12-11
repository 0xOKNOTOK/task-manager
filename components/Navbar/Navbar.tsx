import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { AnchorLink } from '../AnchorLink/AnchorLink'
import {
  MdPeopleAlt,
  MdSpaceDashboard,
  MdChat,
  MdArticle,
  MdPayments,
  MdAccountBox,
  MdSettingsApplications,
  MdLogout,
  MdMenu,
  MdClose
} from 'react-icons/md'

import { ButtonIcon } from '../ButtonIcon/ButtonIcon'
import { Button } from '../Button/Button'

export const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true)

  const toggleNavBar = (event: any) => {
    event.preventDefault()
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <nav className={isNavExpanded ? styles.nav : styles.closedNav}>
      <div className={styles.brand}>
        <h1 className={isNavExpanded ? 'brandH1' : styles.closedBrand}>
          <span className={styles.arrow}>{`> `}</span>
          task
        </h1>
        {isNavExpanded ? (
          <ButtonIcon cssClass={styles.btn} onClick={toggleNavBar}>
            {<MdClose />}
          </ButtonIcon>
        ) : (
          <ButtonIcon cssClass={styles.closedNavToggle} onClick={toggleNavBar}>
            {<MdMenu />}
          </ButtonIcon>
        )}
      </div>
      <ul className={isNavExpanded ? styles.ul : styles.closedUl}>
        <li className={styles.li}>
          <AnchorLink
            icon={<MdPeopleAlt className={styles.svg} />}
            reference='/teams'
            linkLabel='Teams'
          />
        </li>
        <li className={styles.li}>
          <AnchorLink
            icon={<MdSpaceDashboard className={styles.svg} />}
            reference='/boards'
            linkLabel='Boards'
          />
        </li>
        <li className={styles.li}>
          <AnchorLink
            icon={<MdChat className={styles.svg} />}
            reference='/chats'
            linkLabel='Chats'
          />
        </li>
        <li className={styles.li}>
          <AnchorLink
            icon={<MdArticle className={styles.svg} />}
            reference='/timetable'
            linkLabel='Timetable'
          />
        </li>
      </ul>
      <ul className={isNavExpanded ? styles.ul : styles.closedUl}>
        <li className={styles.li}>
          <AnchorLink
            icon={<MdPayments className={styles.svg} />}
            reference='/plans'
            linkLabel='Plans'
          />
        </li>
        <li className={styles.li}>
          <AnchorLink
            icon={<MdAccountBox className={styles.svg} />}
            reference='/account'
            linkLabel='Account'
          />
        </li>
        <li className={styles.li}>
          <AnchorLink
            icon={<MdSettingsApplications className={styles.svg} />}
            reference='/settings'
            linkLabel='Settings'
          />
        </li>
      </ul>
      <span></span>
      <ul className={isNavExpanded ? styles.ul : styles.closedUl}>
        <li className={styles.li}>
          <AnchorLink
            icon={<MdLogout className={styles.svg} />}
            reference='/logout'
            linkLabel='Log out'
          />
        </li>
      </ul>
    </nav>
  )
}
