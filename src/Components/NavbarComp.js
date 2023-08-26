import React from 'react'
import { Navbar, Nav, Container, ButtonGroup, Button } from 'react-bootstrap';
import { useLocation, useNavigate, Link} from 'react-router-dom'; 

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
                <Navbar.Brand as={Link} to="home">Inotebook</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} className={`${location.pathname === "/home" ? "active" : ""}`} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} className={`${location.pathname === "/about" ? "active" : ""}`} to="about">About</Nav.Link>
                        <Nav.Link as={Link} className={`${location.pathname === "/contact" ? "active" : ""}`} to="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <ButtonGroup aria-label="Third group" size="sm">
                    <Button as={Link} className={`me-2 ${token!==null?"d-none":""}`} to="login">Login</Button>
                    <Button as={Link} className={`me-2 ${token!==null?"d-none":""}`} to="signup">SignUp</Button>
                    <Button as={Link} className={`me-2 ${token!==null?"":"d-none"}`} to="signup" onClick={onclickHandler}>LogOut</Button>
                </ButtonGroup>
            </Container>
        </Navbar>
    )
}
