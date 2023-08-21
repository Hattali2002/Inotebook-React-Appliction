import React from 'react'
import { Navbar, Nav, Container, ButtonGroup, Button } from 'react-bootstrap';
import { useLocation, useNavigate} from 'react-router-dom'; 

export default function NavbarComp() {
    const token=localStorage.getItem('token'); 
    let location = useLocation();
    const navigate=useNavigate();
    const onclickHandler=()=>{
        localStorage.removeItem('token');
        navigate("/login");
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="home">Inotebook</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={`${location.pathname === "/home" ? "active" : ""}`} href="home">Home</Nav.Link>
                        <Nav.Link className={`${location.pathname === "/about" ? "active" : ""}`} href="about">About</Nav.Link>
                        <Nav.Link className={`${location.pathname === "/contact" ? "active" : ""}`} href="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <ButtonGroup aria-label="Third group" size="sm">
                    <Button as="a" className={`me-2 ${token!==null?"d-none":""}`} href="login">Login</Button>
                    <Button as="a" className={`me-2 ${token!==null?"d-none":""}`} href="signup">SignUp</Button>
                    <Button as="a" className={`me-2 ${token!==null?"":"d-none"}`} href="signup" onClick={onclickHandler}>LogOut</Button>
                </ButtonGroup>
            </Container>
        </Navbar>
    )
}
