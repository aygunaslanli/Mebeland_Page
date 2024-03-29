import React from "react";
import { useCart } from "react-use-cart";
import { Card,Col,Button } from "react-bootstrap";
import "../sass/productchekout.scss"
import "../sass/_producthomemedia.scss"


function Productchekout (props) {
  const {addItem} =useCart();
  return (
    <Col sm={12} md={3}>
    <Card className='chek-cards'>
    <Card.Img className="chek-cards-img" variant="top" src={props.photo} />
    <Card.Body className='card-body-chek'>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.price}
      </Card.Text>
      <Button  className='btn-cart-chek' onClick={()=>{addItem(props.alldata)}}>Add to cart</Button>
    </Card.Body>
  </Card>
  </Col>
  );
}

export default Productchekout