import React, {FC} from 'react';
import styles from './index.module.scss';
import Avatar from "../../components/Avatar/Avatar";
import cn from "classnames";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../utils/hooks";

interface IProps {
}

const ChatBeforePeople: FC<IProps> = (props) => {

    const dialogId = useAppSelector(state => state.chat.dialogId)
    return (
        <div className={styles.containerBeforePeople}>
            <ul className={styles.people}>
                <li className={styles.person}>
                    <Link to={`/chat/${dialogId}`}>
                        <Avatar/>
                    </Link>
                </li>
                <li className={styles.person}>
                    <Link to={`/chat/${dialogId}`}>
                        <Avatar/>
                    </Link>
                </li>
                <li className={styles.person}>
                    <Link to={`/chat/${dialogId}`}>
                        <Avatar/>
                    </Link>
                </li>
                <li className={cn(styles.person, styles.active)}>
                    <Link to={`/chat/${dialogId}`}>
                        <Avatar/>
                    </Link>
                </li>
                <li className={styles.person}>
                    <Link to={`/chat/${dialogId}`}>
                        <Avatar/>
                    </Link>
                </li>
                <li className={styles.person}>
                    <Link to={`/chat/${dialogId}`}>
                        <Avatar/>
                    </Link>
                </li>
                <li className={styles.person}>
                    <Link to={`/chat/${dialogId}`}>
                        <Avatar/>
                    </Link>
                </li>
                <li className={styles.personExtra}>
                    <Link to={`/chat/placeholder`}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.4002 24.9317C14.6302 25.9583 13.3701 25.9583 12.6001 24.9317L10.8501 22.5983C10.6518 22.3417 10.2318 22.1317 9.91683 22.1317H9.3335C4.66683 22.1317 2.3335 20.965 2.3335 15.1317V9.29834C2.3335 4.63167 4.66683 2.29834 9.3335 2.29834H18.6668C23.3335 2.29834 25.6668 4.63167 25.6668 9.29834V15.1317"
                                stroke="#3AB6EC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round"/>
                            <path
                                d="M21.2333 24.9667C23.2952 24.9667 24.9667 23.2952 24.9667 21.2333C24.9667 19.1715 23.2952 17.5 21.2333 17.5C19.1715 17.5 17.5 19.1715 17.5 21.2333C17.5 23.2952 19.1715 24.9667 21.2333 24.9667Z"
                                stroke="#3AB6EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M25.6667 25.6667L24.5 24.5" stroke="#3AB6EC" stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M18.6624 12.8333H18.6729" stroke="#3AB6EC" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M13.9949 12.8333H14.0054" stroke="#3AB6EC" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M9.32693 12.8333H9.3374" stroke="#3AB6EC" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default ChatBeforePeople;