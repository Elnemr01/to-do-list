import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { finishEditTask } from './reduxToolkit/taskSlice';

const EditForm = ({id}) => {

    let [value,setValue]=useState("");
    let todos= useSelector(state => state.tasks);
    let dispatch=useDispatch();

    function handleChange(ev) {
        setValue(ev.target.value);
    }

    function handleSubmit (ev) {
        ev.preventDefault();
        dispatch(finishEditTask(id));
        setValue("");
    }

    return (
        <form className="TodoForm update" onSubmit={(ev)=> handleSubmit(ev)}>
        <input type="text" className='todo-input' placeholder='type your updated task here' onChange={(ev)=> handleChange(ev)}
        value={value}/>
        <button type='submit' className='todo-btn'>add task</button>
    </form>
    )
}

export default EditForm
