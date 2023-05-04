
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar, OverlayTrigger, Tooltip, } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import './Header.css'


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()

    }
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

                            {
                                user ?
                                    <div>

                                        <span className='d-flex'>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>{user.displayName}</Tooltip>}
                                            >
                                                <img className='rounded-circle mt-2 profileButton' style={{ height: '40px', width: '40px' }} src={user.photoURL}
                                                    alt={user.displayName} />
                                            </OverlayTrigger>

                                            {/* <div  >
                                                <p>{user.displayName}</p>
                                            </div> */}
                                            <button onClick={handleLogOut} className='btn btn secondary text-white'>Sign Out</button> </span>
                                    </div> : <div>
                                        <NavLink
                                            to="/register"
                                            className='text-white mt-2 p-2 text-decoration-none'

                                        >
                                            Register
                                        </NavLink>
                                        <NavLink to='/login' className='text-white mt-2 p-2 text-decoration-none'>Login</NavLink>
                                    </div>

                            }

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