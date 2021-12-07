import React from 'react';
import styles from './Comment.module.css';

interface Props {
    comment?: Comment
}

interface Comment {
    content: string,
    author: string,
    likes: number,
    replies: Array<object>,
    reactions: Array<object>
}

export const Comment: React.FC<Props> = ({}) => {
    return <div className={styles.base}>

    </div>
}