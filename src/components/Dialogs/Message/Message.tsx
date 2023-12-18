import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";



export const Message = (props: {message: string}) => {
    return(
        <div>
            <div className={s.message}>{props.message}</div>
    </div>


    )
}