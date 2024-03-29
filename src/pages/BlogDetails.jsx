import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container,Card,Row,Col } from 'react-bootstrap';
import "../sass/blogdetails.scss"


const BlogDetails = () => {
    const { id } = useParams();
    const blogs = useSelector(state => state); 
    const blog = blogs.find(blog => blog.id === id);
  
    return (
        <>
        <div className="blogdetails-page">
        <Container className="con-blogdetails">
        <Row>
        <Col sm={12} md={6}>
        <Card className="card1-blogdetails">
      <Card.Body className='blogdetails-body'>
        <Card.Title className="blog1-title">{blog.title}</Card.Title>
        <Card.Text>
         {blog.date}
        </Card.Text>
        <Card.Text>
         {blog.desc}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col sm={12} md={6}>
    <Card className="card2-blogdetails">
      <Card.Img variant="top" src={blog.img} />
    </Card>
    </Col>
    
    </Row>
        </Container>
        
        </div>
        </>
    );
  };

export default BlogDetails;