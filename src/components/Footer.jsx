import React from 'react'
import { Row,Col, Button, Container } from 'react-bootstrap'
import {NavLink,Nav} from 'react-bootstrap'
import "../sass/footer.scss"
import "../sass/_footermedia.scss"

const Footer = () => {
  return (
    <>
    <div className='section1-footer'>
       <Container>
         <Row>
            <Col sm={12} md={4}>
                <div className="icons1">
                    <Button className='btn-icon'><i class="fa-brands fa-facebook-f"></i></Button>
                    <Button className='btn-icon'><i class="fa-brands fa-twitter"></i></Button>
                    <Button className='btn-icon'><i class="fa-brands fa-youtube"></i></Button>
                    <Button className='btn-icon'><i class="fa-brands fa-telegram"></i></Button>
                </div>
            </Col>
             <Col sm={12} md={4}>
                <div className="logo">
                    <img src="https://cdn.discordapp.com/attachments/1091845697462083585/1094320587754717214/logo.png" alt="" />
                </div>
            </Col>
            <Col sm={12} md={4}>
                <div className="icons2">
                    <Button className='btn-icon'><i class="fa-brands fa-apple-pay"></i></Button>
                    <Button className='btn-icon'><i class="fa-brands fa-ebay"></i></Button>
                    <Button className='btn-icon'><i class="fa-brands fa-fedex"></i></Button>
                    <Button className='btn-icon'><i class="fa-brands fa-stripe"></i></Button>
                </div>
            </Col>
        </Row>
       
       </Container>
      
    </div>
    
    <div className="section2-footer">
        <div className="footer-link">
        <Nav.Link className='text-white'><NavLink to="/about" className='text-white text-decoration-none mx-2'>ABOUT</NavLink></Nav.Link>
        <NavLink to="/shop" className='text-white text-decoration-none'>SHOP</NavLink>
        
        </div>
        <div className="input-footer">
              <label htmlFor="exampleInputEmail1" className="form-label me-2">
                Email
              </label>
              <input
              
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <button className='btn-footer2 ms-4'>SUBMIT</button>
              
            </div>
            <p className="text-center text-muted me-5 mt-3">© {new Date().getFullYear()} Mebeland by Jegtheme. All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer