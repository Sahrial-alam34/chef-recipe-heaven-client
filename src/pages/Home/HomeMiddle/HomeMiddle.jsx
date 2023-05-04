/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';


const HomeMiddle = () => {
  // const [details, setDetails]= useState([]);
  // console.log(details)
  // useEffect(() => {
  //     fetch('http://localhost:5000/foodCategories/0')
  //         .then(res => res.json())
  //         .then(data => setDetails(data))
  //         .catch(error => console.error(error))
  // }, [])
  return (
    <div className='container'>
      {/* {
              details === ![] &&
              details.map(detail=>{
                console.log('detals',detail)
              })
              
            } */}
      <Card className='mb-2 border-0 shadow'>
        <Card.Img
          style={{ width: '300px', height: '300px' }} className='p-2 mx-auto' variant="top" src="https://i.ibb.co/2vgqwKh/Turkish-Chicken.jpg" />
        <Card.Body>
          <Card.Title>
            <h2>Turkish Chicken Breasts</h2>
          </Card.Title>

          <div>
            <div className='d-flex gap-5'>
              <p><small>Rating: 4.5 </small></p>
              <p><small>Number of ingredients: 8 </small></p>
            </div>
            <p>Details: <small>The chicken breasts are filleted (cut into cutlets), so two large chicken breasts will feed four people, making this superb value for money. Plus, filleting the chicken ensures the chicken stays juicy and moist</small></p>
          </div>
        </Card.Body>
      </Card>
      <Card className=' border-0 shadow'>
        <Card.Img
          style={{ width: '300px', height: '300px' }} className='p-2 mx-auto' variant="top" src=" https://i.ibb.co/NrrsFfy/vegetarian-stuffed-peppers-1.jpg" />
        <Card.Body>
          <Card.Title>
            <h2>vegetarian-stuffed-pepper</h2>
          </Card.Title>

          <div>
            <div className='d-flex gap-5'>
              <p><small>Rating: 4.7 </small></p>
              <p><small>Number of ingredients: 9 </small></p>
            </div>
            <p>Details: <small>Turkish cuisine offers a large variety of Vegetarian Recipes, as many Turkish Side Dishes are made with fresh, seasonal vegetables and flavored with good quality olive oil and exotic spices.</small> </p>
           
          </div>
        </Card.Body>
      </Card>

    </div>
  );
};

export default HomeMiddle;