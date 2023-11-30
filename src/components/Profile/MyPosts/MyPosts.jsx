import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'


export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <textarea></textarea>
            <button>ADD POST</button>
            <button>REMOVE</button>
            <div className={s.posts}>
                <Post message='Hi, how are u?' likeCount={23}/>
                <Post message='Eee my first post' likeCount={45}/>
            </div>
        </div>
    )
}