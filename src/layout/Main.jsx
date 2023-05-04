/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className="min-vh-100" style={{ minHeight: "calc(100vh - 335px)" }}>
                <Outlet></Outlet>
            </Container>


            <Footer></Footer>
        </div>
    );
};

export default Main;