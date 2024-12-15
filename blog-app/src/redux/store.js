import {configureStore} from "@reduxjs/toolkit"
import blogsReducer from "./features/blogs/blogSlice"

export const store = configureStore({
    reducer:{
        blogs:blogsReducer
    },
})