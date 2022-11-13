import React, {FC} from 'react';
import styles from './Sidebar.module.scss';

interface IProps {
}

const Sidebar: FC<IProps> = (props) => {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.block}>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.1395 14.91C14.0579 14.8983 13.9529 14.8983 13.8595 14.91C11.8062 14.84 10.1729 13.16 10.1729 11.095C10.1729 8.98331 11.8762 7.26831 13.9995 7.26831C16.1112 7.26831 17.8262 8.98331 17.8262 11.095C17.8145 13.16 16.1929 14.84 14.1395 14.91Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M21.8634 22.61C19.7867 24.5117 17.0334 25.6667 14.0001 25.6667C10.9667 25.6667 8.21339 24.5117 6.13672 22.61C6.25339 21.5133 6.95339 20.44 8.20172 19.6C11.3984 17.4767 16.6251 17.4767 19.7984 19.6C21.0467 20.44 21.7467 21.5133 21.8634 22.61Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M14.0002 25.6666C20.4435 25.6666 25.6668 20.4433 25.6668 14C25.6668 7.55666 20.4435 2.33331 14.0002 2.33331C7.55684 2.33331 2.3335 7.55666 2.3335 14C2.3335 20.4433 7.55684 25.6666 14.0002 25.6666Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Профиль
                </li>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.1395 14.91C14.0579 14.8983 13.9529 14.8983 13.8595 14.91C11.8062 14.84 10.1729 13.16 10.1729 11.095C10.1729 8.98331 11.8762 7.26831 13.9995 7.26831C16.1112 7.26831 17.8262 8.98331 17.8262 11.095C17.8145 13.16 16.1929 14.84 14.1395 14.91Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M21.8634 22.61C19.7867 24.5117 17.0334 25.6667 14.0001 25.6667C10.9667 25.6667 8.21339 24.5117 6.13672 22.61C6.25339 21.5133 6.95339 20.44 8.20172 19.6C11.3984 17.4767 16.6251 17.4767 19.7984 19.6C21.0467 20.44 21.7467 21.5133 21.8634 22.61Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M14.0002 25.6666C20.4435 25.6666 25.6668 20.4433 25.6668 14C25.6668 7.55666 20.4435 2.33331 14.0002 2.33331C7.55684 2.33331 2.3335 7.55666 2.3335 14C2.3335 20.4433 7.55684 25.6666 14.0002 25.6666Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Уведомления
                </li>
            </ul>
            <ul className={styles.block}>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.1395 14.91C14.0579 14.8983 13.9529 14.8983 13.8595 14.91C11.8062 14.84 10.1729 13.16 10.1729 11.095C10.1729 8.98331 11.8762 7.26831 13.9995 7.26831C16.1112 7.26831 17.8262 8.98331 17.8262 11.095C17.8145 13.16 16.1929 14.84 14.1395 14.91Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M21.8634 22.61C19.7867 24.5117 17.0334 25.6667 14.0001 25.6667C10.9667 25.6667 8.21339 24.5117 6.13672 22.61C6.25339 21.5133 6.95339 20.44 8.20172 19.6C11.3984 17.4767 16.6251 17.4767 19.7984 19.6C21.0467 20.44 21.7467 21.5133 21.8634 22.61Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M14.0002 25.6666C20.4435 25.6666 25.6668 20.4433 25.6668 14C25.6668 7.55666 20.4435 2.33331 14.0002 2.33331C7.55684 2.33331 2.3335 7.55666 2.3335 14C2.3335 20.4433 7.55684 25.6666 14.0002 25.6666Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Главная
                </li>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.1395 14.91C14.0579 14.8983 13.9529 14.8983 13.8595 14.91C11.8062 14.84 10.1729 13.16 10.1729 11.095C10.1729 8.98331 11.8762 7.26831 13.9995 7.26831C16.1112 7.26831 17.8262 8.98331 17.8262 11.095C17.8145 13.16 16.1929 14.84 14.1395 14.91Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M21.8634 22.61C19.7867 24.5117 17.0334 25.6667 14.0001 25.6667C10.9667 25.6667 8.21339 24.5117 6.13672 22.61C6.25339 21.5133 6.95339 20.44 8.20172 19.6C11.3984 17.4767 16.6251 17.4767 19.7984 19.6C21.0467 20.44 21.7467 21.5133 21.8634 22.61Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M14.0002 25.6666C20.4435 25.6666 25.6668 20.4433 25.6668 14C25.6668 7.55666 20.4435 2.33331 14.0002 2.33331C7.55684 2.33331 2.3335 7.55666 2.3335 14C2.3335 20.4433 7.55684 25.6666 14.0002 25.6666Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Каталог
                </li>
                <li className={styles.active}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.1395 14.91C14.0579 14.8983 13.9529 14.8983 13.8595 14.91C11.8062 14.84 10.1729 13.16 10.1729 11.095C10.1729 8.98331 11.8762 7.26831 13.9995 7.26831C16.1112 7.26831 17.8262 8.98331 17.8262 11.095C17.8145 13.16 16.1929 14.84 14.1395 14.91Z"
                            stroke="var(--color-brand-light)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M21.8634 22.61C19.7867 24.5117 17.0334 25.6667 14.0001 25.6667C10.9667 25.6667 8.21339 24.5117 6.13672 22.61C6.25339 21.5133 6.95339 20.44 8.20172 19.6C11.3984 17.4767 16.6251 17.4767 19.7984 19.6C21.0467 20.44 21.7467 21.5133 21.8634 22.61Z"
                            stroke="var(--color-brand-light)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M14.0002 25.6666C20.4435 25.6666 25.6668 20.4433 25.6668 14C25.6668 7.55666 20.4435 2.33331 14.0002 2.33331C7.55684 2.33331 2.3335 7.55666 2.3335 14C2.3335 20.4433 7.55684 25.6666 14.0002 25.6666Z"
                            stroke="var(--color-brand-light)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Мой Брокер
                </li>
            </ul>
            <ul className={styles.block}>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.1395 14.91C14.0579 14.8983 13.9529 14.8983 13.8595 14.91C11.8062 14.84 10.1729 13.16 10.1729 11.095C10.1729 8.98331 11.8762 7.26831 13.9995 7.26831C16.1112 7.26831 17.8262 8.98331 17.8262 11.095C17.8145 13.16 16.1929 14.84 14.1395 14.91Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M21.8634 22.61C19.7867 24.5117 17.0334 25.6667 14.0001 25.6667C10.9667 25.6667 8.21339 24.5117 6.13672 22.61C6.25339 21.5133 6.95339 20.44 8.20172 19.6C11.3984 17.4767 16.6251 17.4767 19.7984 19.6C21.0467 20.44 21.7467 21.5133 21.8634 22.61Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M14.0002 25.6666C20.4435 25.6666 25.6668 20.4433 25.6668 14C25.6668 7.55666 20.4435 2.33331 14.0002 2.33331C7.55684 2.33331 2.3335 7.55666 2.3335 14C2.3335 20.4433 7.55684 25.6666 14.0002 25.6666Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Приложения
                </li>
            </ul>
            <ul className={styles.block}>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.1395 14.91C14.0579 14.8983 13.9529 14.8983 13.8595 14.91C11.8062 14.84 10.1729 13.16 10.1729 11.095C10.1729 8.98331 11.8762 7.26831 13.9995 7.26831C16.1112 7.26831 17.8262 8.98331 17.8262 11.095C17.8145 13.16 16.1929 14.84 14.1395 14.91Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M21.8634 22.61C19.7867 24.5117 17.0334 25.6667 14.0001 25.6667C10.9667 25.6667 8.21339 24.5117 6.13672 22.61C6.25339 21.5133 6.95339 20.44 8.20172 19.6C11.3984 17.4767 16.6251 17.4767 19.7984 19.6C21.0467 20.44 21.7467 21.5133 21.8634 22.61Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M14.0002 25.6666C20.4435 25.6666 25.6668 20.4433 25.6668 14C25.6668 7.55666 20.4435 2.33331 14.0002 2.33331C7.55684 2.33331 2.3335 7.55666 2.3335 14C2.3335 20.4433 7.55684 25.6666 14.0002 25.6666Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Обучение
                </li>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.1395 14.91C14.0579 14.8983 13.9529 14.8983 13.8595 14.91C11.8062 14.84 10.1729 13.16 10.1729 11.095C10.1729 8.98331 11.8762 7.26831 13.9995 7.26831C16.1112 7.26831 17.8262 8.98331 17.8262 11.095C17.8145 13.16 16.1929 14.84 14.1395 14.91Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M21.8634 22.61C19.7867 24.5117 17.0334 25.6667 14.0001 25.6667C10.9667 25.6667 8.21339 24.5117 6.13672 22.61C6.25339 21.5133 6.95339 20.44 8.20172 19.6C11.3984 17.4767 16.6251 17.4767 19.7984 19.6C21.0467 20.44 21.7467 21.5133 21.8634 22.61Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M14.0002 25.6666C20.4435 25.6666 25.6668 20.4433 25.6668 14C25.6668 7.55666 20.4435 2.33331 14.0002 2.33331C7.55684 2.33331 2.3335 7.55666 2.3335 14C2.3335 20.4433 7.55684 25.6666 14.0002 25.6666Z"
                            stroke="#28282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Помощь
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;