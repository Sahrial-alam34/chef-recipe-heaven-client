/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import FoodZone from '../FoodZone/FoodZone';
import GoogleGithub from '../../../components/GoogleGithub/GoogleGithub';

const RightNav = () => {
    return (
        <div>
            <GoogleGithub></GoogleGithub>
          
            <div>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item>
                        <FaFacebook></FaFacebook>facebook
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaTwitter></FaTwitter>twitter
                    </ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>instagram</ListGroup.Item>

                </ListGroup>

            </div>
          <FoodZone></FoodZone>
        </div>
    );
};

export default RightNav;