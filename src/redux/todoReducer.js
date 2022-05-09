import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoReducer = createSlice ({
    name : "todoList",
    initialState,
    reducers: {
        add:(state,action)=>{
            return[...state,action.payload]
        },
        remove:(state,action)=>{
            return state.filter(el=>el.id!==action.payload.id)
        },
    update:(state,action) => {
        return state.map(el=>{
            if (el.id===action.payload.id){
                return {
                    ...el,
                    iteam:action.payload.iteam
                }
            
            }
            return el;
        })

         },
       done:(state,action) => {
        return state.map(el=>{
            if (el.id===action.payload.id){
                return {
                    ...el,
                    done:true
                }
            }
            return el 
        })
       } 
        }

}) 
 export const {add,remove,update,done} = todoReducer.actions;
 export const reducer = todoReducer.reducer