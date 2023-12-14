import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = (props) => {
    // let postMessageData = [
    //     {id: '1', postMessage: 'Hi, how are u?', likesCount: 27},
    //     {id: '2', postMessage: 'Eee my first post', likesCount: 54},
    // ];
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postMessageData={props.state.postMessageData}/>
        </div>
    )
}