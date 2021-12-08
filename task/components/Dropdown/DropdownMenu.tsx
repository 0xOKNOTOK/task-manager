import React from 'react'

interface Props {
    options?: object,
    name: string,
}

export const DropdownMenu = (props: Props) => {
    return <select>
        <option>{props.name}</option>
    </select>
}