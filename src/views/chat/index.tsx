import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './index.module.scss'
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {getMessagesHistory} from "../../store/chat/chat.actions";
import {IMessage} from "../../types/message";
import {addToMessages} from "../../store/chat/chat.slice";
import ChatBeforePeople from "./ChatBeforePeople";



interface IProps {
}

const ChatPage: FC<IProps> = (props) => {


    const d = useAppDispatch();
    const { user } = useAppSelector( state => state.auth )
    const {dialogId} = useAppSelector(state => state.chat)


    const socket = useRef<WebSocket>();


    useEffect(() => {
        if (!user) return;
        const ws = new WebSocket(`wss://hack.invest-open.ru/chat/v2?jwtToken=${user.jwtToken}`)
        ws.onopen = function (event) {
            socket.current = ws;
        }
        ws.onmessage = function (event){
            const mess : IMessage = JSON.parse(event.data).messageData;
            d(addToMessages(mess))
        }
    }, [user])



    useEffect(() => {
        if (!dialogId) return;
        d(getMessagesHistory({dialogId, older: "FALSE", timestamp: 0, limit: 50}))
    }, [dialogId])
    return (
        <section className={styles.chat}>
            {
                user?.role === "CLIENT" && <ChatBeforePeople/>
            }
            <div className={styles.container}>
                <ChatHeader/>
                <ChatBody/>
                <ChatFooter/>
            </div>
        </section>
    );
}

export default ChatPage;