import React from "react";
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return(
        <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>Vladimir</div>
                    <div className={s.dialog}>Ilon</div>
                    <div className={s.dialog}>Sergey</div>
                    <div className={s.dialog}>Elvira</div>
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