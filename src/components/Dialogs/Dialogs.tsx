import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return(
        <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        <NavLink to='/messages/1'>Vladimir</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/messages/2'>Ilon</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/messages/3'>Sergey</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/messages/4'>Elvira</NavLink>
                    </div>
                </div>
            <div className={s.messages}>
                <div className={s.message}>Будет новый закон</div>
                <div className={s.message}>Я уже сделал новую машину</div>
                <div className={s.message}>Открываю новую станцию, спишемся позже</div>
                <div className={s.message}>Курс не упадет</div>
            </div>
        </div>
    )
}