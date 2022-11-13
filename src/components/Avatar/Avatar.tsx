import React, {FC} from 'react';
import styles from './Avatar.module.scss';

interface IProps {
    src?: string
}

const Avatar: FC<IProps> = ({src}) => {
    return (
        <div className={styles.avatar}>
            <img src={
                src ? src : "https://www.nbranbergpt.com/wp-content/uploads/user_placeholder_woman.jpg"
            } alt=""/>
        </div>
    );
}

export default Avatar;