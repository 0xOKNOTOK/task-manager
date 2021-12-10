import React, { SyntheticEvent } from 'react'
import { FlexWrapper } from '../FlexWrapper/FlexWrapper'
import styles from './SearchBar.module.css'
import { MdSearch, MdFilterList, MdPostAdd, MdFilter } from 'react-icons/md'
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
    <FlexWrapper>
      <MdSearch />
      <input type='search' name='taskSearch' id='task' />
      <ButtonIcon
        icon={<MdFilter />}
        onClick={handleFilterButtonPress}
        cssClass='filter'
      >
        Filter
      </ButtonIcon>
      <ButtonIcon
        icon={<MdPostAdd />}
        onClick={handleNewTaskButtonPress}
        cssClass='newtask'
      >
        New Task
      </ButtonIcon>
    </FlexWrapper>
  )
}
