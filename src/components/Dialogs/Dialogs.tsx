import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {MessagesItems} from "./MessagesItems/MessageItems";
import {Message} from "./Message/Message";


export const Dialogs = (props: any) => {

    let dialogElements = props.state.dialogsData.map((dialog: { id: string; name: string; }) => <MessagesItems id={dialog.id} name={dialog.name}/>);
    let messageElement = props.state.messageData.map((message: { message: string; }) =>  <Message message={message.message}/>);

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