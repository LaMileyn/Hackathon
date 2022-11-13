import React, {FC, useEffect} from 'react';
import styles from './index.module.scss'
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {getDialogId} from "../../store/chat/chat.actions";


interface IProps {
}

const HomePage: FC<IProps> = (props) => {

    const dialogId = useAppSelector( state => state.chat.dialogId)
    const d = useAppDispatch();

    useEffect(() => {
        d(getDialogId())
    }, [d])

    return (
        <section className={styles.home}>
            <h1>Home Page</h1>
            {dialogId && <Link to={`chat/${dialogId}`}>
                Go to chat
            </Link>}

        </section>
    );
}

export default HomePage;