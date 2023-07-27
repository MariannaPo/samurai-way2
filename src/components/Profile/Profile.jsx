import React from "react";
import s from './Profile.module.css'

export const Profile =()=>{
    return(
        <div className={s.content}>
        <div><img src='https://s0.rbk.ru/v6_top_pics/media/img/8/17/346838786205178.jpg'/></div>
        <div><img src='https://static.mk.ru/upload/entities/2022/05/21/08/articles/detailPicture/40/81/35/64/5c87906a425717ea86b2041a8aaeb273.jpg'/> </div>
        <div>post</div>
        <div>new post</div>
        <div className={s.items}>post 1 </div>
        <div className={s.items}>post 2</div>
        </div>
    )
}