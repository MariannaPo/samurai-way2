import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'


export const MyPosts = (props) => {

    // let postMessageData = [
    //     {id: '1', postMessage: 'Hi, how are u?', likesCount: 27},
    //     {id: '2', postMessage: 'Eee my first post', likesCount: 54},
    // ];
    let postElements = props.postMessageData.map((post)=><Post message={post.postMessage} likeCount={post.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <textarea></textarea>
            <button>ADD POST</button>
            <button>REMOVE</button>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}