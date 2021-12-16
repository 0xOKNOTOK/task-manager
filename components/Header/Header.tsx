import react from 'react'
import styles from './Header.module.css'

interface Props {
  className: string
  children: React.ReactNode
}

export const Header = ({ children, className }: Props) => {
  return <header className={className}>{children}</header>
}
