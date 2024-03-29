import React from "react";
import { useCart } from "react-use-cart";
import { Card,Col,Button } from "react-bootstrap";
import "../sass/producthome.scss"
import "../sass/_producthomemedia.scss"


function Producthome (props) {
  const {addItem} =useCart();
  return (
    <Col sm={12} md={3}>
    <Card className='hpg-cards'>
    <Card.Img className="hpg-cards-img" variant="top" src={props.photo} />
    <Card.Body className='card-body-hpg'>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.price}
      </Card.Text>
      <Button  className='btn-cart-hpg' onClick={()=>{addItem(props.alldata)}}>Add to cart</Button>
    </Card.Body>
  </Card>
  </Col>
  );
}

export default Producthome