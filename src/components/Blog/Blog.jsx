/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Blog = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h2>This is blog page: {user && user.displayName}</h2>
        </div>
    );
};

export default Blog;