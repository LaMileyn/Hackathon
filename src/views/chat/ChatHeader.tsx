import React, {FC} from 'react';
import styles from './index.module.scss'
import {useAppSelector} from "../../utils/hooks";

interface IProps {
}

const ChatHeader: FC<IProps> = (props) => {


    const user = useAppSelector(state => state.auth.user)
    return (
        <div className={styles.header}>
            <h2>
                {user?.role === "CLIENT"
                    ? "Мой брокер"
                    : "Даниил Лупаревич"
                }
            </h2>
        </div>
    );
}

export default ChatHeader;