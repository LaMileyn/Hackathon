import React, {FC} from 'react';
import {IMessage} from "../../types/message";
import styles from './Message.module.scss';
import cn from 'classnames'
import Avatar from "../Avatar/Avatar";
import MessageCurrency from "./MessageCurrency";
import Wiget from "../Wiget/Wiget";

interface IProps extends React.HTMLProps<HTMLDivElement>{
    message : IMessage,
    messages : IMessage[],
    isOwner : boolean
}

export const getFormattedAMPMDate = (inputDate : string | number) => {
    let date = new Date(inputDate);
    let hours : string | number = date.getHours();
    let minutes : string | number = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes;
    return strTime;
}

const Message: FC<IProps> = (
    { message, messages, isOwner }) => {
    console.log(message)
    return (
        <div className={styles.container}>
            <div className={cn(styles.message, {
                [styles.owner] : isOwner
            })}>
                {
                    message.messageType == "WIDGET" && <Wiget wiget={message}/>
                }
                {
                    message.messageType == "TEXT" && <>
                        { !isOwner && <Avatar />  }
                        <div className={styles.right}>
                            <p>
                                { message.text }
                            </p>
                            <span className={styles.time}>{getFormattedAMPMDate(message.timestamp)}</span>
                        </div>
                    </>
                }

            </div>
        </div>
    );
}

export default Message;