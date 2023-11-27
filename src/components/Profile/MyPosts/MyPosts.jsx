import React from "react";
import { Post } from "./Post/Post";



export const MyPosts =()=>{
    return(
        <div>
        <div>new post</div>
        <textarea></textarea>
        <button>ADD POST</button>
        <button>REMOVE</button>
        <Post message='Hi, how are u?' likeCount = {23}/>
        <Post message='Eee my first post' likeCount = {45}/>
        </div>
    )
}