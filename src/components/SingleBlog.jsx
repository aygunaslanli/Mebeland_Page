import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "../sass/singleblog.scss"

const SingleBlog = ({title,photo,desc,id,date}) => {
  return (
    <Col sm={12} md={4}>
      <Card className="single-blog">
        <Card.Img height={300} variant="top" className="card-img-blog" src={photo} />
        <Card.Body className="card-body-blog">
          <Card.Title className="card-title-blog">{title}</Card.Title>
          <Card.Text className="card-date-blog">
           {date}
          </Card.Text>
          <Card.Text className="card-text-blog">
           {desc.substring(0,99)}..
          </Card.Text>
          <Link
  variant="warning"
  className="blog-btn"
  to={`/blogs/${id}`}
  onClick={() => {
    window.scrollTo(0, 0);
  }}
>
  READ MORE
</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBlog;