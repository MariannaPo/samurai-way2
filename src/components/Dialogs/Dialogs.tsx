import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const MessagesItems = (props: { id: string; name: string }) => {
    let path = '/messages/' + props.id;
    return(
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: {message: string}) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
    return(
        <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <MessagesItems id='1' name='Vladimir'/>
                    <MessagesItems id='2' name='Ilon'/>
                   <MessagesItems id='3' name='Sergey'/>
                    <MessagesItems id='4' name='Elvira'/>
                </div>
            <div className={s.messages}>
                <Message message=" Будет новый закон"/>
                <Message message="Я уже сделал новую машину"/>
                <Message message="Открываю новую станцию, спишемся позже"/>
                <Message message="Курс не упадет"/>
            </div>
        </div>
    )
}