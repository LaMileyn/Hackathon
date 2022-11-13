import {createAsyncThunk} from "@reduxjs/toolkit";
import ChatService from "../../services/chat.service";
import {IMessageSend} from "../../types/message";

export const getDialogId = createAsyncThunk('chat/getDialog', async (_, thunkApi) => {
    const {data} = await ChatService.getDialogId();
    return data
})

export const getMessagesHistory = createAsyncThunk('chat/getMessagesHistory', async (params: {
    dialogId: number, limit?: number,
    timestamp?: number, older?: string
}, thunkApi) => {
    const {limit, older, timestamp, dialogId} = params;
    const res = await ChatService.getMessagesHistory(dialogId, limit, timestamp, older);
    const { data } = res;
    return data
})

export const sendMessage = createAsyncThunk('chat/sendMessage', async (message : IMessageSend, thunkApi) => {
    const {data} = await ChatService.sendMessage(message);
    return data
})
