import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './reduxToolkit/taskSlice';
import { v4 as uuidv4 } from 'uuid';

const ToDoForm = () => {
    let [value,setValue]=useState("");
    let todos= useSelector(state => state.tasks);
    let dispatch=useDispatch();

    function handleChange(ev) {
        setValue(ev.target.value);
    }

    function handleSubmit (ev) {
        ev.preventDefault();
        dispatch(addTask({
            id: uuidv4(),
            task:value,
            completed: false,
            isEditing:false,
        }));
        setValue("");
    }

    // console.log(todos);


    return (
        <form className="TodoForm" onSubmit={(ev)=> handleSubmit(ev)}>
            <input type="text" className='todo-input' required placeholder='what is the tasks today ?' onChange={(ev)=> handleChange(ev)}
            value={value}/>
            <button type='submit' className='todo-btn'>add task</button>
        </form>
    )
}

export default ToDoForm
