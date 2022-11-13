import React, {FC} from 'react';
import styles from './index.module.scss'
import placeholder from './img/placeholder.svg'

interface IProps {
}

const ChatPlaceholder: FC<IProps> = (props) => {
    return (
        <div className={styles.placeholderChat}>
            <img src={placeholder} alt=""/>
            <h2>Помогаем друг другу и дополнительно зарабатываем!</h2>
            <p>Вы можете помочь своим коллегам обработать запросы их клиентов, если первые не успевают или не на
                связи.</p>
            <p>Работа приосходит также, как с вашим клиентом, но по возвращению коллеги вы прекращаете общение с его
                клиентом.</p>
        </div>
    );
}

export default ChatPlaceholder;