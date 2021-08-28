import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;
  const userInfo = true;

  return (
    <section className="header sticky-top">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            Branding Thing
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Link className="nav-link" to="/about">
              About
            </Link>
            {userInfo ? (
              <NavDropdown title={"Me"}>
                <NavDropdown.Item onClick={() => history.push('/profile')}>
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => history.push('/')}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : ( '' )}
          </Nav>
        </Container>
      </Navbar>
    </section>
  );
}