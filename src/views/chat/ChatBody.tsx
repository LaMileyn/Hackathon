import React, {FC, useEffect, useRef} from 'react';
import styles from './index.module.scss'
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import Message from "../../components/Message/Message";
import Controlls from "../../components/Controlls/Controlls";
import {useParams} from "react-router-dom";
import ChatPlaceholder from "./ChatPlaceholder";


interface IProps {
}

const messages = [
    {
        "dialogId": 1,
        "text": "Привет всем участникам Hack & Change!",
        "messageType": "WIDGET",
        "data": "{\"widget\":\"custom data\"}",
        "mediaUrl": "https://cdn-icons-png.flaticon.com/512/945/945244.png"
    },

]
const ChatBody: FC<IProps> = (props) => {

    const d = useAppDispatch();
    const {messages} = useAppSelector(state => state.chat)
    const {user} = useAppSelector(state => state.auth)
    const scrollRef = useRef<HTMLDivElement>(null)
    const {id} = useParams()

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"})
    }, [messages,id])

    return (
        <div className={styles.body}>
            <div className={styles.messages}>
                {id === "placeholder"
                    ? <ChatPlaceholder/>
                    : messages && messages?.map(mess => (
                    <div ref={scrollRef}>
                        <Message isOwner={user!.userId == mess.sender}
                                 key={mess.messageId} message={mess}
                                 messages={messages}/>
                    </div>

                ))
                }
            </div>
            <Controlls/>
        </div>
    );
}

export default ChatBody;