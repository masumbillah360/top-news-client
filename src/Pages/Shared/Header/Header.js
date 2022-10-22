import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut, setUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(()=>{
      console.log("success to sign Out");
      setUser({});
  })
    .catch((err)=>{console.log(err)})
  };
  console.log(user.uid);
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="navbar-brand">Top News All Time</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/home" className="nav-link">
              Home
            </Link>

            <Link className="nav-link" to="/about">
              About
            </Link>
            <span className="nav-link fw-bold">{user?.displayName}</span>
            {user?.uid ? (
              <button
                onClick={handleLogOut}
                className="nav-link border-0 rounded"
              >
                Log out <FaArrowAltCircleRight></FaArrowAltCircleRight>{" "}
              </button>
            ) : (
              <>
                <Link to="/registration" className="nav-link">
                  Registration
                </Link>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
