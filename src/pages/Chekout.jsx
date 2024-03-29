import React, { useState } from "react";
import "../sass/chekout.scss";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Productchekout from "../components/Productchekout";
import chekoutproducts from "../data/productchekout";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

function Checkout(props) {
  const { totalItems, emptyCart } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleCloseModal = () => {
    handleClose();
    emptyCart(); // Clear the cart after the user clicks "Buy now"
  };

  const [validated, setValidated] = useState(false);
  const myproducts = chekoutproducts.map((item) => (
    <Productchekout
      title={item.title}
      photo={item.photo}
      price={item.price}
      alldata={item}
      key={item.id}
    />
  ));
  return (
    <>
      <div className="chekout">
        <Container>
          <h2>Payment</h2>
          <Row>
            <Col sm={12} md={6}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      className="form-chekout"
                      required
                      type="text"
                      placeholder="Aygun"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      className="form-chekout"
                      required
                      type="text"
                      placeholder="Aslanli"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        className="form-chekout"
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      className="form-chekout"
                      type="text"
                      placeholder="City"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      className="form-chekout"
                      type="text"
                      placeholder="State"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      className="form-chekout"
                      type="text"
                      placeholder="Zip"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button className="btn-chekout" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col sm={12} md={6}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label className="label-chekout">Card Number</Form.Label>
                  <Form.Control
                    className="form-chekout1"
                    required
                    type="number"
                    placeholder="1234 **** **** ****"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label className="label-chekout1">
                      Expiration date
                    </Form.Label>
                    <Form.Control
                      className="form-chekout2"
                      type="text"
                      placeholder="01/23"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label className="label-chekout2">CVV</Form.Label>
                    <Form.Control
                      className="form-chekout3 "
                      type="text"
                      placeholder="123"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
              </Form>
              <Button className="btn-pay" onClick={handleShow}>
                Pay now
              </Button>

              <Modal show={show} onHide={handleClose} className="modal-con">
                <Modal.Header className="modal-header" closeButton>
                  <Modal.Title className="modal-title">
                    Payment Successful
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                  Your order has been placed successfully!
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                  <Link to="/cart">
                  <Button
                    className="modal-btn"
                    onClick={() => {
                      handleClose();
                      emptyCart();
                    }}
                  >
                    Ok
                  </Button>
                  </Link>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="chekout-section1">
        <h3>Our Recommendation</h3>
        <Row className="section-chekout">{myproducts}</Row>
      </div>
    </>
  );
}

export default Checkout;
