
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {

    return (
        <div className='container'>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="success" >
                <Container>
                    <Navbar.Brand className='text-white' href="/">Recipe Heaven</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink to='/' className='text-white mt-2 p-2 text-decoration-none'>Home</NavLink>
                            <NavLink to='/blog' className='text-white mt-2 p-2 text-decoration-none' >Blog</NavLink>

                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="/login">

                                <Button variant="secondary">Profile</Button>{' '}
                            </Nav.Link>
                            <NavLink
                                to="/register"
                                className='text-white mt-2 p-2 text-decoration-none'

                            >
                                Register
                            </NavLink>

                           
                           
                            <NavLink to='/login' className='text-white mt-2 p-2 text-decoration-none'>Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='d-flex mt-2 mb-2'>
                <Button variant="danger">Open</Button>
                <Marquee className='text-danger' speed={100}>
                    24 Hours Open!!!! place your order now..... 24 Hours Open!!!! place your order now
                </Marquee>
            </div>
        </div>

    );
};

export default Header;