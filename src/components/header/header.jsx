import React from 'react'
import s from './header.module.css'

const Header = ()=>{
    return(
        <nav className={s.nav}>
            <ul className={s.nav_list}>
                <li className={s.nav_item}><a href="/" className={s.nav_link}>КУМ1</a></li>
                <li className={s.nav_item}><a href="/" className={s.nav_link}>КУМ2</a></li>
                <li className={s.nav_item}><a href="/" className={s.nav_link}>КУМ3</a></li>
                <li className={s.nav_item}><a href="/" className={s.nav_link}>КУМ4</a></li>
            </ul>
        </nav>
    )
}

export default Header