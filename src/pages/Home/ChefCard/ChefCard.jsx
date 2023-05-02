/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import SingleCardChef from '../SingleCardChef/SingleCardChef';

const ChefCard = () => {

    const [chefDetails, setChefDetails] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefDetails')
        .then(res => res.json())
        .then(data =>setChefDetails(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
                <h2>Chef Details</h2>
                <div className='d-flex gap-5'>
                {
                    chefDetails.map(chef=><SingleCardChef
                    key={chef.id}
                    chef={chef}
                    ></SingleCardChef>)
                }
                </div>
                
              
        </div>
    );
};

export default ChefCard;