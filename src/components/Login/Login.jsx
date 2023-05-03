/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleGithub from '../GoogleGithub/GoogleGithub';
import { AuthContext } from '../../providers/AuthProviders';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';


const Login = () => {
    const {signIn,resetPassword} = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('')
            setSuccess('Login in Successfully')
            form.reset();
        })
        .catch(error=>{
            console.log(error);
            // setError('Email and Password does not match ');
            setError(error.message)
            setSuccess('')
        })

    
    }

  
   
    return (
        <Container className='w-25'>
            <h3>Please Login Your Account</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" ref={emailRef} placeholder="Enter email"  />
                    <Form.Text className="text-muted">


                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            
            <Link to='/register'>
                <p className='mt-2 mb-2' >
                    New to Web? Register
                </p>
            </Link>

            <div className='text-center'>
                <GoogleGithub></GoogleGithub>
            </div>
        </Container>
    );
};

export default Login;