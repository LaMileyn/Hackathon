import React, {FC} from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import styles from './MainLayout.module.scss';
import ChatBeforePeople from "../../views/chat/ChatBeforePeople";
import {useAppSelector} from "../../utils/hooks";

interface IProps {
}

const MainLayout: FC<IProps> = (props) => {


    return (
        <div className={styles.layout}>
            <Sidebar/>
            <Outlet />
        </div>
    );
}

export default MainLayout;