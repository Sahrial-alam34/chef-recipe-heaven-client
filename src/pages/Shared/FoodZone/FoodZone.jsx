/* eslint-disable no-unused-vars */
import React from 'react';
import foodzone1 from '../../../assets/foodzone1.jpg'
import foodzone2 from '../../../assets/foodzone2.jpg'
import foodzone3 from '../../../assets/foodzone3.jpg'

const FoodZone = () => {
    return (
        <div className='bg-light text-center my-4 py-4 '>
            <h4>Food Zone</h4>
            <div >
                <img className='mb-2' src={foodzone1} style={{width:'275px',height:'180px'}} alt="" />
                <img className='mb-2' src={foodzone2} style={{width:'275px',height:'180px'}} alt="" />
                <img className='mb-2' src={foodzone3} style={{width:'275px',height:'180px'}} alt="" />
            </div>
        </div>
    );
};

export default FoodZone;