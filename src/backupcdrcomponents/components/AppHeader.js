import React from 'react'
import Button,{SelectButton} from './Button'
import TodoModal from './TodoModal'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFilterStatus } from '../../slices/todoSlice'

 

const AppHeader = () => {

  const [modalOpen,setModalOpen]= useState(false);
  const filterStatus = useSelector((state)=>
  state.todo.filterStatus
  );
  // const initialFilterStatus = useSelector((state)=>
  //   state.todo.filterStatus
  // );
  //const [filterStatus,setFilterStatus] = useState(initialFilterStatus);
  const dispath = useDispatch();
  // const addTask = ()=>{
  //   setModalOpen(true);
  //   console.log("modalOpen is "+modalOpen);
  // };

  const updateFilter=(e)=>{
    // filterStatus(e.target.value);
    dispath(updateFilterStatus(e.target.value));
  };
  
     return (
      
      <div>
          <p>Hello from Header</p>
          <Button onClick={()=> setModalOpen(true)}>Add task</Button>
            <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
              <option value="all">All</option>
              <option value="Completed">Complete</option>
              <option value="Incomplete">Incomplete</option>
            </SelectButton>
            <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen}/>          
    </div>
  
    
  )
  
}

export default AppHeader