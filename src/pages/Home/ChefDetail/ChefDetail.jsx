/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetail = () => {
    const {id} = useParams()
   const [chefInfo,setChefInfo]= useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/chefDetails/${id}`)
        .then((res)=> res.json())
        .then((data)=>setChefInfo(data))
    },[])

    const {name, chefImg,numberOfRecipe}= chefInfo
    return (
        <div className='container'>
            <Card >
                <Card.Img variant="top" src=
                {chefImg} />
                <Card.Body>
                    <Card.Title>
                        {id}
                        {name}
                    </Card.Title>
                    <Card.Text>
                       
                        <p>{numberOfRecipe}</p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefDetail;