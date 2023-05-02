/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <footer className='divide-y bg-success text-white'>
                <div></div>
                <div className='py-6 text-sm text-center bg'>
                    © 2023 chef recipe hunter Inc. All rights reserved.
                </div>
            </footer>
        </Container>
    );
};

export default Footer;