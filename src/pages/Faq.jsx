import React from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import "../sass/faq.scss";
import i18n from "../lang/i18n";
import { useTranslation } from "react-i18next";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  const [t, i18n] = useTranslation();

  const clickHandle = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lng", lang);
  };
  return (
    <div className="faq-page">
      <Container className="con-faq">
        <h1>FAQ</h1>
        <Row>
          <Col sm={12} md={6}>
            <div>
              <h4>{t("ask")}</h4>
              <p>
                <i class="fa-solid fa-phone"></i> +123 456 987 | +222 123 123
              </p>
              <p>
                <i class="fa-regular fa-envelope"></i> mebeland@domain.com
              </p>
            </div>
            <div>
              <h3>Customer Service</h3>
              <ul className="ul-faq">
                <li>
                  <a className="li-faq" href="">
                    {t("my")}
                  </a>
                </li>
                <li>
                  <a className="li-faq" href="">
                    {t("policies")}
                  </a>
                </li>
                <li>
                  <a className="li-faq" href="">
                    {t("options")}
                  </a>
                </li>
                <li>
                  <a className="li-faq" href="">
                    {t("gift")}
                  </a>
                </li>
                <li>
                  <a className="li-faq" href="">
                    {t("terms")}
                  </a>
                </li>
                <li>
                  <a className="li-faq" href="">
                    {t("how")}
                  </a>
                </li>
                <li>
                  <a className="li-faq" href="">
                    {t("works")}
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {t("card")}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{t("answer")}</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    {t("delivery")}
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{t("answer")}</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    {t("credit")}
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{t("answer")}</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    {t("outside")}
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{t("answer")}</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    {t("customs")}
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{t("answer")}</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    {t("shipping")}
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{t("answer")}</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    {t("ship")}
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{t("answer")}</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    {t("account")}
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{t("answer")}</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    {t("order")}
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{t("answer")}</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
