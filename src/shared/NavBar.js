import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/nav.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCount } from "../context/ItemCountContext";

function NavBar() {
  const { isLoggedIn, logout } = useAuth();
  const { itemCount } = useCount();
  // logo url
  const logoUrl =
    "https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-happy-shopping-logo-template_467913-990.jpg";

  // navbar code
  return (
    <Navbar expand="lg" className="navBar fixed-top">
      <Container>
        {/* logo */}
        <Navbar.Brand href="#home">
          <img className="logo" src={logoUrl} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggle-button"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <hr className="sep-line" />
          {/*links(home / products / best selling) */}
          <Nav className="ms-auto">
            <Link className="navLink" to={"/"}>
              <i className="fa-solid fa-house"></i> Home
            </Link>
            <Link className="navLink" to={"/products"}>
              <i className="fa-solid fa-shirt"></i> products
            </Link>
            <Link className="navLink" to={"/offers"}>
              <i className="fa-solid fa-star"></i> offers
            </Link>
          </Nav>
          <hr className="sep-line" />
          {/* cart / profile / login */}
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <Link className="navLink" to={"/cart"}>
                <div className="cart">
                  <div className="cart-icon">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="item-count">{itemCount}</span>
                  </div>
                </div>
              </Link>
            ) : null}
            {isLoggedIn ? (
              <Link className="navLink" to={"/profile"}>
                <i className="fa-solid fa-user"></i>
              </Link>
            ) : null}
            {isLoggedIn ? (
              <button className="navLink log-button" onClick={logout}>
                logout
              </button>
            ) : (
              <Link className="navLink log-button" to={"/login"}>
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
