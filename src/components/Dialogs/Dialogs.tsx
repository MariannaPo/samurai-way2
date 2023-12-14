import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {MessagesItems} from "./MessagesItems/MessageItems";
import {Message} from "./Message/Message";


export const Dialogs = (props: any) => {

    // let dialogsData = [
    // { id: '1', name: 'Vladimir'},
    // { id: '2', name: 'Ilon'},
    // { id: '3', name: 'Sergey'},
    // {id: '4', name: 'Elvira'},
    // ];
    //
    // let messageData = [
    //     { id: '1', message: 'Будет новый закон'},
    //     { id: '2', message: 'Я уже сделал новую машину'},
    //     { id: '3', message: 'Открываю новую станцию, спишемся позже'},
    //     {id: '4', message: 'Курс не упадет'},
    // ];
    let dialogElements = props.dialogsData.map((dialog: { id: string; name: string; }) => <MessagesItems id={dialog.id} name={dialog.name}/>);
    let messageElement = props.messageData.map((message: { message: string; }) =>  <Message message={message.message}/>);

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