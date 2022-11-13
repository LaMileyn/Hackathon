import React, {FC} from 'react';
import styles from './Message.module.scss';
import {IMessage} from "../../types/message";
import {ICurrency} from "../../types/currency";

interface IProps {
    message: IMessage;
}

const MessageCurrency: FC<IProps> = ({message}) => {
    const currencyData: ICurrency = JSON.parse(message.data!).data;
    const valutes = [currencyData.Valute["USD"], currencyData.Valute["EUR"]]

    console.log(message)
    return (
        <div className={styles.currency}>
            <div className={styles.header}>
                <h4>Курс валют</h4>
                <button>Все курсы</button>
            </div>
            <div className={styles.body}>
                <div className={styles.grid}>
                    <div></div>
                    <span>Купить</span>
                    <span>Продать</span>
                </div>
                {
                    valutes.map(valute => (
                        <div className={styles.grid} key={valute.ID}>
                            <div className={styles.currencyPhoto}>
                                {valute.CharCode}
                            </div>
                            <div>{valute.Value}₽</div>
                            <div>{valute.Value + 1}₽</div>
                        </div>
                    ))
                }
            </div>
            <button className={styles.exchange}>Обменять валюту</button>
        </div>
    );
}

export default MessageCurrency;