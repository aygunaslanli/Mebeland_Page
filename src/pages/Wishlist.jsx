import React from 'react'
import { Table,Container,Button} from 'react-bootstrap'
import "../sass/wishlist.scss"
import { useWishlist } from 'react-use-wishlist';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Wishlist = () => {
  const notify = () =>
  toast.success('Product added to Cart!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  const {addItem}=useCart()
  const {
    emptyWishlist,
    items,
    removeWishlistItem}=useWishlist()
  
  return  (
    <div className='wishlist-page'>
      <Container className='con-wishlist'>
      <h1>Wishlist</h1>
      <Table bordered  className='wishlist-table'>
      <thead>
        <tr >
          <th>#</th>
          <th>Photo</th>
          <th>Product name</th>
          <th>Price</th>
          <th>Add to Cart</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        
    
{items.map((fd,i)=>(
  
  <tr key={fd.id} >
  <td>{i + 1}</td>
  <td><img src={fd.photo} alt="err" width={50} /></td>
  <td>{fd.title}</td>
  <td>{fd.price}$</td>
  <td>
    <Button className='button-wish' onClick={()=>{ notify(addItem(fd));}}>
      Add to cart
    </Button>
    <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
  </td>
  <td>
    <Button className='btn-wishlist' onClick={() => {
                        removeWishlistItem(fd.id);
                      }}>
      <i className="fa-solid fa-trash"></i>
    </Button>
  </td>
</tr>
))}
  
     
        
        
      </tbody>
    </Table>
    
    <Button className='btn-wishlist-alldata' onClick={() => emptyWishlist()}>Delete All</Button>
      </Container>
    </div>
  )
}

export default Wishlist