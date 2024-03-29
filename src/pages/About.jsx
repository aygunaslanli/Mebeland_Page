import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../sass/about.scss"
import { useSpring,animated } from 'react-spring';
import i18n from "../lang/i18n";
import { useTranslation } from "react-i18next";
import "../sass/_homemedia.scss"


function Number ({n}) {
  const {number}= useSpring({
      from: {number:0},
      number: n,
      delay: 200,
      config: {mass: 1, transion: 20, friction: 20},

  });
  return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>;

}

const About = () => {

  const [t, i18n] = useTranslation();

  const clickHandle = (lang) => {
      i18n.changeLanguage(lang);
      localStorage.setItem("lng", lang);
    };

  return (

    <>
      <Container className='con-section-about'>
      <div className='about-h1'><h1>{t("about")}</h1></div>
        <section className='section1-about d-flex'>
        <Row className='row-about'>
          
        <Col sm={12} md={6} className='col-card'>
            <Card className='card-about'>

              <Card.Body className='card-body-about'>
                <Card.Title className='card-title-about'>
                  <h2>{t("architecture")}
                  </h2>
                </Card.Title>
                <Card.Text className='text-card'>
                  <img  className='img1-about' src="https://cdn.discordapp.com/attachments/1091845697462083585/1102684616915165327/signature-M6UF5EY-1024x255.png" alt="" />
                  <h4>{t("designed")} : <strong>Graziano Romano</strong></h4>
                </Card.Text>

              </Card.Body>
              <Card.Img data-aos="fade-right" className='img2-about' variant="top" src="https://cdn.discordapp.com/attachments/1091845697462083585/1124813744887836772/trendy-open-space-living-and-dining-room-interior-with-grey-couch-and-wooden-furniture-e1673417076864-q0hpw73s4pze5xofxe1se0bi4xgqy21h8ap46ttdi8.jpg" />
            </Card>
          </Col>
          <Col sm={12} md={6} className='col-card'>
            <Card className='card1-about '>

              <Card.Body className='card-body-about'>

                <Card.Text className='card-text1'>
                  <p>
                    <strong>
                      <em>“{t("architecture2")}”.</em>
                    </strong>
                  </p>
                  <p>
                  {t("architecture3")}
                  </p>
                </Card.Text>

              </Card.Body>
              <Card.Img data-aos="fade-left" className='img3-about' variant="top" src="https://cdn.discordapp.com/attachments/1091845697462083585/1124817661646348310/white-furniture-with-wooden-elements-e1673417085149-q0hpwfkk01w92yni1hnx5ssz3t1x3xcc7kme3ubzdu.jpg" />
            </Card>
          </Col>

        </Row>
        </section>
        </Container>
        <section className='section2-about d-flex'>
        <div className='section2-numbers mx-auto'>
        <Row className='section2-row3'>
                        <Col sm={12} md={2}>
                            <Card className='section2-rows3-cards'>
                                <Card.Img />

                                <Card.Body >
                                    <Card.Title className='section2-h1'><h1 className='section2-h1 d-flex'><Number n={2167}/> +</h1></Card.Title>
                                    <Card.Text className='section2-text'>
                                    {t("project")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={2}>
                            <Card className='section2-rows3-cards'>
                                <Card.Img />
                                <Card.Body>
                                    <Card.Title className='section2-h1'><h1 className='section2-h1 d-flex'><Number n={86}/> +</h1></Card.Title>
                                    <Card.Text className='section2-text'>
                                    {t("expert")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={2}>
                            <Card className='section2-rows3-cards'>
                                <Card.Img />
                                <Card.Body>
                                    <Card.Title className='section2-h1'><h1 className='section2-h1 d-flex'><Number n={1146}/> +</h1></Card.Title>
                                    <Card.Text className='section2-text'>
                                    {t("clients")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={2}>
                            <Card className='section2-rows3-cards'>
                                <Card.Img />
                                <Card.Body>
                                    <Card.Title className='section2-h1 d-flex'><h1 className='section2-h1 d-flex'><Number n={37}/> +</h1></Card.Title>
                                    <Card.Text className='section2-text'>
                                    {t("awards")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={2}>
                            <Card className='section2-rows3-cards'>
                                <Card.Img />

                                <Card.Body>
                                    <Card.Title className='section2-h1'><h1 className='section2-h1 d-flex'><Number n={114}/> +</h1></Card.Title>
                                    <Card.Text className='section2-text'>
                                    {t("branch")}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
        </div>
        </section>

        
        <section className='section3-about '>
          <div className='section3-about-words'>
          <h3>{t("team")}</h3>
          <h2>{t("expert1")}</h2>
          </div>
          <div className='section3-cards d-flex mx-auto'>
          <Row>
          <Col sm={12} md={4}>
          <Card className='section3-cards1'>
      <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1091845697462083585/1127685940261965955/carpenter-in-woodworking-shop-28HRJ3S.jpg" />
      <div class="social-icons">
    <a href="#" class="social-icon facebook"><i class="fab fa-facebook"></i></a>
    <a href="#" class="social-icon instagram"><i class="fab fa-instagram"></i></a>
    <a href="#" class="social-icon linkedin"><i class="fab fa-linkedin"></i></a>
  </div>
    </Card>
          </Col>
          <Col sm={12} md={4}>
          <Card className='section3-cards1'>
      <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1091845697462083585/1127686173180047440/carpenter-is-posing-SQ95HNT.jpg" />
      <div class="social-icons">
    <a href="#" class="social-icon facebook"><i class="fab fa-facebook"></i></a>
    <a href="#" class="social-icon instagram"><i class="fab fa-instagram"></i></a>
    <a href="#" class="social-icon linkedin"><i class="fab fa-linkedin"></i></a>
  </div>
    </Card>
          </Col>
          <Col sm={12} md={4}>
          <Card className='section3-cards1'>
      <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1091845697462083585/1127686901713883226/smiling-carpenter-X9MJH3A.jpg" />
      <div class="social-icons">
    <a href="#" class="social-icon facebook"><i class="fab fa-facebook"></i></a>
    <a href="#" class="social-icon instagram"><i class="fab fa-instagram"></i></a>
    <a href="#" class="social-icon linkedin"><i class="fab fa-linkedin"></i></a>
  </div>
    </Card>
          </Col>
          </Row>
          </div>


        </section>

        </>
     
    
  )
}

export default About