import React from 'react'
import { Table,Container,Button} from 'react-bootstrap'
import "../sass/cart.scss"
import { useCart } from 'react-use-cart';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    isEmpty,
    cartTotal,
    items,
    emptyCart,
    updateItemQuantity,
    removeItem,
  } = useCart();

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleProceed = () => {
    const isLoggedIn = localStorage.getItem('user');
    window.scrollTo(0, 0)
    if (isLoggedIn) {
      navigate('/chekout');
    } else {
      navigate('/login');
    }
  };
  
  return isEmpty ? <div style={{backgroundColor:"#2B2A31",width:"100%",height:"70vh",textAlign:"center",top:"500px"}}><h2 style={{top:"300px",height:"300px"}}>Your cart is currently empty</h2></div> : (
    <div className='cart-page'>
      <Container className='con-cart'>
      <h1>Cart :</h1>
      <Table bordered  className='cart-table'>
      <thead>
        <tr >
          <th>#</th>
          <th>Photo</th>
          <th>Product name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {items.map((fd,i)=>
          {return <tr>
          <td>{i+1}</td>
          <td><img src={fd.photo} alt="err" width={50}/></td>
          <td>{fd.title}</td>
          <td>{fd.price*fd.quantity}$</td>
          <td>
          <Button className='button1-cart' onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}>-</Button>
          <span className='mx-2'>{fd.quantity}</span>
          <Button className='button2-cart' onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}>+</Button>
          </td>
          <td><Button className='btn-cart1' onClick={() => removeItem(fd.id)}><i class="fa-solid fa-trash"></i></Button></td>
        </tr>}
          )}
        
        
      </tbody>
    </Table>
    <h3 >Total Price:{cartTotal}$</h3>
    <Button className='btn-cart-alldata' onClick={() => {emptyCart()}}>Delete All</Button>
    
     
    <Button variant="danger" className="form-control" onClick={handleProceed}> Buy Now</Button>
      
      
      </Container>
    </div>
  )
}

export default Cart