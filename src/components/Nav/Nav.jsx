import React from "react";
import s from'./Nav.module.css'
import { NavLink } from "react-router-dom";

export const Nav = ()=> {
    return(
        <nav className={s.nav}>
        <div className={`${s.items} ${s.active}`}><NavLink to="/profile">Profile</NavLink></div>
        <div className={s.items}><NavLink to="/messages">Messages</NavLink></div>
        <div className={s.items}><NavLink to="/news">News</NavLink></div>
        <div className={s.items}><NavLink to="/music">Music</NavLink></div>
        <div className={s.items}><NavLink to="/settings">Settings</NavLink></div>
      </nav>
    )
}