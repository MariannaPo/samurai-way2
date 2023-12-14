import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let postMessageData = [
    {id: '1', postMessage: 'Hi, how are u?', likesCount: 27},
    {id: '2', postMessage: 'Eee my first post', likesCount: 54},
];
let dialogsData = [
    { id: '1', name: 'Vladimir'},
    { id: '2', name: 'Ilon'},
    { id: '3', name: 'Sergey'},
    {id: '4', name: 'Elvira'},
];

let messageData = [
    { id: '1', message: 'Будет новый закон'},
    { id: '2', message: 'Я уже сделал новую машину'},
    { id: '3', message: 'Открываю новую станцию, спишемся позже'},
    {id: '4', message: 'Курс не упадет'},
];
root.render(
  <React.StrictMode>
    <App postMessageData={postMessageData} dialogsData={dialogsData} messageData={messageData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
