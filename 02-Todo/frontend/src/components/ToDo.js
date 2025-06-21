 import React from 'react'
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
 
 const ToDo = ({text,updateMode,deleteToDo}) => {
   return (
     <div className='todo'>
        <div className='text'>{text}</div>
        <BiEdit className='edit' onClick={updateMode}/>
        <AiFillDelete className="icon" onClick={deleteToDo}/>

     </div>
   )
 }
 
 export default ToDo