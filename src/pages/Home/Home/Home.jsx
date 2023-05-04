/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Shared/LeftNav/LeftNav';
import RightNav from '../../Shared/RightNav/RightNav';
import ChefCard from '../ChefCard/ChefCard';
import HomeMiddle from '../HomeMiddle/HomeMiddle';



const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }
    return (
        <div>
            {/* banner */}
            <div className='container'>
                <Carousel className='mb-5' activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={banner1}
                            alt="First slide"
                            style={{height: '500px'}}
                        />
                        <Carousel.Caption>
                            <h3>Barbique Lover</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className='btn btn-primary'>Place your order</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src=
                            {banner2}
                            alt="Second slide"
                            style={{height: '500px'}}
                        />

                        <Carousel.Caption>
                            <h3>Kabbab Heaven</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className='btn btn-primary'>Place your order</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=
                            {banner3}
                            alt="Third slide"
                            style={{height: '500px'}}
                        />

                        <Carousel.Caption>
                            <h3>Spice Lover</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            <button className='btn btn-primary'>Place your order</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* section */}
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        
                        <HomeMiddle></HomeMiddle>
                    </Col>
                    <Col lg={3}>

                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Container>
            <ChefCard></ChefCard>
            </Container>
        </div>
    );
};

export default Home;