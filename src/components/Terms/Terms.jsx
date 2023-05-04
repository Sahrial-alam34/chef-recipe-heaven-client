/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <h2>Our Terms And Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis quasi voluptatum illo similique in, neque libero modi esse facilis! Atque ipsam nemo ipsum sequi voluptatum unde quam velit eum! Voluptates error, maxime illo tenetur maiores numquam ratione culpa facere atque, iure provident nam dolore itaque explicabo cupiditate quae ab.</p>

            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;