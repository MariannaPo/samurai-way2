import React from "react";
import s from './Profile.module.css';
import { MyPosts } from "./MyPosts/MyPosts";


export const Profile =()=>{
    return(
        <div className={s.content}>
        <div><img src='https://s0.rbk.ru/v6_top_pics/media/img/8/17/346838786205178.jpg'/></div>
         <MyPosts/>
        </div>
    )
}