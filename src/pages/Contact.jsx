import React from 'react'
import "../sass/contact.scss"
import { Row, Col, Container, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import i18n from "../lang/i18n";
import { useTranslation } from "react-i18next";


const Contact = () => {

    const [t, i18n] = useTranslation();

  const clickHandle = (lang) => {
      i18n.changeLanguage(lang);
      localStorage.setItem("lng", lang);
    };
    return (
        <>
            <div className="contact-page">
                <Container>
                    <div className='h1-contact px-4 py-5'><h1>{t("contact")}</h1></div>

                    <Row className='row-contact mx-5'>
                        <Col sm={12} md={4}>
                            <div>
                                <h2 className='h2-contact'>{t("contact")}</h2>
                            </div>
                            <div>
                                <ul>
                                    <li><span>{t("call")} : +198 120 210 000</span></li>
                                    <li><span>Email : mebeland@domain.com</span></li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div>
                                <h2 className='h2-contact'>{t("hour")}</h2>
                            </div>
                            <div>
                                <ul>
                                    <li><span>{t("mon")} : 07:00 AM - 05:00PM</span></li>
                                    <li><span>{t("fri")} : 10:00 AM - 05:PM</span></li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div>
                                <h2 className='h2-contact'>{t("park")}</h2>
                            </div>
                            <div>
                                <p>{t("parking")}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='row1-contact mx-5'>
                        <Col sm={12} md={6}>
                            <h2>{t("location")}</h2>
                            <div>
                                <ul>
                                    <li><span>Ubud Street No.19, 11182, Bali, Indonesia</span></li>
                                    <li><span>400 - 1000 Portage Avenue</span></li>
                                    <li><span>Post Code : 11223344</span></li>
                                </ul>
                            </div>
                            <div>
                                <p>{t("location1")}</p>
                                <p>{t("location2")}</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className='contact-map'>
                                <iframe className='map1' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6077.285479594009!2d49.801764!3d40.39461000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030875c227553db%3A0xb0d0521121ce6d48!2sMebeland!5e0!3m2!1sru!2saz!4v1689510966288!5m2!1sru!2saz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Col>
                    </Row>
                    <Row className='row2-contact'>
                        <Col sm={12} md={6}>
                            <div className='contact-message'>
                                <h1>{t("message")}</h1>
                                <p>{t("message1")}</p>
                                </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className='input-groups d-flex'>
                                <InputGroup className="mb-3 me-3">
                                    <Form.Control className='input1'
                                        placeholder={t("name")}
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Form.Control className='input2'
                                        placeholder={t("email")}
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                </InputGroup>


                            </div>
                            <div className='input-groups2'>
                                <InputGroup className="mb-3">
                                    <Form.Control className='input3'
                                        placeholder={t("subject")}
                                        aria-label="subject"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup >

                                    <Form.Control className='input4' as="textarea" aria-label="With textarea" placeholder={t("message2")} />
                                </InputGroup>
                                <Button type='button' className='btn-contact'>{t("send")}</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contact