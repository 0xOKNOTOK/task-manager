import react from "react"
import styles from './Header.module.css'



interface Props {
    project: Object,
}

export const Header = ({project}: Props) => {
    return <header className={styles.base}>
    </header>
}