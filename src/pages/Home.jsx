import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import products from "../data/productdetails";
import { Card, Button } from 'react-bootstrap';
import Producthome from '../components/Producthome';
import { useState } from 'react';
import { useSpring,animated } from 'react-spring';
import i18n from "../lang/i18n";
import { useTranslation } from "react-i18next";

import "../sass/home.scss"
import "../sass/_homemedia.scss"


function Number ({n}) {
    const {number}= useSpring({
        from: {number:0},
        number: n,
        delay: 200,
        config: {mass: 1, transion: 20, friction: 10},

    });
    return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>;

}

const Home = () => {
    const [t, i18n] = useTranslation();

    const clickHandle = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lng", lang);
      };

    const product = products.map((item) => (
        <Producthome
            title={item.title}
            photo={item.photo}
            price={item.price}
            alldata={item}
            key={item.id}
        />
    ));
    return (
        <>
            <div className="section1">
                <h2 className='con-h2'>01</h2>
                <div className='con-section'>
                    <div className="con-page-words">
                        <h2>{t("collection")}</h2>
                        <h1 className='h1-section1' >{t("concept")}</h1>
                        <p>{t("collectionwords")}
                        {t("collectionwords1")}
                        </p>
                        <button className='btn-homepage'>GET STARTED</button>
                    </div>
                </div>

            </div>
            <section className='section1-rows'>
                <Row className="con-section1">
                    <Col sm={12} md={3}>
                        <div className="row1 d-flex">
                            <h2 className='numbers-row'>01.</h2>
                            <h2 className='words-row'>{t("words1")}</h2>
                        </div>

                    </Col>
                    <Col sm={12} md={3}>
                        <div className="row2 d-flex">
                            <h2 className='numbers-row'>02.</h2>
                            <h2 className='words-row'>{t("words2")}</h2>
                        </div>
                    </Col>

                    <Col sm={12} md={3}>
                        <div className="row3 d-flex">
                            <h2 className='numbers-row'>03.</h2>
                            <h2 className='words-row'>{t("words3")}</h2>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="row4 d-flex">
                            <h2 className='numbers-row'>04.</h2>
                            <h2 className='words-row'>{t("words4")}</h2>
                        </div>
                    </Col>
                </Row>

            </section>
            <section className='section2-page d-flex'>
                <Container className='section-boxes'>
                    <Row className='d-flex'>
                        <Col sm={12} md={4} >

                            <div className="box1 ">
                                <h5>{t("about2")}</h5>
                                <h2>{t("collection2")}</h2>
                                <h3>{t("start")}</h3>
                                <img src="https://cdn.discordapp.com/attachments/1091845697462083585/1102684616915165327/signature-M6UF5EY-1024x255.png" alt="" />
                                <h4>{t("designed")} : <strong>Graziano Romano</strong></h4>
                                <h2 className="number2">02</h2>
                            </div>
                        </Col>
                        <Col sm={12} md={4} >
                            <div className="box2">
                                <h3>{t("new")}</h3>
                                <p>{t("furniture")}</p><br />
                                <p>{t("furniture2")}</p>
                                <p>{t("furniture3")}</p>
                            </div>
                        </Col>
                        <Col  data-aos="fade-left" sm={12} md={4} >
                            <div className="box3" >
                                <img className='image-section2' src="https://cdn.discordapp.com/attachments/1091845842257854474/1092069905299406940/3d-living-room-and-furniture-with-blank-photo-frame-e1673416654171-q0hpl6fy36td0w2oegb191j6k9kh9regmvuooevc4g.jpg" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className='section3'>
                <Container className='con-section3'>
                    <div className="section3-words">
                        <h4>{t("hot")}</h4>
                        <h2>{t("trend")}</h2>
                        <p>{t("trendabout")}</p>

                    </div>
                    <h2 className='number3'>03</h2>
                    <Row className='row-section3'>

                        {product}

                    </Row>
                </Container>

            </section>
            <section className='section4-page d-flex '>
                <Container className='con-section4 d-flex'>
                    <div data-aos="fade-right" className='col-12 col-sm-12 col-md-6 d-flex'>
                        <div className="section4-img"></div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 d-flex'>
                        <div className="section4-words">
                            <h4>Nicolò Conti</h4>
                            <h2>{t("modern")}</h2>
                            <h5>{t("items")}</h5>
                            <p>{t("livingroom")}</p>
                            <button><a href="#">{t("more")}</a></button>

                        </div>


                    </div>
                    <h2 className='number4'>04</h2>
                </Container>
            </section>
            <section className='section5-page'>
                <Container className='con-section5 d-flex'>
                    <div  className='col-12 col-sm-12 col-md-6'>
                        <div className="section5-words">
                            <h4>Aimeri Lémieux</h4>
                            <h2>{t("luxury")}</h2>
                            <h5>{t("items2")}</h5>
                            <p>{t("art")}</p>
                            <div className='btn-section5'> <button><a href="#">{t("more")}</a></button></div>
                            <h2 className='number5'>05</h2>
                        </div>


                    </div>
                    <div  data-aos="fade-left" className='col-12 col-sm-12 col-md-6'>
                        <div className="section5-img"></div>
                    </div>


                </Container>
            </section>
            <section className='section6-page'>
                <Container className='con-section6'>
                
                    <Row className='section6-row1'>
                        
                        <Col sm={12} md={6}>
                            <div className="section6-words">
                        
                                <h5>{t("why")}</h5>
                                <h2>{t("trending")}</h2>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                        
                            <div className="btn-section6">
                        
                                <button className='button-section6'><button className='icn-btn'><i class="fa-solid fa-play" style={{color: "#ffffff"}}></i></button><a href="#">{t("play")}</a></button>
                            </div>
                        </Col>
                    </Row>
                    <Row className='section6-row2'>
                        <Col sm={12} md={3}>
                            <Card className='card-section6'>
                                <Card.Img />
                                <i className="icon-section6 fa-solid fa-truck-fast"></i>
                                <Card.Body className='card-body-section6'>
                                    <Card.Title>{t("express")}</Card.Title>
                                    <Card.Text>
                                    {t("delivery")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={3}>
                            <Card className='card-section6'>
                                <Card.Img />
                                <i className="icon-section6 fa-solid fa-cube"></i>
                                <Card.Body className='card-body-section6'>
                                    <Card.Title>{t("premium")}</Card.Title>
                                    <Card.Text>
                                    {t("premium2")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={3}>
                            <Card className='card-section6'>
                                <Card.Img />
                                <i className="icon-section6 fa-solid fa-face-smile-wink"></i>
                                <Card.Body className='card-body-section6'>
                                    <Card.Title>{t("service")}</Card.Title>
                                    <Card.Text>
                                    {t("premium2")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={3}>
                            <Card className='card-section6'>
                                <Card.Img />
                                <i className="icon-section6 fa-solid fa-credit-card"></i>
                                <Card.Body className='card-body-section6'>
                                    <Card.Title>{t("payment")}</Card.Title>
                                    <Card.Text>
                                    {t("premium2")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                    <div className='line-section6'></div>
                    <Row className='section6-row3'>
                        <Col sm={12} md={2}>
                            <Card className='section6-rows3-cards'>
                                <Card.Img />

                                <Card.Body className='card-body-section6'>
                                    <Card.Title className='section6-h1'><h1 className='section6-h1 d-flex'><Number n={2167}/> +</h1></Card.Title>
                                    <Card.Text className='section6-text'>
                                    {t("project")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={2}>
                            <Card className='section6-rows3-cards'>
                                <Card.Img />
                                <Card.Body className='card-body-section6'>
                                    <Card.Title className='section6-h1'><h1 className='section6-h1 d-flex'><Number n={86}/> +</h1></Card.Title>
                                    <Card.Text className='section6-text'>
                                    {t("expert")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={2}>
                            <Card className='section6-rows3-cards'>
                                <Card.Img />
                                <Card.Body className='card-body-section6'>
                                    <Card.Title className='section6-h1'><h1 className='section6-h1 d-flex'><Number n={1146}/> +</h1></Card.Title>
                                    <Card.Text className='section6-text'>
                                    {t("clients")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={2}>
                            <Card className='section6-rows3-cards'>
                                <Card.Img />
                                <Card.Body className='card-body-section6'>
                                    <Card.Title className='section6-h1 d-flex'><h1 className='section6-h1 d-flex'><Number n={37}/> +</h1></Card.Title>
                                    <Card.Text className='section6-text'>
                                    {t("awards")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={2}>
                            <Card className='section6-rows3-cards'>
                                <Card.Img />

                                <Card.Body className='card-body-section6'>
                                    <Card.Title className='section6-h1'><h1 className='section6-h1 d-flex'><Number n={114}/> +</h1></Card.Title>
                                    <Card.Text className='section6-text'>
                                    {t("branch")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>



                </Container>
            </section>

            {/* <section className='section7-page d-flex'>
                <Row className='d-flex'>
                    <Col sm={12} md={6} >
                        <div className="box-section7 d-flex">
                            <img className='img-section7' src="https://cdn.discordapp.com/attachments/1091845697462083585/1123204456666894337/2323.jpg" alt="" />
                        </div>
                    </Col>

                    <Col sm={12} md={6} >
                        <div className='card-animation-section7'>
                            <Card className='card1-animation '>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card className='card2-animation'>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card className='card1-animation'>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card className='card2-animation'>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                </Row>

            </section> */}

        </>


    )
}

export default Home