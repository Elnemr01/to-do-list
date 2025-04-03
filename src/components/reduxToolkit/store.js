import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice"

export let store =configureStore({
    reducer :{
        tasks : taskSlice,
    }
})