import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const MessagesItems = (props: { id: string; name: string }) => {
    let path = '/messages/' + props.id;
    return(
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
