import React, { SyntheticEvent } from 'react'
import { FlexWrapper } from '../FlexWrapper/FlexWrapper'
import styles from './SearchBar.module.css'
import { MdSearch, MdFilterList, MdPostAdd } from 'react-icons/md'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'

interface Props {
  addItem: string
}

export const SearchBar = ({ addItem }: Props) => {
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
        {addItem}
      </ButtonIcon>
    </FlexWrapper>
  )
}
