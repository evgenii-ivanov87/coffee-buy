import React from "react"
import s from './form.module.css';



const Form = ({name, col, value}) =>{
  
 return(
   <form className={s.forms_input}>
      <label className={s.forms_label}>{name}</label> 
      <p className={s.forms_col}>Попереднє значення:</p>
         <p className={s.forms_col}>{col}</p>
         <input className={s.forms_input}/>
         <button className={s.forms_button} >Save</button>
   </form>)
 
  

}


export default Form