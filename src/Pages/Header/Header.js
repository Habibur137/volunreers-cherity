import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#E01559", color: "#fff" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/manage">
              Manage
            </Nav.Link>
            <Nav.Link as={Link} to="/addservice">
              Add
            </Nav.Link>
            {user ? (
              <Nav.Link onClick={() => signOut(auth)}>Logout</Nav.Link>
            ) : (
              <span className="d-flex">
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </span>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
