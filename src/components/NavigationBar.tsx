import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavigationBar.css"; 

export function NavigationBar() {
  return (
    <Navbar className="navbar-custom" variant="dark" expand="lg" fixed="top">
      <Container>
        {}
        <Navbar.Brand href="/" className="nav-brand">Career Helpi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/basic-quiz">Basic Quiz</Nav.Link>
            <Nav.Link href="/detailed-quiz">Detailed Quiz</Nav.Link>
            <Nav.Link href="/login">Login/Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}