import React, {FC, FormEvent, useEffect, useState} from 'react';
import styles from './index.module.scss';
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {Navigate, useNavigate} from "react-router-dom";
import {login} from "../../store/auth/auth.actions";
import {getDialogId} from "../../store/chat/chat.actions";

interface IProps {
}

const AuthForm: FC<IProps> = (props) => {

    const d = useAppDispatch()
    const navigate = useNavigate()
    const user = useAppSelector(state => state.auth.user)

    const [password, setPassword] = useState<string>("fd1e10797e2f4d36127e6d7b929322a91de8b350b42ed8696b67ecca6eeec4e3")
    const [userLogin, setUserLogin] = useState<string>("romania")


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (password.length && userLogin.length) {
            await d(login({
                password,
                login: userLogin
            }))
            const res = await d(getDialogId())
            if (res.meta.requestStatus === "fulfilled"){
                navigate(`/chat/${(res.payload as { dialogId : number }).dialogId}`)
            }

        }
    }

    if (user) return <Navigate to={"/"}/>
    return (
        <div className={styles.container}>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={"Введите логин"} value={userLogin}
                       onChange={(e) => setUserLogin(e.currentTarget.value)}/>
                <input type="password" placeholder="Введите пароль" value={password}
                       onChange={(e) => setPassword(e.currentTarget.value)}/>
                <button className={styles.form__forgot} type={"button"}>Забыли пароль</button>
                <button className={styles.form__submit} type="submit">Продолжить</button>
            </form>
        </div>

    );
}

export default AuthForm;