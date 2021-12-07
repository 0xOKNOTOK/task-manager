import React from 'react';
import styles from './Button.module.css';


interface Props {
    buttonLabel: string;
}
export const ButtonStandard: React.FC<Props> = (props) => {
    return (<button className={styles.btn}>{props.buttonLabel}</button>)
}