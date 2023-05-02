/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }
    return (
        <div>
            {/* banner */}
            <div className='container'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
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
        </div>
    );
};

export default Home;