/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProviders';

const GoogleGithub = () => {
    const { signInWithGoogle,signInWithGithub} = useContext(AuthContext)
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.error(error);
        })
    }

    const handleGithubSignIn =()=>{
        signInWithGithub()
    }
    return (
        <div>
              <h4 className='mt-4'>Login With</h4>
            <div className=''>
            <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-2 m-2'><FaGoogle />Login with Google</Button>
            <Button onClick={handleGithubSignIn} variant="outline-secondary" className='mb-2 m-2'><FaGithub></FaGithub>Login with Github</Button>
            </div>
        </div>
    );
};

export default GoogleGithub;