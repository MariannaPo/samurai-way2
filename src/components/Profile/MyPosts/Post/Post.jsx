import React from "react";
import s from './Post.module.css'


export const Post =(props)=>{

    return(
        <div>
         
        <div className={s.items}>
        <img src='https://static.mk.ru/upload/entities/2022/05/21/08/articles/detailPicture/40/81/35/64/5c87906a425717ea86b2041a8aaeb273.jpg' alt="lada"/>
           {props.message}</div>
            <span>{props.likeCount} LIKE</span>
        </div>
    )
}