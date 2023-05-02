/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ChefCard = () => {

    const [chefDetails, setChefDetails] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefDetails')
        .then(res => res.json())
        .then(data =>console.log(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
                <h2>Chef Details</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default ChefCard;