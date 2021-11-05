import React from "react"
import Form from '../form/form'
import s from './FormItemList.module.css';



const FormItemList = (props) =>{
  console.dir(props.props)
 return(
   <ul className={s.forms_list}>{props.props.map(prop => (
    <li  className={s.forms_item} key={prop.name}><Form name={prop.name} col={prop.col}/></li>))}
   </ul>)
 
  

}


export default FormItemList