import React from "react";
import {
  Nav, Navbar, Container,
} from "react-bootstrap";
import Image from "next/image";
import brandPic from "public/brooke-logo.png";

export default function Header() {
  return (
    <Navbar bg="dark" className="shadow" sticky="top" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src={brandPic} width={80} height={80} placeholder="blur" className="rounded" alt="Brooke Rose Baer Personal Logo" />
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
