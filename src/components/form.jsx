import React from "react"


const Form = ({props}) =>{
 
    
 return(
    <ul className="">
      {props.map(prop => (
        <li className="" key={prop.name}>
          <form> 
         <label>{prop.name}</label> 
         <input />
         </form>
        </li>
      ))}
    </ul>
  );
 
  

}


export default Form