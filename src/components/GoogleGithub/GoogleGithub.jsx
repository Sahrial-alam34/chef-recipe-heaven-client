/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';

const GoogleGithub = () => {
    return (
        <div>
              <h4 className='mt-4'>Login With</h4>
            <div className=''>
            <Button variant="outline-primary" className='mb-2 m-2'><FaGoogle />Login with Google</Button>
            <Button variant="outline-secondary" className='mb-2 m-2'><FaGithub></FaGithub>Login with Github</Button>
            </div>
        </div>
    );
};

export default GoogleGithub;