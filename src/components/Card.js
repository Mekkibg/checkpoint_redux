import React from 'react'
import { useRef } from 'react'

const Card = ({todoIteam, removeTodo,updateTodo,doneTodo}) => {
    const inputRef = useRef (true)
    const changeFocus= () => {
        inputRef.current.disabled=false;
        inputRef.current.focus()
    }
    const updateOver = (id,value,e) => {
        if (e.key === "Enter")
        {updateTodo({id,iteam:value});
    inputRef.current.disabled=true
    }    
    }
  return (
    <li>
    <textarea defaultValue={todoIteam.iteam} ref={inputRef} disabled={inputRef} onKeyPress={(e)=>updateOver(todoIteam.id,inputRef.current.value,e)}/>
    <div>
    <button onClick={()=>changeFocus()}>Edit</button>
    {todoIteam.done===false && <button onClick={()=>doneTodo({id:todoIteam.id})}>Done</button>}
    <button onClick={()=>removeTodo({id:todoIteam.id})}>Delete</button>
    </div>
    {todoIteam.done===true && <span>Done</span>}
    </li>
  )
}

export default Card
