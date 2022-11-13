import $api from "./index";
import {IMessage, IMessageSend} from "../types/message";

class ChatService {
    getDialogId(){
        return $api.get<{ dialogId : number }>(`chat/dialog`,{
            headers : {
                Authorization : `Bearer ${window.localStorage.getItem("token")}`
            }
        })
    }
    getMessagesHistory(
        dialogId : number, limit? : number,
        timestamp? : number, older? : string){
        return $api.get<{ messages : IMessage[] }>(`chat/history
            ?dialogId=${dialogId}&limit=${limit}&timestamp=${timestamp}&older=${older}`,{
                headers : {
                    Authorization : `Bearer ${window.localStorage.getItem("token")}`
                }
            }
        )
    }
    sendMessage(message : IMessageSend){
        return $api.post<string>(`message/send`, message,{
            headers : {
                Authorization : `Bearer ${window.localStorage.getItem("token")}`
            }
        })
    }
}

export default new ChatService();