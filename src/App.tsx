import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import AuthPage from "./views/auth";
import './assets/styles/main.scss'
import ChatPage from "./views/chat";
import {RequireAuth} from "./utils/hocs/requireAuth";
import MainLayout from "./components/MainLayout/MainLayout";
import {useAppSelector} from "./utils/hooks";


const App = () => {

    const dialogId = useAppSelector( state => state.chat.dialogId )

    return (
        <div className="App">
            <Routes>
                <Route path="/auth" element={<AuthPage/>}/>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Navigate to={`chat/${dialogId}`}/>}/>
                    <Route path="chat/:id" element={
                        <RequireAuth>
                            <ChatPage/>
                        </RequireAuth>
                    }/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
