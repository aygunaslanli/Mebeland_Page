import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import user from "../data/users";
import "../sass/login.scss"
import "../sass/header.scss"

import { Link, } from "react-router-dom";

const Login = () => {

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [alertText, setAlertText] = useState('');


     
    
 
  
  const loginSubmit = (e) => {
    e.preventDefault();
    if (!name || !pass) {
      alert('Please fill in both fields.');
    } else {
      let isAuthenticated = false;

      for (let x in user) {
        if (name === user[x].name && pass === user[x].password) {
          localStorage.setItem('user', user[x].name);
          isAuthenticated = true;
          setAlertText('');
          break;
        }
      }

      if (isAuthenticated) {
        // Ana sayfaya yönlendirme için window.location kullanımı
        window.location.href ="/chekout";
      } else {
        setAlertText('Name or password is wrong.');
      }
    }
  }

  return (
    <div className="login-page d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Login Page</h1>
      <p>{alertText}</p>

      <Col md={6}>
        <Form onSubmit={loginSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => { setPass(e.target.value) }} type="password" placeholder="Password" />
          </Form.Group>
          <h5 className="h5-login">Don't have an account? <Link className="link-login" to="/registration">Register here</Link></h5> 
          <Button className="btn-log" type="submit">
            Login
          </Button>
        </Form>
      </Col>
    </div>
  );
};

export default Login;