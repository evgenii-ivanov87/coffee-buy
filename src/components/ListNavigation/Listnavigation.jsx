import React from 'react'
import s from './Listnavigation.module.css'

const Listnavigation = ()=>{
    return(
        
            <ul className={s.nav_spec}>
                <li className={s.nav_item}><button className={s.nav_button}>Счетичики</button></li>
                <li className={s.nav_item}><button className={s.nav_button}>Заказ</button></li>
                <li className={s.nav_item}><button className={s.nav_button}>Закладка кофе и цена</button></li>
                <li className={s.nav_item}><button className={s.nav_button}>Остаки</button></li>
                <li className={s.nav_item}><button className={s.nav_button}>Настройка</button></li>
            </ul>
        
    )
}

export default Listnavigation