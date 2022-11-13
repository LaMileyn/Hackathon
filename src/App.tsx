import React from 'react';
import {Routes, Route} from "react-router-dom";
import AuthPage from "./views/auth";
import './assets/styles/main.scss'
import ChatPage from "./views/chat";
import {RequireAuth} from "./utils/hocs/requireAuth";
import MainLayout from "./components/MainLayout/MainLayout";


const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/auth" element={<AuthPage/>}/>
                <Route path="/" element={<MainLayout/>}>
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
