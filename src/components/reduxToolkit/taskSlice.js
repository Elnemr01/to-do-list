import { createSlice } from "@reduxjs/toolkit";

let taskSlice = createSlice({
    initialState :[],
    name :"taskSlice",
    reducers :{
        addTask :(state,action)=> {
            state.push(action.payload);
            return state;
        },
        
        markedAsCompleted: (state,action)=> {
            state= state.map((tsk) => {
                if(tsk.id===action.payload) {
                    return {...tsk, completed : true};
                }
                else return tsk
            })
            return state;
        },

        deleteCompetedTask : (state,action) => {
            state=state.filter((tsk)=> tsk.id!==action.payload);
            return state;
        },

        startEditTask: (state,action)=> {
            state=state.map((tsk)=> tsk.id===action.payload ? {...tsk,isEditing:true} : tsk);
            return state;
        },

        finishEditTask: (state,action)=> {
            state=state.map((tsk)=> tsk.id===action.payload ? {...tsk,isEditing:false} : tsk);
            return state;
        }
    }
})

export default taskSlice.reducer;
export let {addTask,markedAsCompleted,deleteCompetedTask,startEditTask,finishEditTask}=taskSlice.actions;