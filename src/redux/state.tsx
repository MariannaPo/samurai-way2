import { rerenderEntireTree } from "../render";


export let state = {
    profilePage: {
        postMessageData: [
            {id: '1', postMessage: 'Hi, how are u?', likesCount: 27},
            {id: '2', postMessage: 'Eee my first post', likesCount: 54},
        ],
        
    },
    dialogsPage: {
        dialogsData: [
            { id: '1', name: 'Vladimir'},
            { id: '2', name: 'Ilon'},
            { id: '3', name: 'Sergey'},
            {id: '4', name: 'Elvira'},
        ],
        messageData:  [
            { id: '1', message: 'Будет новый закон'},
            { id: '2', message: 'Я уже сделал новую машину'},
            { id: '3', message: 'Открываю новую станцию, спишемся позже'},
            { id: '4', message: 'Курс не упадет'},
        ],
    },
}

export let addPost = (postMessageOne: string)=>{
    let newPost = {
        id: '5',
        postMessage: postMessageOne,
        likesCount: 0
    };
state.profilePage.postMessageData.push(newPost)
rerenderEntireTree(state);
}