import React, {FC} from 'react';
import styles from './Controls.module.scss';
import Control from "./Control";
import CurrencyService from "../../services/currency.service";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {addToMessages} from "../../store/chat/chat.slice";
import ChatService from "../../services/chat.service";


interface IProps {
}
export interface IControl{
    text : string,
    onClick : () => void;
}



const Controls: FC<IProps> = (props) => {

    const d = useAppDispatch();
    const dialogId = useAppSelector( state => state.chat.dialogId)

    const controls : IControl[] = [
        { text : "Полезная статья", onClick : getTest },
        { text : "Риск-тест", onClick : getTest },
        { text : "Текущий курс валют", onClick : getCurrentValute },
    ]
    async function getCurrentValute(){

        const { data } = await CurrencyService.getCurrentCurrency();
        const stringfData = {
            type : "currency",
            data,
        }
        const { data : res } = await ChatService.sendMessage({
            message : {
                messageType : "WIDGET",
                data : JSON.stringify(stringfData),
                dialogId: dialogId!,
                text : "HFGHFG"
            }
        })
    }
    async function getTest(){
        console.log("finciton")
        const stringfData = {
            type : "test",
            data : {}
        }
        await ChatService.sendMessage({
            message : {
                messageType : "WIDGET",
                data : JSON.stringify(stringfData),
                dialogId: dialogId!,
                text : "HFGHFG"
            }
        })
    }
    return (
        <div className={styles.controls}>
            {
                controls.map( (control,index) => (
                    <Control key={index} control={control}/>
                ))
            }
        </div>
    );
}

export default Controls;