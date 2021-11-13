import React from 'react'
import s from './Price.module.css'

const Price = ()=>{
    return(
        
        <div className={s.priceWrapper}>

           <div className={s.price}>
                <form className={s.priceForm}>
                    
                <label className={s.priceFormLabel} >Безнал</label>
                <input className={s.priceFormInput} type="number" />
                </form>
                <form className={s.priceForm}>
                <label className={s.priceFormLabel}>Вода</label>
                <input className={s.priceFormInput} type="number" />
                </form>
                <form className={s.priceForm}>
                <label className={s.priceFormLabel}>Персонал</label>
                    <input className={s.priceFormInput} type="number" />
                </form>
                <form className={s.priceForm}>
                <label className={s.priceFormLabel}>Чай</label>
                <input className={s.priceFormInput}  type="number" />
            </form>
            </div> 
            <div className={s.interface}>
                <p className={s.div}>Сумма <span>100</span> ГРН </p>
                <p className={s.div}>Наличка <span>100</span> ГРН</p>
            </div>
            <div className={s.formButton}>
                <button className={s.div}>Save</button>
            </div>
        </div>
    )
}

export default Price