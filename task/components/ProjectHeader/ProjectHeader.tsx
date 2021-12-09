import React from 'react'
import styles from './ProjectHeader.module.css'
import { FlexWrapper } from '../FlexWrapper/FlexWrapper'
import { AnchorLink } from '../AnchorLink/AnchorLink'
import {MdBackupTable, MdTask, MdInsertDriveFile,  MdCalendarToday  } from 'react-icons/md'
import { UserIdentity } from '../UserIdentity/UserIdentity'

interface Props {
    title?: string,
    author?: string,
    user?: Object,
    date?: string,
    links?: Array<object>
}

export const ProjectHeader = ({}: Props) => {
    return (
        <div className={styles.base}>
            <div className={styles.topBar}>
                <div>
                    <h1>Project Name</h1>
                    <div>
                        <p>0/1/1/ created by @user</p>
                    </div>
                </div>
                <UserIdentity />
            </div>
            <div className={styles.bottomBar}>
                <div className={styles.nav}>
                    <AnchorLink icon={<MdBackupTable className={styles.icon} />} reference='/board/1' linkLabel='Dashboard'/>
                    <AnchorLink icon={<MdTask className={styles.icon} />} reference='/board/tasks' linkLabel='Tasks'/>
                    <AnchorLink icon={<MdInsertDriveFile className={styles.icon}  />} reference='/board/documents' linkLabel='Documents'/>
                    <AnchorLink icon={<MdCalendarToday  className={styles.icon}/>} reference='/board/calendar' linkLabel='Calendar'/>
                </div>
                <div className={styles.tab}>

                </div>
            </div>

        </div>
    )
}