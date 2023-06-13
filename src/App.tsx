import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Month/>
    </div>
  );
}

const Header=()=>{
  return(
    <div>
      <a href='#'>Page </a>
      <a href='#'>News </a>
      <a href='#'>Music</a>
    </div>
  )
}

const Month=()=>{
  return(
    <div>
      <ul>
        <li>June</li>
        <li>Jule</li>
        <li>Augest</li>
      </ul>
     </div>
  )
}
export default App;
