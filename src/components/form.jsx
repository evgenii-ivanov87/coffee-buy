import React from "react"

 

const Form = ()=>{
    const coffee = [{
        name: 1,
        col: 0,
        },
        {
        name: 2,
        col: 1,
         },{
                name: 3,
                col: 2,
                },{
                    name: 4,
                    col: 3,
                    },{
                        name: 5,
                        col: 4,
                        },{
                            name: 6,
                            col: 5,
                            }];
 return(
     <form> 
         this.coffee.map(e)
         <label>{coffee.name}</label> 
         <input />
         </form>
)   

}


export default Form