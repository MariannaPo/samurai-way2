import React from "react";
import './Nav.css'

export const Nav = ()=> {
    return(
        <nav className='nav'>
        <div className="items"><a>Profile</a></div>
        <div className="items"><a>Messages</a></div>
        <div className="items"><a>News</a></div>
        <div className="items"><a>Music</a></div>
        <div className="items"><a>Settings</a></div>
      </nav>
    )
}