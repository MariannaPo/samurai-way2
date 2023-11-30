import React from "react";
import s from './ProfileInfo.module.css'



export const ProfileInfo = () => {
    return (
        <div>
           <div>LADA-LAND</div>
            <div><img src='https://s0.rbk.ru/v6_top_pics/media/img/8/17/346838786205178.jpg' alt="tip"/></div>
            <div className={s.avaDescription}>Description</div>
        </div>
    )
}