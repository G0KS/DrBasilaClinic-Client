import logo from "../../assets/logo1.png";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
   return (
      <>
         <div className="head-bg">
            <Navbar className="navbar" collapseOnSelect expand="lg">
               <Container className="container-head">
                  <Navbar.Brand href="/" className="logo">
                     <img src={logo} height={"100%"} alt="logo" />
                  </Navbar.Brand>
                  <div className="logoText">
                     <p>Dr Basila's Homoeopathic Clinic</p>
                  </div>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="ms-auto text-center">
                        <Link to="/" className="list-item text-decoration-none">
                           Home
                        </Link>
                        <Link
                           to="/about"
                           className="list-item text-decoration-none"
                        >
                           About
                        </Link>
                        <Link
                           to="/services"
                           className="list-item text-decoration-none"
                        >
                           Services
                        </Link>
                        <Link
                           to="/contact"
                           className="list-item text-decoration-none"
                        >
                           Contact
                        </Link>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </div>
      </>
   );
}

export default Header;
