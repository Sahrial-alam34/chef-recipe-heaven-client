/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodZone from '../FoodZone/FoodZone';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://assignment10-chef-recipe-hunter-react-firebase-s-sahrial-alam34.vercel.app/foodCategories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4>All Food Categories</h4>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}>
                        <Link to={`/foodCategory/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
            {/* <FoodZone></FoodZone> */}
            <div className='bg-light text-center my-4 py-4 mt-5'>
                <h4>Top Rated Food: </h4>
                <div >
                    <img className='mb-2' src='https://i.ibb.co/NrrsFfy/vegetarian-stuffed-peppers-1.jpg'style={{ width: '275px', height: '200px' }} alt="" />
                    <img className='mb-2' src="https://i.ibb.co/1GXQFYR/beef1.jpg" style={{ width: '275px', height: '200px' }} alt="" />
                    <img className='mb-2' src="https://i.ibb.co/WKyRvZh/drinks.jpg"style={{ width: '275px', height: '200px' }} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LeftNav;