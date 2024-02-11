import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

export const AppContent = () => {
 const todoList = useSelector(state=> state.todo.todoList);
 const sortedTodoList = [...todoList];

 const filterStatus = useSelector((state)=>
 state.todo.filterStatus
 );

 const filteredTodoList = sortedTodoList.filter(item=>{
  if(filterStatus === 'all'){
    return true;
  }
  return item.status === filterStatus;
 });

 sortedTodoList.sort((a,b)=>new Date(b.time)-new Date(a.time));
  return (
    <div>
       {
        // sortedTodoList && sortedTodoList.length>0?
        
        //   sortedTodoList.map((todo)=> <TodoItem key={todo.id} todo={todo} />)
        
        // :'List unavailable'
      }  

{
        filteredTodoList && filteredTodoList.length>0?
        
        filteredTodoList.map((todo)=> <TodoItem key={todo.id} todo={todo} />)
        
        :'List unavailable'
      }
      
    </div>
  )
}

//[0, 1, 2].map(i => {return i + 1})
