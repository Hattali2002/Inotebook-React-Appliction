import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function NavbarComp() {
    let location=useLocation(); 
    return (
        <Navbar expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="home">Inotebook</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={`${location.pathname==="/home"?"active":""}`}  href="home">Home</Nav.Link>
                        <Nav.Link className={`${location.pathname==="/about"?"active":""}`} href="about">About</Nav.Link>
                        <Nav.Link className={`${location.pathname==="/contact"?"active":""}`} href="contact">Contact</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
