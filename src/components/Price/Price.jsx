import React from 'react'
import s from './Price.module.css'

const Price = ()=>{
    return(
        
        <div className={}>

           <div className={}>
               <form className={}>
                <label className={} >Безнал</label>
                <input type="number" />
                </form >
            <form className={}>
                <label className={}>Вода</label>
                <input type="number" />
            </form>
            <form className={}>
                <label className={}>Персонал</label>
                <input type="number" />
            </form>
            <form className={}>
                <label className={}>Чай</label>
                <input type="number" />
            </form>
            </div> 
            <div className={}>
                <p className={}>Сумма</p>
                <p className={}>Наличка</p>
            </div>
            <div className={}>
                <button className={}>Save</button>
            </div>
        </div>
    )
}

export default Price