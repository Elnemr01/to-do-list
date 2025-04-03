import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCompetedTask, startEditTask, markedAsCompleted } from './reduxToolkit/taskSlice'

const ToDo = ({task}) => {
    let dispatch=useDispatch();
    
    return (
        <div className='Todo'>
            <p className={`${task.completed ? 'completed' : ''}`}
            onClick={()=> dispatch(markedAsCompleted(task.id))}>{task.task}</p>
            <div>
                <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} onClick={()=> dispatch(startEditTask(task.id))}/>
                <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={()=> dispatch(deleteCompetedTask(task.id))}/>
            </div>
        </div>
    )
}

export default ToDo
