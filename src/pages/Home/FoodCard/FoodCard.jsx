/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';

const FoodCard = ({ food }) => {
    const { title, details, image_url, rating } = food;
    return (
        <div className='container'>
            <Card className="mb-4 border-0 shadow">
                <div className='d-flex'>
                    <div>
                        <img className='mx-auto p-2'
                            style={{ height: '300px', width: '250px' }} src={image_url} alt="" />
                    </div>
                    <div>
                        <Card.Body>
                            <Card.Title>
                                {title}
                            </Card.Title>
                            <Card.Text>

                                {details}
                            </Card.Text>
                            <div>
                                <span className='me-2'>
                                    Rating: {rating.number}
                                </span>
                                <span>
                                    Badge: {rating.badge}
                                </span>
                            </div>
                        </Card.Body>
                        
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default FoodCard;