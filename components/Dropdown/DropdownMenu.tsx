import React from 'react'

interface Props {
    options?: object,
    name: string,
}

export const DropdownMenu = ({name}: Props) => {
    return <select>
        <option>{name}</option>
    </select>
}