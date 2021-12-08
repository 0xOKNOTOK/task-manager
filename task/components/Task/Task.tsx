import React from 'react'
import { FlexWrapper } from '../FlexWrapper/FlexWrapper'


interface Props { 
    task: Task
}


interface Task { // TODO change to required once data can be provided.
    title?: string,
    image?: string,
    comments?: Array<object>, // TODO format of comments depends on the implementation on the backend.

}

export const Task = ({}: Props) => {
    return <FlexWrapper> 
        <h1></h1>
        <p></p>
        <span></span>
    </FlexWrapper>
}