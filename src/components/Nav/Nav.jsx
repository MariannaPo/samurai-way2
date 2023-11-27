import React from "react";
import s from'./Nav.module.css'

export const Nav = ()=> {
    return(
        <nav className={s.nav}>
        <div className={`${s.items} ${s.active}`}><a href="/profile">Profile</a></div>
        <div className={s.items}><a href="/messages">Messages</a></div>
        <div className={s.items}><a href="/news">News</a></div>
        <div className={s.items}><a href="/music">Music</a></div>
        <div className={s.items}><a href="/settings">Settings</a></div>
      </nav>
    )
}