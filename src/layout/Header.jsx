import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import {
    Nav,
    Navbar,
    Container,
    NavDropdown,

} from 'react-bootstrap'
const Header = () => {


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href=""><Link to={'/'}>Home</Link></Nav.Link>
                        <Nav.Link href=""><Link to={'/Singin'}>Singin</Link></Nav.Link>
                        <Nav.Link href=""><Link to={'/Singup'}>SingUp</Link></Nav.Link>
                        {
                            localStorage.getItem('userInfo') ?
                        <Nav.Link href=""><Link to={'/'}>Logout</Link></Nav.Link>
                        :
                        null

                        }

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
