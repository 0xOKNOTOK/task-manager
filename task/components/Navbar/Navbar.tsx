import React from 'react'
import styles from './Navbar.module.css'
import { AnchorLink } from '../AnchorLink/AnchorLink'
import {MdPeopleAlt, MdSpaceDashboard, MdChat, MdArticle, MdPayments, MdAccountBox, MdSettingsApplications, MdOutlineLogout, MdPeople, MdLogout } from 'react-icons/md';

export const Navbar = () => {
    return <nav className={styles.nav}>
        <h1><span className={styles.arrow}>{`> `}</span>task</h1>
        <ul className={styles.ul}>
            <li className={styles.li}>
                <AnchorLink icon={<MdPeopleAlt className={styles.svg}/>} reference='/teams' linkLabel='Teams'/>
            </li>
            <li className={styles.li}>
                <AnchorLink icon={<MdSpaceDashboard className={styles.svg}/>} reference='/boards' linkLabel='Boards' />
            </li>
            <li className={styles.li}>
                <AnchorLink icon={<MdChat className={styles.svg}/>} reference='/chats' linkLabel='Chats' />
            </li>
            <li className={styles.li}>
                <AnchorLink icon={<MdArticle className={styles.svg}/>} reference='/timetable' linkLabel='Timetable' />
            </li>
         </ul>
         <ul className={styles.ul}>
            <li className={styles.li}>
                <AnchorLink icon={<MdPayments className={styles.svg}/>} reference='/plans' linkLabel='Plans' />
            </li>
            <li className={styles.li}>
                <AnchorLink icon={<MdAccountBox className={styles.svg}/>} reference='/account' linkLabel='Account' />
            </li>
            <li className={styles.li}>
                <AnchorLink icon={<MdSettingsApplications className={styles.svg} />} reference='/settings' linkLabel='Settings' />
            </li>
         </ul>
        <span>
        </span>
        <span>
        </span>
        <span>
        </span>
        <span>
        </span>
         <ul className={styles.ul}>
             <li className={styles.li}>
             <AnchorLink icon={<MdLogout className={styles.svg}/>} reference='/logout' linkLabel='Log out' />
             </li>
         </ul>
         
    </nav>
}