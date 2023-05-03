/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';

const FoodCard = ({ food }) => {
    const { title, details, image_url, rating } = food;
    return (
        <div className='container'>
            <Card className="mb-4">
                <img src={image_url} alt="" />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>

                        {details}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                    <div>
                        <span className='me-2'>
                           Rating: {rating.number}
                        </span>
                        <span>
                            Badge: {rating.badge}
                        </span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default FoodCard;