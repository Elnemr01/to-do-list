import React, { useEffect, useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
import { useSelector } from 'react-redux'
import EditForm from './EditForm'


const ToDoWrapper = () => {
    let [tasks,setTasks]=useState([]);
    let todos=useSelector(state=>state.tasks);
    // console.log(todos);

    useEffect(()=>{
        setTasks(todos);
        // console.log(todos);
    },[todos]);

    
    return (
        <div className='TodoWrapper'>
            <h1>get the tasks be done</h1>
            <ToDoForm/>
            {tasks.map((tsk,i)=> {
                if(tsk.isEditing) return <EditForm key={i} id={tsk.id}/>
                else return <ToDo key={i} task={tsk}/>
            })}
        </div>
    )
}

export default ToDoWrapper
