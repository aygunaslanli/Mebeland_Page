import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../sass/header.scss";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "../data/langdetails.js";
import { useCart } from "react-use-cart";
import { useState, useEffect } from "react";
import { useWishlist } from "react-use-wishlist";
import i18n from "../lang/i18n";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "dark");
  const { totalItems } = useCart();
  const [t, i18n] = useTranslation();
  const { totalWishlistItems } = useWishlist();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clickHandle = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lng", lang);
  };

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <Navbar className="navbar p-0" expand="lg">
      <Container className="con-header">
        <Navbar.Brand href="#home" className="logo mt-2 me-3">
          <img
            src="https://cdn.discordapp.com/attachments/1091845697462083585/1094320587754717214/logo.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mx-auto mt-2">
            <Nav.Link>
              <NavLink to="/" className="link-home text-decoration-none mx-2">
                {t("home")}
              </NavLink>
            </Nav.Link>
            <Nav.Link className="text-white">
              <NavLink
                to="/about"
                className="text-white text-decoration-none mx-2"
              >
                {t("about")}
              </NavLink>
            </Nav.Link>

            <NavLink
              to="/shop"
              className="text-white text-decoration-none my-auto ms-2"
            >
              {t("shop")}
            </NavLink>

            <NavDropdown
              className="dropdown-nav mx-2"
              title={
                <span>
                  <NavLink
                    to=""
                    className="  text-white text-decoration-none my-auto"
                  >
                    {t("features")}
                  </NavLink>
                </span>
              }
              id="nav-dropdown"
            >
              <NavDropdown.Item className="navlink-dropdown">
                <NavLink
                  className="text-decoration-none text-black"
                  to="/blogs"
                >
                  {t("blog")}
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className="navlink-dropdown">
                <NavLink className="text-decoration-none text-black" to="/FAQ">
                  FAQ
                </NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item className="navlink-dropdown">
                {" "}
                <NavLink
                  className="text-decoration-none text-black"
                  to="/notfoundpage"
                >
                  404
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <NavLink
                className="text-white text-decoration-none my-auto ms-2"
                to="/contact"
              >
                {t("contact")}
              </NavLink>
            </Nav.Link>
          </Nav>

          <div className="icon d-flex">
            <Link
            className="link-wish"
              to="/wishlist"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Button className="btn-wish mt-1 d-flex">
                {totalWishlistItems}
                <i class="fa-solid fa-heart ms-2 mt-1 "></i>
              </Button>
            </Link>

            <Link to="/cart">
              <Button
                className="btn-cart"
                variant="secondary"
                onClick={handleShow}
              >
                {totalItems}
                <i className="icon-cart fa-solid fa-cart-shopping ms-2 mt-2"></i>
              </Button>
            </Link>
            <Link to="/shop">
              <Button className="btn-search" variant="secondary">
                <i className="icon-search fa-solid fa-magnifying-glass mt-2"></i>
              </Button>
            </Link>
            <Link to="/">
              <NavDropdown
                className="btn-globe ms-2 mt-2"
                title={
                  <span>
                    <NavLink>
                      <i class="fa-solid fa-globe text-white"></i>
                    </NavLink>
                  </span>
                }
                id="nav-dropdown"
              >
                <NavDropdown.Item className="btn-lang2">
                  <button className="btn-lang1" onClick={() => clickHandle("ENG")}>ENG</button>
                </NavDropdown.Item>

                <NavDropdown.Item className="btn-lang2">
                  <button className="btn-lang1" onClick={() => clickHandle("AZE")}>AZE</button>
                </NavDropdown.Item>
              </NavDropdown>
            </Link>
            <Button
              className="btn-mode mb-1"
              onClick={() => {
                if (mode === "light") {
                  setMode("dark");
                  localStorage.setItem("mode", "dark");
                } else {
                  setMode("light");
                  localStorage.setItem("mode", "light");
                }
              }}
            >
              {mode === "light" ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-sun"></i>
              )}
            </Button>

            {localStorage.getItem("user") === null ? (
              <LinkContainer to="/login">
                <Button className="login-btn">Login</Button>
              </LinkContainer>
            ) : (
              <>
                <p className="me-3 mt-2">{localStorage.getItem("user")}</p>
                <Button
                  onClick={() => {
                    localStorage.removeItem("user");
                    window.location.reload();
                  }}
                  className="logout-btn"
                >
                  Log out
                </Button>
              </>
            )}
          </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
