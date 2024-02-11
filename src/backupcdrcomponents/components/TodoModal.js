import React, { useEffect, useState } from 'react'
import Button from './Button'
import { addTodo, updateTodo } from '../../slices/todoSlice';
import {v4 as uuidv4} from 'uuid';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const TodoModal = ({type,modalOpen,setModalOpen,todo}) => {

  const [title,setTitle] = useState('');
  const [status,setStatus] = useState('Incomplete');

const dispatch = useDispatch(); 

useEffect(()=>{
  if(type === 'update' && todo){
    setTitle(todo.title);
    setStatus(todo.status);
  }else{
    setTitle('');
    setStatus('Incomplete');
  }
},[todo,type,modalOpen]);

  function handleSubmit(e){
    e.preventDefault();
    if(title === ''){
      toast.error("Enter title");
      return;
    }
    console.log({title,status});
     if(title && status){
      if(type === 'add'){
       dispatch(addTodo({
           id:uuidv4(),
           title,
           status,
           time: new Date().toLocaleString()
       }));
      toast.success('Task Added Successfully.');
      
      }
      if(type === 'update'){
        
        if(todo.title !== title || todo.status !== status){
          console.log('updating');
          dispatch(updateTodo({...todo,title,status}))
        }else
      toast.error('no changes');
      
      }
   }else{
    toast.error('Title should not be empty.');
   }
   setModalOpen(false);  

  }
  return (
    <div>
    {modalOpen && (
      <form onSubmit={(e)=>handleSubmit(e)}>
      <div>
        <label htmlFor="title">
          Title
          <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </label>

      <label htmlFor='status'>
        status
        <select name='status' id='status' value={status} onChange={(e)=>setStatus(e.target.value)}>
          <option>Complete</option>
          <option>Incomplete</option>
        </select>
      </label>
      <label>
        <Button type="submit">{type === 'update'?'Update':'Add'} Task</Button>
        <Button onClick={()=>setModalOpen(false)} onKeyDown={()=>setModalOpen(false)}>Cancel</Button>
      </label>
    </div>
    </form>
    )    
    }       
    </div>

  )
}

export default TodoModal