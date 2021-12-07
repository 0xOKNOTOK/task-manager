import React from 'react'

interface Props {
    options?: object,
    name: string,
}

export const DropdownMenu: React.FC<Props> = (props) => {
    return <select>
        <option>{props.name}</option>
    </select>
}