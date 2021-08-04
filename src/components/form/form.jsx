import React from "react"
import s from './form.module.css';


const Form = ({props}) =>{
 
    
 return(
    <ul className={s.forms_list}>
      {props.map(prop => (
        <li className={s.forms_item} key={prop.name}>
         
         <label className={s.forms_input}>{prop.name}</label> 
         <input />
       
        </li>
      ))}
    </ul>
  );
 
  

}


export default Form