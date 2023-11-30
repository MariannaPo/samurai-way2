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

    let dialogsData = [
    { id: '1', name: 'Vladimir'},
    { id: '2', name: 'Ilon'},
    { id: '3', name: 'Sergey'},
    {id: '4', name: 'Elvira'},
    ];

    let messageData = [
        { id: '1', message: 'Будет новый закон'},
        { id: '2', message: 'Я уже сделал новую машину'},
        { id: '3', message: 'Открываю новую станцию, спишемся позже'},
        {id: '4', message: 'Курс не упадет'},
    ];
    let dialogElements = dialogsData.map((dialog)=> <MessagesItems id={dialog.id} name={dialog.name}/>);
    let messageElement = messageData.map((message)=>  <Message message={message.message}/>);

    return(
        <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
            <div className={s.messages}>
                    {messageElement}
            </div>
        </div>
    )
}