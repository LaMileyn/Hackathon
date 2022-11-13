import React, {FC} from 'react';
import {IMessage} from "../../types/message";
import Test from "../Test/Test";
import MessageCurrency from "../Message/MessageCurrency";


interface IProps {
    wiget : IMessage;
}

const Wiget: FC<IProps> = ({ wiget }) => {

    const type = JSON.parse(wiget.data!).type;

    if (type === "test") return <Test />
    if (type === "currency") return <MessageCurrency message={wiget}/>
    return <></>
}

export default Wiget;