import React from 'react'
import styles from './Navbar.module.css'
import { AnchorLink } from '../AnchorLink/AnchorLink'


export const Navbar = () => {
    return <nav className={styles.base}>
        <h1>{`> task`}</h1>
        <ul>
            <li>
                <AnchorLink reference='/teams' linkLabel='Teams'/>
            </li>
            <li>
                <AnchorLink reference='/boards' linkLabel='Boards' />
            </li>
            <li>
                <AnchorLink reference='/chats' linkLabel='Chats' />
            </li>
            <li>
                <AnchorLink reference='/timetable' linkLabel='Timetable' />
            </li>
         </ul>
         <ul>
            <li>
                <AnchorLink reference='/plans' linkLabel='Plans' />
            </li>
            <li>
                <AnchorLink reference='/account' linkLabel='Account' />
            </li>
            <li>
                <AnchorLink reference='/settings' linkLabel='Settings' />
            </li>
         </ul>
         <span>
             BLANK
         </span>
         <ul>
             <AnchorLink reference='/logout' linkLabel='Log out' />
         </ul>
         
    </nav>
}