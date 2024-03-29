import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import "../sass/register.scss"
import { Container } from 'react-bootstrap'




const Registration = () => {
  return (
    <section className="registration">
    
     <Container>
      <h1>Registration</h1>
    
            
              <form className="login-form">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control1"
                      placeholder=" lastname"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <input
                      type="tel"
                      className="form-control2"
                      placeholder=" phone"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="email"
                      className="form-control3"
                      placeholder=" email"
                    />
                  </div>
                </div>
                <div className="row">
                  
                  <div className="col-12 col-md-6">
                    <input
                      type="password"
                      className="form-control4"
                      placeholder=" password"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="password"
                      className="form-control5"
                      placeholder=" confirm password"
                    />
                  </div>
                </div>
                <label  className='label-chekout'>
                  <input type="checkbox" className='input-chekout' name="" id="" />
                 remember me
                </label>
                <div className="login-form1">
                  <span>
                    already 
                    <LinkContainer to={"/login"}>
                      <a className='login-register text-decoration-none' href="/login">Login</a>
                    </LinkContainer>
                  </span>
                </div>
              </form>
            
    <div className="subscribe">
      <div className="wrapper">
        <div className="subscribe-form">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 order-2 order-md-1">              
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
    </section>
  )
}

export default Registration