import {
  Nav, Image, Navbar, Container,
} from "react-bootstrap";
import React from "react";

export default function Header() {
  return (
    <Navbar bg="dark" className="shadow" sticky="top" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src="brooke-logo.png" width={80} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="header-navbar" />
        <Navbar.Collapse id="header-navbar">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
