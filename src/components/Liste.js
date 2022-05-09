import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { done, remove, update } from '../redux/todoReducer'
import Card from './Card'

const mapStateToProps = state => {
    return {
        todoList:state 
    }
}
const mapDispatchToProps = dispatch => {
    return{
        removeTodo:id=>dispatch(remove(id)),
        updateTodo:objet=>dispatch(update(objet)),
        doneTodo:id=>dispatch(done(id)),
    }
}
const Liste = ({todoList,removeTodo,updateTodo,doneTodo}) => {
const [filtred,setFiltred] = useState ("active")
  return (
    <div>
   <div>
       <button onClick={()=>setFiltred("all")}>My Liste</button>
       <button onClick={()=>setFiltred("active")}>On Hold</button>
       <button onClick={()=>setFiltred("completed")}>Completed</button>
   </div>
   <ul>
   
    {todoList.length > 0 && filtred==="active" ? todoList.map(el=>{
    return (el.done=== false && 
    <Card doneTodo={doneTodo} removeTodo={removeTodo} updateTodo={updateTodo} key={el.id} todoIteam={el}/>)}):null} 


{todoList.length > 0 && filtred==="completed" ? todoList.map(el=>{
    return (el.done=== true && 
    <Card doneTodo={doneTodo} removeTodo={removeTodo} updateTodo={updateTodo} key={el.id} todoIteam={el}/>)}):null} 


{todoList.length > 0 && filtred==="all" ? todoList.map(el=>{
    return ( 
    <Card doneTodo={doneTodo} removeTodo={removeTodo} updateTodo={updateTodo} key={el.id} todoIteam={el}/>)}):null} 
    </ul>
    </div>

  )
}

export default connect (mapStateToProps, mapDispatchToProps) (Liste)
