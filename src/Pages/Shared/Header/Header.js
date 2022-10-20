import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="navbar-brand">Top News All Time</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to='/home' className="nav-link">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/news' className="nav-link">News</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/about' className="nav-link">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/login' className="nav-link">Login</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
