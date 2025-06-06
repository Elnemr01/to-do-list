import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, finishEditTask, updateTask } from './reduxToolkit/taskSlice';

const EditForm = ({id}) => {

    let [value,setValue]=useState("");
    let todos= useSelector(state => state.tasks);
    let dispatch=useDispatch();

    function handleChange(ev) {
        setValue(ev.target.value);
    }

    function handleSubmit (ev) {
        ev.preventDefault();
        dispatch(updateTask({id:id , val: value}))
        dispatch(finishEditTask(id));
        setValue("");
    }

    return (
        <form className="TodoForm update" onSubmit={(ev)=> handleSubmit(ev)}>
        <input type="text" className='todo-input' placeholder='update your task' onChange={(ev)=> handleChange(ev)}
        value={value}/>
        <button type='submit' className='todo-btn'>update</button>
    </form>
    )
}

export default EditForm
