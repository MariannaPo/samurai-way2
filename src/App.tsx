import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';


function App(props: any) {

  return (
    <div className='app-wrapper'>
     <Header/>
     <Nav/>
     <div className='app-wrapper-content'>
      <Route path='/messages' render={()=><Dialogs state={props.state.dialogsPage}/>}/>
      <Route path='/profile' render={()=><Profile state={props.state.profilePage}/>}/>
      <Route path='/news' render={()=><News/>}/>
      <Route path='/music' render={()=><Music/>}/>
      <Route path='/settings' render={()=><Settings/>}/>
       </div>
    </div>
  );
}

export default App;








