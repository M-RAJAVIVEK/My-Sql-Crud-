import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">CRUD App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/Home">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Gallery">
                        <Nav.Link>Gallery</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Create">
                        <Nav.Link>Create Post</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;