import React, { useEffect, useState } from 'react'
import {format} from 'date-fns'
import {MdDelete,MdEdit} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../../slices/todoSlice'
import toast from 'react-hot-toast'
import TodoModal from './TodoModal'
import CheckButton from './CheckButton'

const TodoItem = ({todo}) => {

  const dispatch = useDispatch();
  const [updateModalOpen,setUpdateModalOpen] = useState(false);
  const [checked,setChecked] = useState(false);
    const handleDelete=()=>{
        //console.log("handle delete ",todo.id);
        dispatch(deleteTodo(todo.id));
        toast.success('Todo deleted successfully.');
    }

    const handleEdit=()=>{
        console.log("handle edit");
        setUpdateModalOpen(true);
    }

    const handleCheck=()=>{
      setChecked(!checked);
      dispatch(updateTodo({
        ...todo,
        status: checked ? 'Incomplete':'Completed',
      }));
    };

    useEffect(()=>{
      if(todo.status === 'Completed')
        setChecked(true);
      else
        setChecked(false);
    },[todo.status]);
  return (
    <div>
        <CheckButton checked={checked} 
        //setChecked={setChecked}
        handleCheck={handleCheck}/>
        <p>{todo.title}</p> 
        <p>{format(new Date(todo.time),'p,mm/dd/yyyy')}</p>
        <p>{todo.status}</p>
        <MdDelete onClick={handleDelete} role='button' tabIndex={0}/>
        <MdEdit onClick={handleEdit}/>
        <TodoModal type="update" todo={todo} modalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen}/>
    </div>
  )
}

export default TodoItem