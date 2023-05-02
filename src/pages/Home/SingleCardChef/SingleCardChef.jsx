/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCardChef = ({ chef }) => {
   
    const {id,chefImg,name,experience,likes,numberOfRecipe,recipeDetails} = chef
    return (
        <div >
            {
                id
            }
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={chefImg}
                 />
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                  
                    <div className='d-flex justify-content-between'>
                        <p>Experience: {experience}</p>
                        <p>Likes:{likes}</p>
                        
                    </div>
                    
                    <p>Number of Recipe:{numberOfRecipe}</p>
                    
                    <Link>Recipe Details</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCardChef;