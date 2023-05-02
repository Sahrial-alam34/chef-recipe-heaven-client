/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import ChefCard from '../pages/Home/ChefCard/ChefCard';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <h2>Food details</h2>
                    </Col>
                    <Col lg={3}>

                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Container>
            <ChefCard></ChefCard>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;