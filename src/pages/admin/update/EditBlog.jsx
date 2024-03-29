import { Button } from 'react-bootstrap'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import BlogForm from '../../../components/BlogForm'
import { editBlog, editBlogFromDatabase, removeBlog, removeBlogFromDatabase } from '../../../myredux/actions/blogaction'

const EditBlog = props => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  return (
    <>
    <h1 className='text-center my-5'>Edit Blog</h1>
        <BlogForm editblog={props.pvalue}
        onFormSubmit={fd=>{
            dispatch(editBlogFromDatabase(props.pvalue.id,fd))
            navigate('/admin')
        }}
        />
        <Button variant='danger' onClick={()=>{
            dispatch(removeBlogFromDatabase(props.pvalue.id))
            navigate('/admin')

        }}>Del</Button>
    </>
  )
}

const MapStateToProps=(state)=>{
    const link = window.location.pathname.slice(6,99);
    return({
        pvalue:state.find((p)=>p.id === link)
    })
}
export default connect(MapStateToProps)(EditBlog);