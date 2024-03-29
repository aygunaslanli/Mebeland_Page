import React from 'react'
import { connect, useDispatch } from 'react-redux'
import BlogForm from '../../../components/BlogForm'
import {  addBlogToDatabase, } from '../../../myredux/actions/blogaction'
import { useNavigate } from 'react-router-dom'

const AddBlog = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <h1 className='text-center my-5'>Add Blog</h1>
      <BlogForm onFormSubmit={fd=>{
        dispatch(addBlogToDatabase(fd));
        navigate('/admin')
        
      }}  />
    </>
  )
}

export default connect()(AddBlog)