/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import SingleCardChef from '../SingleCardChef/SingleCardChef';

const ChefCard = () => {

    const [chefDetails, setChefDetails] = useState([]);

    useEffect(()=>{
        fetch('https://assignment10-chef-recipe-hunter-react-firebase-s-sahrial-alam34.vercel.app/chefDetails')
        .then(res => res.json())
        .then(data =>setChefDetails(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
                <h2 className='d-flex justify-content-center mb-5 mt-5'>Chef Details</h2>
                <div className='container row gap-3 justify-content-between mb-5'>
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