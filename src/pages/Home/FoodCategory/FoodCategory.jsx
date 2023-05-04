/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import FoodCard from '../FoodCard/FoodCard';

const FoodCategory = () => {
    const { id } = useParams();
    const foodCategory = useLoaderData();
    // console.log('food category',foodCategory)
    return (
        <div>
            {/* <h2> This  category: {foodCategory.length}</h2> */}
            {
                foodCategory.map(food => <FoodCard
                    key={food._id}
                    food={food}
                ></FoodCard>)
            }
        </div>
    );
};

export default FoodCategory;