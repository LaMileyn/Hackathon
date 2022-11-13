export interface IMessageSend {
    message : {
        dialogId : number,
        text : string,
        messageType : string,
        data? : string,
        mediaUrl? : string
    }
}
export interface IMessage {
    messageId : string,
    text : string,
    data : string | null,
    messageType : MessageTypes,
    sender : number,
    recipient : number,
    dialogId : number,
    timestamp : number

}

export type MessageTypes = "TEXT" | "WIDGET" | "MEDIA"