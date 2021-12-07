import React from 'react';
import styles from './Button.module.css';


interface Props {
    buttonLabel: string | ImageBitmap;
    onClick?: Function;
}
export const ButtonStandard: React.FC<Props> = (props) => {
    return (<button className={styles.base}>{props.buttonLabel}</button>)
}