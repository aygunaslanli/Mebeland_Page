import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import SingleBlog from '../components/SingleBlog'
import "../sass/blogs.scss"



const Blogs = (props) => {
 
  return (

       <>
       <div className='blogs-page'>
       <Container>
      <h1 className='text-center my-5'>Blogs</h1>
        <Row>
          {props.pvalue.map((item,c)=>(
            <SingleBlog title={item.title} desc={item.desc} photo={item.img} key={c} id={item.id} date={item.date} />

          ))}
        </Row>
      </Container>
       </div>
       </>
        
   
  )
}


const mapStateToProps =(state)=>{
  return{
    pvalue:state
  }
}

export default connect(mapStateToProps)(Blogs)