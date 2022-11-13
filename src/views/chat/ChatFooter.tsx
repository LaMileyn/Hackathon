import React, {FC, useState} from 'react';
import styles from './index.module.scss';
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {sendMessage} from "../../store/chat/chat.actions";
import {IMessageSend} from "../../types/message";

interface IProps {
}

const ChatFooter: FC<IProps> = (props) => {

    const d = useAppDispatch()
    const { messages, dialogId } = useAppSelector( state => state.chat)
    const [text,setText] = useState<string>("")

    const handleSend = () =>{
        if (text.length && dialogId){
            const obj : IMessageSend = {
                message : {
                    text,
                    dialogId,
                    messageType : "TEXT"
                }
            }
            d(sendMessage(obj))
            setText("")
        }
    }

    return (
        <div className={styles.footer}>
            <input type="text" placeholder={"Задайте вопрос"} value={text}
                   onChange={(e) => setText(e.currentTarget.value)}/>
            <div onClick={handleSend} className={styles.btnSend}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0581 7.97508L9.99974 2.91675L4.94141 7.97508" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 17.0834V3.05835" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    );
}

export default ChatFooter;