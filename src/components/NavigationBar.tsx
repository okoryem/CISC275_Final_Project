import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css"; 

export function NavigationBar() {
  return (
    <Navbar className="navbar-custom" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="nav-brand">
          Ultimate Career Quiz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/basic">Basic Quiz</Nav.Link>
            <Nav.Link as={NavLink} to="/detailed">Detailed Quiz</Nav.Link>
            <Nav.Link as={NavLink} to="/results">Results</Nav.Link>
            <Nav.Link as={NavLink} to="/apiTest">OpenAI API Test</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}