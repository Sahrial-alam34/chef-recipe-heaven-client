/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Blog = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div className='container'>
            <h2>This is blog page: {user && user.displayName}</h2>
            <p>1. Differences between uncontrolled and controlled components</p>
            <p>Ans: </p>

        </div>
    );
};

export default Blog;