import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export function NavigationBar(): React.JSX.Element {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">Career Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/basic">Basic Quiz</Nav.Link>
            <Nav.Link href="/detailed">Detailed Quiz</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login/Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
