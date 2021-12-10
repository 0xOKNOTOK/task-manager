import React, { SyntheticEvent } from 'react'
import { FlexWrapper } from '../FlexWrapper/FlexWrapper'
import styles from './SearchBar.module.css'
import { MdSearch, MdFilterList, MdPostAdd } from 'react-icons/md'
import { Button } from '../Button/Button'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'

export const SearchBar = () => {
  const handleFilterButtonPress = (event: SyntheticEvent) => {
    event.preventDefault()
  }

  const handleNewTaskButtonPress = (event: SyntheticEvent) => {
    event.preventDefault()
  }
  return (
    <FlexWrapper className={styles.flexWrapper}>
      <div className={styles.search}>
        <MdSearch className={styles.searchIcon} />
        <input type='search' placeholder='Search' name='taskSearch' id='task' />
      </div>

      <ButtonIcon
        icon={<MdFilterList />}
        onClick={handleFilterButtonPress}
        cssClass={styles.filterBtn}
      >
        Filter
      </ButtonIcon>
      <ButtonIcon
        icon={<MdPostAdd />}
        onClick={handleNewTaskButtonPress}
        cssClass={styles.newTask}
      >
        New Task
      </ButtonIcon>
    </FlexWrapper>
  )
}
