import React, {FC} from 'react';
import styles from './index.module.scss';
import AuthForm from "./AuthForm";


interface IProps {
}

const AuthPage: FC<IProps> = (props) => {


    return (
        <section className={styles.auth}>
            <AuthForm/>
        </section>
    );
}

export default AuthPage;