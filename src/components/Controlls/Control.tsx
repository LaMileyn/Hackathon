import React, {FC} from 'react';
import styles from './Controls.module.scss';
import {IControl} from "./Controlls";

interface IProps {
    control : IControl;
}

const Control: FC<IProps> = ({ control }) => {
    return (
        <button className={styles.control} onClick={ () => control.onClick()}>
            {control.text}
        </button>
    );
}

export default Control;