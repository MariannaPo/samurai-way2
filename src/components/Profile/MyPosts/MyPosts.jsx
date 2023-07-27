import React from "react";
import s from './MyPosts.module.css'
import { Post } from "./Post/Post";

export const MyPosts =()=>{
    return(
        <div>
        <div>new post</div>
        <textarea></textarea>
        <button>ADD POST</button>
        <button>REMOVE</button>
        <Post/>
        <Post/>
        </div>
    )
}