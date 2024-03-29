import { useContext } from "react";
import { useParams } from "react-router-dom"
import { ProductContext } from "../context/ProductContext";
import "../sass/productdetails.scss"
import { Col,Card,Button,Row } from "react-bootstrap";
import {Container} from "react-bootstrap";
import { useCart } from "react-use-cart";


const ProductDetails = ({ photo, title, price, alldata, id }) => {
  const {addItem}=useCart();
    const [product,setProduct] = useContext(ProductContext)
    const {url} = useParams();
    const productitems = product.find(p=>p.id === url);
  return (
    <>
        <div className="productdetails-page">
        <Container className="con-productdetails">
        <Row>
        <Col sm={12} md={6}>
        <Card className="card1-productdetails">
      <Card.Body className="card1-body-productdetails">
        <Card.Title className="product-title">{productitems.title}</Card.Title>
        <Card.Text>
          <span className="staricon"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
          <span className="ms-2">(1 customer review)</span>
        </Card.Text>
        <Card.Text className="card-desc">
         {productitems.desc}
         
        </Card.Text>
        <Card.Text className="card-price">
        {productitems.price}$
        </Card.Text>
        <Button className='button-productdetails' onClick={()=>{addItem()}}>
      Add to Cart
    </Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm={12} md={6}>
    <Card className="card2-productdetails">
      <Card.Img className="card2-productdetails-img" variant="top" src={productitems.photo} />
      <Card.Body className="cardbody-productdetails">
        
        <Card.Text className="cardtext-productdetails d-flex">
         <span className="ms-3">Share </span>
         <div className="card-text-icons d-flex">
          <span className="icon-productdetails"><i class="fa-brands fa-facebook"></i></span>
          <span className="icon-productdetails"><i class="fa-brands fa-linkedin"></i></span>
          <span className="icon-productdetails"><i class="fa-brands fa-telegram"></i></span>
          <span className="icon-productdetails"><i class="fa-brands fa-twitter"></i></span>
          <span className="icon-productdetails"><i class="fa-brands fa-pinterest"></i></span>
         </div>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    
    </Row>
        </Container>
        
        </div>
        </>

  )
}

export default ProductDetails
