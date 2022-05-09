import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { add } from '../redux/todoReducer'


const mapStateToProps=state => {
    return{
        todoList:state,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addTodo:(objet) => dispatch(add(objet)) 
    }
}
const Add = ({addTodo}) => {
   const [todoIteam,setTodoIteam]= useState ("");
   const handelChange = (e) => {
    const newIteam= e.target.value;
    setTodoIteam(newIteam)
   }
   const handelClick = () => {
       if (todoIteam===""){
           alert ("Ecrire quelque chose !")
       } else {
           addTodo ({
               id:Math.random(),
               iteam : todoIteam,
               done : false
           })
        setTodoIteam('')
       }
   }
  return (
    <div>
      <input type="text" value={todoIteam} onChange={(e)=>handelChange(e)} />
      <button onClick={()=>handelClick()} type='button'>Add</button>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps) (Add)
