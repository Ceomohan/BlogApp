import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { fetchBlogs } from '../../redux/features/blogs/blogSlice'
import Cards from './Cards'

const PostCards = () => {
    const dispatch = useDispatch()
    const {blogs,isError,isLoading,error} = useSelector(state=>state.blogs)

    // dispatch actions to get blogs

    useEffect(()=>{
        dispatch(fetchBlogs())

    },[dispatch])
   // console.log(blogs )
    return (
        <div className="w-full lg:w-2/3">
            {
                !isError && !isLoading && blogs?.length > 0 ? (<div>
                    {
                        blogs.map((blog,index)=>(
                            <Cards key={index} blog={blog} />
                        ))
                    }
                </div>): <div>No Blog Data</div>
            }
           
            

           

        </div>
    )
}

export default PostCards